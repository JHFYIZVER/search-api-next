import { MainList } from "@/modules/MainList";

export default async function Home({
  searchParams,
}: {
  searchParams: { offset?: string; type?: string };
}) {
  const offset = parseInt(searchParams.offset || "0", 10);
  const type = searchParams.type || "all";
  return (
    <main>
      <MainList type={type} offset={offset} />
    </main>
  );
}
