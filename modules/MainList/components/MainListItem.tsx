import Link from "next/link";
import React from "react";

const MainListItem = ({ item }: { item: any }) => {
  return (
    <Link href={`/anime/${item.node.id}`} className="flex">
      <img
        src={item.node.main_picture.large}
        alt="image"
        width={100}
        height={100}
      />
      <p>{item.node.title}</p>
    </Link>
  );
};

export default MainListItem;
