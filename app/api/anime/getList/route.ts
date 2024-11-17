import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const offset = request.nextUrl.searchParams.get("offset") || "0";
    const type = request.nextUrl.searchParams.get("type") || "all";
    const response = await axios.get(
      `${process.env.API_URL}/ranking?ranking_type=${type}&offset=${offset}&limit=10&fields=genres,mean,start_date,studios`,
      {
        headers: {
          "X-MAL-CLIENT-ID": process.env.X_MAL_CLIENT_ID,
        },
      }
    );
    if (response.status !== 200) {
      return new Response("Not found", { status: 404 });
    }

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
