import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

// Ваш путь должен быть настроен как динамический маршрут [id]
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    if (!id) {
      return new NextResponse("ID is required", { status: 400 });
    }
    const response = await axios.get(
      `${process.env.API_URL}/${id}${process.env.API_URL_ID}`,
      {
        headers: {
          "X-MAL-CLIENT-ID": process.env.X_MAL_CLIENT_ID,
        },
      }
    );
    if (response.status !== 200) {
      return new NextResponse("Not found", { status: 404 });
    }
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("Error fetching data:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
