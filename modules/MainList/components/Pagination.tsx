"use client";
import { useState } from "react";

const Pagination = () => {
  const [offset, setOffset] = useState(0);
  return (
    <div className="flex items-center">
      <button>{"<"} </button>
      <span>{offset}</span>
      <button>{">"}</button>
    </div>
  );
};

export default Pagination;
