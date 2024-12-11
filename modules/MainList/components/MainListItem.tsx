"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Skeleton } from "@/components/UI/skeleton";

export default function ({ item }: { item: any }) {
  const year = new Date(item.node.start_date).getFullYear();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={`/anime/${item.node.id}`} className="flex items-center gap-5 h-[240px]">
      <div className="img-container relative">
        {isLoading && <Skeleton className="absolute top-0 left-0 w-[160px] h-[240px] rounded-2xl" />}
        <Image
          className={`rounded-2xl max-w-40 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          src={item.node.main_picture.large}
          alt="image"
          loading="lazy"
          width={160}
          height={240}
          onLoad={() => setIsLoading(false)}
        />
        <span className="absolute left-2 top-2 bg-[#2C2D2E] text-white rounded-lg py-1 px-2">
          {item.node.mean}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-medium text-xl w-full">{item.node.title}</p>
        <div className="flex items-center text-[#818C99] text-sm">
          <ul className="flex flex-wrap ">
            <li className="mr-2 text-[#333a42] font-bold">Студии:</li>
            {item.node.studios.map((studio: any) => (
              <li key={studio.id} className="mr-2">
                {studio.name}
              </li>
            ))}
          </ul>
          <p>{year} год</p>
        </div>
        <ul className="flex flex-wrap text-sm max-w-[300px]">
          <li className="text-[#333a42] font-bold mr-2">Жанры:</li>
          {item.node.genres.map((genre: any) => (
            <li key={genre.id} className="text-[#818C99] mr-2">
              {genre.name},
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
