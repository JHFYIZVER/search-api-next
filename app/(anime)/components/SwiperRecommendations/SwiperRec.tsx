"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { recomendationsSwiperType } from "../../@types/animeType";
import { useMemo } from "react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
const SwiperRec = ({ swiperInfo }: recomendationsSwiperType) => {
  const slides = useMemo(() => {
    return swiperInfo.map((item: any) => (
      <SwiperSlide style={{width: "225px"}} key={item.node.id}>
        <Link  href={`/anime/${item.node.id}`}>
          <img
            className="max-w-xs h-[318px] max-h-[318px] rounded-lg"
            src={item.node.main_picture.medium}
            alt="recomendation"
            loading="lazy"
          />
          <p className="text-lg font-medium">{item.node.title}</p>
        </Link>
      </SwiperSlide>
    ));
  }, [swiperInfo]);
  return swiperInfo.length > 0 ? (
    <section>
      <h2 className="text-2xl font-bold mb-5">Рекомендации</h2>
      <Swiper
        slidesPerView={"auto"}
        freeMode={true}
        spaceBetween={30}
        style={{ overflow: "hidden" }}
        pagination={{
          clickable: true,
        }}
       
        className="swiper"
      >
        {slides}
      </Swiper>
    </section>
  ) : null;
};

export default SwiperRec;
