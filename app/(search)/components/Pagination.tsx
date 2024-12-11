"use client";
import { useRouter } from "next/navigation";

const Pagination = ({
  currentOffset,
  title,
}: {
  currentOffset: number;
  title: string;
}) => {
  const router = useRouter();

  const handleNext = () => {
    router.push(`/search?title=${title}&offset=${currentOffset + 10}`);
  };

  const handlePrev = () => {
    router.push(
      `/search?title=${title}&offset=${Math.max(0, currentOffset - 10)}`
    );
  };

  const clazz: string = "py-2 px-2 bg-[#EBECF0] rounded-lg";

  return (
    <div className="flex justify-between items-center py-5 font-semibold">
      <button
        className={currentOffset === 0 ? "opacity-50" : clazz}
        onClick={handlePrev}
        disabled={currentOffset === 0}
      >
        Предыдущая страница
      </button>
      <button className={clazz} onClick={handleNext}>
        Следующая страница
      </button>
    </div>
  );
};

export default Pagination;
