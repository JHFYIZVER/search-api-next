"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { recomendationsSwiperType } from "../../@types/animeType";

const SwiperRec = ({ swiperInfo }: recomendationsSwiperType) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-5">Рекомендуем посмотреть</h2>
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        {swiperInfo.map((item: any) => (
          <SwiperSlide key={item.node.id}>
            <Link href={`/anime/${item.node.id}`}>
              <img
                className="max-w-xs h-[318px] max-h-[318px] rounded-lg"
                src={item.node.main_picture.medium}
                alt=""
              />
              <p className="text-lg font-medium">{item.node.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperRec;
