"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";

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
    category: "Điện thoại, Tablet",
    icon: "/imgs/home-page/phone-icon.svg",
    link: "#",
    subMenu: [
      {
        title: "Hãng điện thoại",
        subTitles: [
          { name: "iPhone", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "OPPO", link: "#" },
          { name: "realme", link: "#" },
          { name: "TECNO", link: "#" },
          { name: "vivo", link: "#" },
          { name: "infinix", link: "#" },
          { name: "Nokia", link: "#" },
          { name: "Nubia", link: "#" },
          { name: "Nothing Phone", link: "#" },
          { name: "Masstel", link: "#" },
          { name: "Sony", link: "#" },
          { name: "iTel", link: "#" },
          { name: "Điện thoại phổ thông ", link: "#" },
        ],
      },
      {
        title: "Mức giá điện thoại",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
          { name: "Từ 13-20 triệu", link: "#" },
          { name: "Trên 20 triệu", link: "#" },
        ],
      },
      {
        title: "Điện thoại HOT",
        subTitles: [
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 15 Pro Max", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
  {
    category: "Laptop",
    icon: "/imgs/home-page/laptop-icon.svg",
    link: "#",
    subMenu: [
      {
        title: "Thương hiệu",
        subTitles: [
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "Oppo", link: "#" },
        ],
      },
      {
        title: "Phân khúc giá",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
        ],
      },
      {
        title: "Dòng chip",
        subTitles: [
          { name: "Laptop core i5", link: "#" },
          { name: "Laptop core i5", link: "#" },
          { name: "Laptop core i5", link: "#" },
          { name: "Laptop core i5", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
  {
    category: "Âm thanh",
    icon: "/imgs/home-page/sound-icon.svg",
    link: "#",
    subMenu: [
      {
        title: "Hãng điện thoại",
        subTitles: [
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "Oppo", link: "#" },
        ],
      },
      {
        title: "Mức giá điện thoại",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
        ],
      },
      {
        title: "Điện thoại HOT",
        subTitles: [
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
  {
    category: "Đồng hồ, Camera",
    icon: "/imgs/home-page/watch-icon.svg",
    link: "#",
    subMenu: [
      {
        title: "Hãng điện thoại",
        subTitles: [
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "Oppo", link: "#" },
        ],
      },
      {
        title: "Mức giá điện thoại",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
        ],
      },
      {
        title: "Điện thoại HOT",
        subTitles: [
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
  {
    category: "Đồ gia dụng",
    icon: "/imgs/home-page/house-icon.svg",
    link: "#",
    subMenu: [
      {
        title: "Hãng điện thoại",
        subTitles: [
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "Oppo", link: "#" },
        ],
      },
      {
        title: "Mức giá điện thoại",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
        ],
      },
      {
        title: "Điện thoại HOT",
        subTitles: [
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
  {
    category: "Phụ kiện",
    icon: "/imgs/home-page/cap-icon.svg",
    link: "#",
    subMenu: [
      {
        title: "Hãng điện thoại",
        subTitles: [
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "Oppo", link: "#" },
        ],
      },
      {
        title: "Mức giá điện thoại",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
        ],
      },
      {
        title: "Điện thoại HOT",
        subTitles: [
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
  {
    category: "PC, Màn hình, Máy in",
    icon: "/imgs/home-page/pc-icon.png",
    link: "#",
    subMenu: [
      {
        title: "Hãng điện thoại",
        subTitles: [
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "Oppo", link: "#" },
        ],
      },
      {
        title: "Mức giá điện thoại",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
        ],
      },
      {
        title: "Điện thoại HOT",
        subTitles: [
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
  {
    category: "Tivi",
    icon: "/imgs/home-page/tv-icon.png",
    link: "#",
    subMenu: [
      {
        title: "Hãng điện thoại",
        subTitles: [
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "Oppo", link: "#" },
        ],
      },
      {
        title: "Mức giá điện thoại",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
        ],
      },
      {
        title: "Điện thoại HOT",
        subTitles: [
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
  {
    category: "Thu cũ đổi mới",
    icon: "/imgs/home-page/change-icon.svg",
    link: "#",
    subMenu: [
      {
        title: "Hãng điện thoại",
        subTitles: [
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "Oppo", link: "#" },
        ],
      },
      {
        title: "Mức giá điện thoại",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
        ],
      },
      {
        title: "Điện thoại HOT",
        subTitles: [
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
  {
    category: "Hàng cũ",
    icon: "/imgs/home-page/old-icon.svg",
    link: "#",
    subMenu: [
      {
        title: "Hãng điện thoại",
        subTitles: [
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "Oppo", link: "#" },
        ],
      },
      {
        title: "Mức giá điện thoại",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
        ],
      },
      {
        title: "Điện thoại HOT",
        subTitles: [
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
  {
    category: "Khuyến mãi",
    icon: "/imgs/home-page/sale-icon.svg",
    link: "#",
    subMenu: [
      {
        title: "Hãng điện thoại",
        subTitles: [
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "Oppo", link: "#" },
        ],
      },
      {
        title: "Mức giá điện thoại",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
        ],
      },
      {
        title: "Điện thoại HOT",
        subTitles: [
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
  {
    category: "Tin công nghệ",
    icon: "/imgs/home-page/news-icon.svg",
    link: "#",
    subMenu: [
      {
        title: "Hãng điện thoại",
        subTitles: [
          { name: "Apple", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Xiaomi", link: "#" },
          { name: "Oppo", link: "#" },
        ],
      },
      {
        title: "Mức giá điện thoại",
        subTitles: [
          { name: "Dưới 2 triệu", link: "#" },
          { name: "Từ 2 triệu", link: "#" },
          { name: "Từ 4-7 triệu", link: "#" },
          { name: "Từ 7-13 triệu", link: "#" },
        ],
      },
      {
        title: "Điện thoại HOT",
        subTitles: [
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
          { name: "iPhone 16 series", link: "#" },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        subTitles: [
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
          { name: "Huawei MatePad", link: "#" },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        subTitles: [
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
          { name: "iPad Air 2024", link: "#" },
        ],
      },
    ],
  },
];

export default function Menu() {
  const mainSwiperRef = useRef<SwiperInstance | null>(null);
  const navigationSwiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(index);
    }
  };
  return (
    <>
      <div className="relative flex h-auto w-full gap-3">
        {/* Menu */}
        <div className="group hidden rounded-lg border-x border-b shadow-lg md:block md:w-2/6 lg:w-1/5">
          {dataCategory.map((items, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <>
                <div className="flex h-[30px] flex-col px-[10px] duration-300 ease-in-out hover:bg-gray-200">
                  <Link
                    href={items.link}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src={items.icon}
                        alt="Icon"
                        className="mr-[5px] h-5 w-5 object-cover"
                      />
                      <span className="text-xs font-bold text-[#343a40] duration-300 ease-in-out hover:text-[#d70018]">
                        {items.category}
                      </span>
                    </div>
                    <img
                      src="/imgs/home-page/icon-right.svg"
                      alt="Icon Right"
                      className="h-[15px] w-[9px] object-contain"
                    />
                  </Link>
                </div>

                {/* Submenu */}
                {hoveredCategory === index ? (
                  <div className="max-h-auto absolute right-4 top-0 z-40 hidden min-h-full justify-between rounded-lg border-x border-b bg-white p-5 shadow-sm group-hover:flex md:w-4/6 lg:w-4/5">
                    {items.subMenu.map((subItems, subIndex) => (
                      <div className="flex flex-col" key={subIndex}>
                        <div className="font-bold text-[#343a40]">
                          {subItems.title}
                        </div>
                        <div className="mt-2 flex flex-col items-start gap-2">
                          {subItems.subTitles.map((subTitle, titleIndex) => (
                            <Link
                              href={subTitle.link}
                              key={titleIndex}
                              className="cursor-pointer text-sm text-[#707070] duration-300 ease-in-out hover:text-[#d70018]"
                            >
                              {subTitle.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="flex w-full cursor-pointer flex-col rounded-xl border-x border-b shadow-lg md:w-4/6 lg:w-3/5">
          {/* Main Swiper */}
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
              slidesPerView={1}
              onSwiper={(swiper) => {
                mainSwiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {dataSwiperBanner.map((items, index) => (
                <SwiperSlide key={index} className="">
                  <img
                    src={items.img}
                    alt={items.title}
                    className="w-full object-contain md:h-[300px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Swiper */}
          <div className="h-full">
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
                    <div className="flex h-24 items-center justify-center px-2 text-xs text-[#343a40]">
                      {item.title} <br />
                      {item.subTitle}
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-red-500 transition-all duration-300 ${
                        activeIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* Thumbnail */}
        <div className="hidden w-1/5 flex-col justify-between lg:flex">
          <img
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/RightBanner-ong-ba-cha-me.jpg"
            alt="QUÀ TẶNG ÔNG BÀ Hạnh phúc đoàn viên"
            className="h-[115px] w-full rounded-xl border object-cover shadow-lg"
          />
          <img
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/RightBanner-con-em.jpg"
            alt="QUÀ TẶNG ÔNG BÀ Hạnh phúc đoàn viên"
            className="h-[115px] w-full rounded-xl border object-cover shadow-lg"
          />
          <img
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/RightBanner-nguoi-yeu.jpg"
            alt="QUÀ TẶNG ÔNG BÀ Hạnh phúc đoàn viên"
            className="h-[115px] w-full rounded-xl border object-cover shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
