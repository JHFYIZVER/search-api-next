"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import React from "react";

const Input = () => {
  const [search, setSearch] = React.useState("");
  const debounceSearch = useDebounce(search, 300);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?title=${debounceSearch}`);
  };

  return (
    <form
      className="flex justify-between items-center gap-2 mb-5"
      onSubmit={handleSubmit}
    >
      <input
        className="py-2 px-5 w-full outline-none rounded-lg bg-gray-700/20"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Введите название"
      />

      <button
        className="py-2 px-5 bg-slate-900 text-white rounded-lg"
        type="submit"
      >
        Поиск
      </button>
    </form>
  );
};

export default Input;
