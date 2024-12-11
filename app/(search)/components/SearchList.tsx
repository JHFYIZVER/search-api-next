import axios from "axios";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/UI/skeleton";
import Input from "./Input";
import Pagination from "./Pagination";
const MainListItem = dynamic(
  () => import("@/modules/MainList/components/MainListItem"),
  {
    ssr: false,
    loading: () => <Skeleton className="w-full h-[240px]" />,
  }
);

export default async function SearchList({
  offset,
  title,
}: {
  offset: number;
  title: string;
}) {
  try {
    const animeSearch = await axios.get(
      "http://localhost:3000/api/anime/getByName?title=" +
        title +
        "&offset=" +
        offset
    );

    if (animeSearch.status !== 200) {
      return <div>Произошла ошибка при получении данных</div>;
    }

    return (
      <section>
        <h1 className="text-3xl font-bold pb-6">Поиск</h1>
        <Input />
        <div className="flex flex-col gap-5">
          {animeSearch.data.data.map((item: any) => (
            <MainListItem key={item.node.id} item={item} />
          ))}
        </div>
        <Pagination title={title} currentOffset={offset} />
      </section>
    );
  } catch (error) {
    console.log(error);
  }
}
