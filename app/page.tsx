import { MainList } from "@/modules/MainList";
import { useMemo } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: { offset?: string; type?: string };
}) {
  const { offset = "0", type = "all" } = searchParams;
  const offsetInt = parseInt(offset, 10);

  const memoizedData = useMemo(() => {
    return <MainList type={type} offset={offsetInt} />;
  }, [type, offsetInt]); 

  return <main>{memoizedData}</main>;
}
