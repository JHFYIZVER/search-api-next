import React from "react";

const BtnSubmit = ({ title }: { title: string }) => {
  return (
    <button
      type="submit"
      className="rounded-lg bg-slate-600 w-full flex items-center justify-center font-bold py-3 px-4"
    >
      {title}
    </button>
  );
};

export default BtnSubmit;
