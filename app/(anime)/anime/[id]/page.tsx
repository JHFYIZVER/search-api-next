import axios from "axios";
import React from "react";
import SwiperRec from "../../components/SwiperRecommendations/SwiperRec";
import Description from "../../components/Description";
import MainInformation from "../../components/MainInformation";
import Preloader from "@/components/Preloader";

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
      return <div>Произошла ошибка при получении данных</div>;
    }

    return (
      <main className="max-w-[1000px] w-full">
        <MainInformation data={animeData.data} />
        <Description synopsis={animeData.data.synopsis} />
        <SwiperRec swiperInfo={animeData.data.recommendations} />
      </main>
    );
  } catch (error) {
    console.log(error);
  }
}
