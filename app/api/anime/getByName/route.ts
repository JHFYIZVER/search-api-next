import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const title = request.nextUrl.searchParams.get("title");
    const offset = request.nextUrl.searchParams.get("offset") || "0";

    if (title) {
      const response = await axios.get(
        `${process.env.API_URL}?q=${title}&limit=10&offset=${offset}&fields=genres,mean,start_date,studios`,
        {
          headers: {
            "X-MAL-CLIENT-ID": process.env.X_MAL_CLIENT_ID,
          },
        }
      );
      if (response.status !== 200) {
        return new Response("Not found", { status: 404 });
      }
      return NextResponse.json(response.data);
    }
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
