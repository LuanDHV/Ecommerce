"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import type { Swiper as SwiperInstance } from "swiper";
import Link from "next/link";

const dataSwiperBanner = [
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/Pre-Booking-s25-moi.png",
    title: "GALAXY MỚI",
    subTitle: "Đặt gạch ngay",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/iphone-16-pro-tet-nang-cap-22-1.jpg",
    title: "IPHONE 16 PRO",
    subTitle: "Lên đời đón tết vui",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/tai-nghe-sony-tet-ant-2025.jpg",
    title: "SONY WH-1000XM5",
    subTitle: "Sôi động đón xuân",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/nothing-phone-2a-plus-tet-ant-2025-v2.png",
    title: "NOTHING PHONE",
    subTitle: "Giải trí xuyên Tết",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/watch-fit3-tet-ant-2025.jpg",
    title: "ĐỒNG HỒ HUAWEI",
    subTitle: "Sale Tết cực đỉnh",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/watch-fit3-tet-ant-2025.jpg",
    title: "ĐỒNG HỒ HUAWEI",
    subTitle: "Sale Tết cực đỉnh",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/watch-fit3-tet-ant-2025.jpg",
    title: "ĐỒNG HỒ HUAWEI",
    subTitle: "Sale Tết cực đỉnh",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/watch-fit3-tet-ant-2025.jpg",
    title: "ĐỒNG HỒ HUAWEI",
    subTitle: "Sale Tết cực đỉnh",
    link: "#",
  },
];

const dataCategory = [
  {
    title: "Điện thoại, tablet",
    icon: "",
    link: "#",
  },
  {
    title: "Điện thoại",
    icon: "",
    link: "#",
  },
  {
    title: "Điện thoại",
    icon: "",
    link: "#",
  },
  {
    title: "Điện thoại",
    icon: "",
    link: "#",
  },
  {
    title: "Điện thoại",
    icon: "",
    link: "#",
  },
  {
    title: "Điện thoại",
    icon: "",
    link: "#",
  },
];

export default function Menu() {
  const mainSwiperRef = useRef<SwiperInstance | null>(null);
  const navigationSwiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(index);
    }
  };
  return (
    <>
      <div className="flex w-full gap-3">
        <div className="w-2/6">
          {dataCategory.map((items, index) => (
            <div className="flex flex-col">
              <Link href={items.link} key={index}>
                {items.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex w-full cursor-pointer flex-col rounded-xl border shadow-lg lg:w-3/6">
          {/* Main Swiper */}
          <div className="w-full">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              onSwiper={(swiper) => {
                mainSwiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {dataSwiperBanner.map((items, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={items.img}
                    alt={items.title}
                    className="w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Swiper */}
          <div className="">
            <Swiper
              spaceBetween={10}
              navigation
              breakpoints={{
                356: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                800: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              onSwiper={(swiper) => {
                navigationSwiperRef.current = swiper;
              }}
            >
              {dataSwiperBanner.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => handleSlideChange(index)}
                    className={`relative cursor-pointer text-center ${
                      activeIndex === index ? "font-bold" : ""
                    }`}
                  >
                    <div className="flex h-20 flex-shrink-0 items-center justify-center px-2 text-xs text-[#343a40]">
                      {item.title} <br />
                      {item.subTitle}
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 mx-auto h-1 bg-red-500 transition-all duration-300 ${
                        activeIndex === index
                          ? "w-full opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex w-2/6 flex-col justify-between gap-2">
          <img
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/RightBanner-ong-ba-cha-me.jpg"
            alt="QUÀ TẶNG ÔNG BÀ Hạnh phúc đoàn viên"
            className="h-full w-full rounded-xl object-cover shadow-lg"
          />
          <img
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/RightBanner-con-em.jpg"
            alt="QUÀ TẶNG ÔNG BÀ Hạnh phúc đoàn viên"
            className="h-full w-full rounded-xl object-cover shadow-lg"
          />
          <img
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/RightBanner-nguoi-yeu.jpg"
            alt="QUÀ TẶNG ÔNG BÀ Hạnh phúc đoàn viên"
            className="h-full w-full rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
