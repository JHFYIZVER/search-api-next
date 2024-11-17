import axios from "axios";
import React from "react";

async function getTitle(id: string) {
  const animeData = await axios.get(
    `http://localhost:3000/api/anime/getById/${id}`
  );

  return animeData.data.title;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;

  const title = await getTitle(id);
  return {
    title,
    description: "Информация об аниме",
    openGraph: {
      title,
      description: "Информация об аниме",
    },
  };
}

export default async function Page({ params }: { params: any }) {
  try {
    const { id } = params;
    const animeData = await axios.get(
      `http://localhost:3000/api/anime/getById/${id}`
    );

    if (animeData.status !== 200) {
      return <div>Произошла ошибка при получении данныхываываыв</div>;
    }

    console.log(animeData.data.recommendations);
    

    return <div>ыаываываыва</div>;
  } catch (error) {
    console.log(error);
  }
}
