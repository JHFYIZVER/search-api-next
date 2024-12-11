import Pagination from "./components/Pagination";
import SelecTrankingType from "./components/SelecTrankingType";
import PopularList from "./components/PopularList";

export default function MainList({
  offset,
  type,
}: {
  offset: number;
  type: string;
}) {
  return (
    <section>
      <h1 className="text-3xl font-bold pb-6">Топ аниме</h1>
      <SelecTrankingType currentOffset={offset} />
      <PopularList offset={offset} type={type} />
      <Pagination currentType={type} currentOffset={offset} />
    </section>
  );
}
