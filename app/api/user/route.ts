import { db } from "@/app/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, password } = data;

    const isExistingUser = await db.user.findUnique({
      where: { email: email },
    });

    if (isExistingUser) {
      return NextResponse.json({ message: "User already exists" });
    }

    const hashPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name: name,
        email: email,
        password: hashPassword,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({ user: rest, message: "User created" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
