"use client";
import Image from "next/image";
import { mainInfo } from "../@types/animeType";
import { useState } from "react";
import { Skeleton } from "@/components/UI/skeleton";

const MainInformation = ({ data }: { data: mainInfo }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <section className="mb-10">
      <div className="flex flex-wrap gap-7">
        <div className="img-container relative">
          {isLoading && (
            <Skeleton className="absolute top-0 left-0 w-[320px] h-[450px] rounded-3xl" />
          )}
          <Image
            className={`max-w-xs w-full rounded-3xl h-[450px] ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            src={data.main_picture?.large}
            alt={data.title}
            loading="lazy"
            width={320}
            height={450}
            onLoad={() => setIsLoading(false)}
          />
          <span className="absolute left-4 top-4 bg-[#2C2D2E] text-white font-bold rounded-lg py-1 px-2">
            {data.mean}
          </span>
          <span className="absolute right-4 bottom-4 bg-[#2C2D2E] text-white font-bold rounded-lg py-1 px-2">
            Рейтинг: {data.rating}
          </span>
        </div>
        <div className="flex flex-col gap-1 max-w-lg">
          <h1 className="text-4xl font-bold ">{data.title}</h1>
          <p className="text-lg text-[#333a42]">
            <span className="font-bold">Nsfw:</span>
            {data.nsfw === "white" ? "🔞" : "нет"}
          </p>
          <p className="text-lg text-[#333a42]">
            <span className="font-bold">Тип:</span> {data.media_type}
          </p>
          <p className="text-lg text-[#333a42]">
            <span className="font-bold">Источник:</span> {data.source}
          </p>
          <ul className="flex flex-wrap items-center max-w-xl">
            <li className="text-[#333a42] mr-3 font-bold text-lg">Жанры:</li>
            {data.genres?.map((item: any) => (
              <li className="text-[#6D7885] mr-3" key={item.id}>
                {item.name},
              </li>
            ))}
          </ul>
          <p className="text-lg">
            <span className="font-bold">Статус:</span> {data.status}
          </p>
          <p className="text-lg text-[#333a42]">
            <span className="font-bold">Кол-во эпизодов:</span>{" "}
            {data.num_episodes}
          </p>
          <ul className="flex flex-col text-[#333a42] font-bold py-4">
            <li>Смотрят: {data.statistics?.status?.watching}</li>
            <li>Завершено: {data.statistics?.status?.completed}</li>
            <li>Приостановлено: {data.statistics?.status?.on_hold}</li>
            <li>Брошено: {data.statistics?.status?.dropped}</li>
            <li>В планах: {data.statistics?.status?.plan_to_watch}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainInformation;
