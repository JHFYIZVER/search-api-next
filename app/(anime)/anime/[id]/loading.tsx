import { Skeleton } from "@/components/UI/skeleton";

const loading = () => {
  return (
    <main className="max-w-[1000px] w-full">
      <div className="flex justify-between gap-5 mt-10">
        <Skeleton className="max-w-xs w-full h-[450px]" />
        <Skeleton className="max-w-lg w-full h-[450px]" />
      </div>
      <Skeleton className="w-full h-[240px] mt-5" />
    </main>
  );
};

export default loading;
