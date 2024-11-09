import { db } from "@/app/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    const exsitingUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (exsitingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 409,
      });
    }

    const passwordHash = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });

    const { password: newPassword, ...rest } = newUser;

    return NextResponse.json({ user: rest });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ message: "Что-то пошло не так" }), {
      status: 500,
    });
  }
}

export async function GET() {
  return NextResponse.json({ test: "test_message" });
}
