"use client";
import { Select } from "@headlessui/react";
import { useRouter } from "next/navigation";

const SelecTrankingType = ({ currentOffset }: { currentOffset: number }) => {
  const router = useRouter();
  return (
    <Select
      name="status"
      className="border bg-[#F5F5F5] py-3 px-5 text-center data-[hover]:shadow data-[focus]:bg-blue-100 w-full mb-4 rounded-xl font-semibold outline-none"
      aria-label="Project status"
      onChange={(e) =>
        router.push(`/?offset=${currentOffset}&type=${e.target.value}`)
      }
    >
      <option value="select" disabled>
        Выберите категорию
      </option>
      <option value="all">Все</option>
      <option value="airing">В трансляции</option>
      <option value="upcoming">Топ предстоящих аниме</option>
      <option value="tv">ТВ сериалы</option>
      <option value="ova">Ova</option>
      <option value="movie">Топ фильмов</option>
      <option value="special">Топ спешлов</option>
      <option value="bypopularity">По популярности</option>
      <option value="favorite">Топ избранных</option>
    </Select>
  );
};

export default SelecTrankingType;
