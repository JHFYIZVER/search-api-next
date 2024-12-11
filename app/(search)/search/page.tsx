import SearchList from "../components/SearchList";
import { useMemo } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: { offset?: string; title?: string };
}) {
  const { offset = "0", title = "one" } = searchParams;
  const offsetInt = parseInt(offset, 10);

  const memoizedData = useMemo(() => {
    return <SearchList title={title} offset={offsetInt} />;
  }, [title, offsetInt]);

  return <main>{memoizedData}</main>;
}
