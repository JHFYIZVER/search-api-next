import { db } from "@/app/lib/db";
import { hash } from "bcrypt";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, password } = data;

    const isExistingUser = await db.user.findUnique({
      where: { email },
    });

    if (isExistingUser) {
      throw new Error("User already exists");
    }

    const hashPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    const userResponse = { ...newUser } as { password?: string };
    delete userResponse.password;

    return NextResponse.json({ user: userResponse, message: "User created" });
  } catch (error: unknown) {
    console.error(error);

    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const userId = id ? parseInt(id, 10) : null;

    if (!userId) {
      throw new Error("Invalid or missing user ID");
    }

    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const userResponse = { ...user } as { password?: string };
    delete userResponse.password;

    return NextResponse.json({ user: userResponse, message: "User found" });
  } catch (error: unknown) {
    console.error(error);

    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
