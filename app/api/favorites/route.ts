import { db } from "@/app/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, title, description } = data;

    const isExistingUser = await db.user.findUnique({
      where: { id: id },
    });

    if (!isExistingUser) {
      const error = new Error("User not found");
      throw error;
    }

    const favoritesUser = await db.favorites.create({
      data: {
        userId: id,
        title: title,
        description: description,
      },
    });

    return NextResponse.json({
      favorites: favoritesUser,
      message: "Favorites created",
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const userId: number | undefined = id ? parseInt(id) : undefined;
    const newUserFavorites = await db.favorites.findMany({
      where: { userId: userId },
    });

    if (!newUserFavorites) {
      const error = new Error("User not found");
      throw error;
    }

    return NextResponse.json({
      favorites: newUserFavorites,
      message: "User found",
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const data = await request.json();
    const favoriteId = data.id;
    const id = request.nextUrl.searchParams.get("id");
    const userId: number | undefined = id ? parseInt(id) : undefined;

    const isExistingUser = await db.user.findUnique({
      where: { id: userId },
    });

    if (!isExistingUser) {
      const error = new Error("User not found");
      throw error;
    }

    const favoritesUser = await db.favorites.delete({
      where: { id: favoriteId },
    });

    return NextResponse.json({
      favorites: favoritesUser,
      message: "Favorites deleted",
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
