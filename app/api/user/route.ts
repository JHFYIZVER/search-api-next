import { db } from "@/app/lib/db";
import { hash } from "bcrypt";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, password } = data;

    const isExistingUser = await db.user.findUnique({
      where: { email: email },
    });

    if (isExistingUser) {
      const error = new Error("User already exists");
      throw error;
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
    console.log(error);
    throw error;
  }
}

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const userId: number = id ? parseInt(id) : (null as any);

    if (!userId) {
      const error = new Error("User not found");
      throw error;
    }
    const newUser = await db.user.findUnique({
      where: { id: userId },
    });

    if (!newUser) {
      const error = new Error("User not found");
      throw error;
    }

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({ user: rest, message: "User found" });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
