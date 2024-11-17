import React from "react";

const Description = ({ synopsis }: { synopsis: string }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-5">Описание</h2>
      <p className="text-[#6D7885] text-base">{synopsis}</p>
    </section>
  );
};

export default Description;
