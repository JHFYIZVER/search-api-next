import axios from "axios";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/UI/skeleton";
const MainListItem = dynamic(() => import("./MainListItem"), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-[240px]" />,
});

export default async function PopularList({
  offset,
  type,
}: {
  offset: number;
  type: string;
}) {
  try {
    const animeData = await axios.get(
      "http://localhost:3000/api/anime/getList?offset=" +
        offset +
        "&type=" +
        type
    );

    if (animeData.status !== 200) {
      return <div>Произошла ошибка при получении данных</div>;
    }

    return (
      <div className="flex flex-col gap-5">
        {animeData.data.map((item: any) => (
          <MainListItem key={item.node.id} item={item} />
        ))}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
