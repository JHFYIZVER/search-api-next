import MainListItem from "./components/MainListItem";
import Pagination from "./components/Pagination";
import axios from "axios";
export default async function MainList() {
  const offset = 0;
  try {
    const animeData = await axios.get(
      "http://localhost:3000/api/anime?offset=" + offset
    );

    if (animeData.status !== 200) {
      return <div>Произошла ошибка при получении данных</div>;
    }

    console.log(animeData.data);

    return (
      <div>
        <h1>Поиск</h1>
        {animeData.data.map((item: any) => (
          <MainListItem key={item.node.id} item={item} />
        ))}
        <Pagination />
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
