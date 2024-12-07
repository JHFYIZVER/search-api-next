
import Pagination from "./components/Pagination";
import axios from "axios";
import SelecTrankingType from "./components/SelecTrankingType";
import dynamic from "next/dynamic";

const MainListItem = dynamic(() => import("./components/MainListItem"), { ssr: true });

export default async function MainList({
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
      <section>
        <h1 className="text-3xl font-bold pb-6">Поиск</h1>
        <SelecTrankingType currentOffset={offset} />
        <div className="flex flex-col gap-5">
          {animeData.data.map((item: any) => (
            <MainListItem key={item.node.id} item={item} />
          ))}
        </div>
        <Pagination currentType={type} currentOffset={offset} />
      </section>
    );
  } catch (error) {
    console.log(error);
  }
}
