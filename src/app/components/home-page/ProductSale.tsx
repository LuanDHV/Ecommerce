"use client";
import "swiper/css";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductSale() {
  const dataProductSale: IProduct[] = [
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-reno13-f-chinh-hang-hinh-2.png",
      name: "OPPO Reno13 F 8GB 256GB",
      price: "8.990.000đ",
      discountPrice: "9.990.000đ",
      sMember: "Smember giảm thêm đến",
      sMemberPrice: "90.000đ",
      sStudent: "S-Student giảm thêm đến",
      sStudentPrice: "200.000đ",
      couponPrice:
        "Trả góp 0% lãi suất, không trả trước, không phụ phí qua Shinhan Finance",
      link: "#",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-asus-vivobook-15x-oled-m3504ya-l1268w-thumbnails.png",
      name: "Laptop ASUS Vivobook 15 X1504ZA-NJ517W",
      price: "13.990.000đ",
      discountPrice: "14.990.000đ",
      sMember: "Smember giảm thêm đến",
      sMemberPrice: "140.000đ",
      sStudent: "S-Student giảm thêm đến",
      sStudentPrice: "400.000đ",
      couponPrice:
        "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
      link: "#",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/man-hinh-gaming-asus-tuf-vg249q3a-24-inch.png",
      name: "Màn hình Gaming ASUS TUF VG249Q3A 24 inch",
      price: "2.990.000đ",
      discountPrice: "3.990.000đ",
      sMember: "Smember giảm thêm đến",
      sMemberPrice: "90.000đ",
      sStudent: "S-Student giảm thêm đến",
      sStudentPrice: "150.000đ",
      couponPrice: "Tặng Chai vệ sinh màn hình Hyperwork HPW-C02",
      link: "#",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-air-6-m2-11-inch_9_.jpg",
      name: "iPad Air 6 M2 11 inch Wifi 128GB | Chính hãng Apple Việt Nam",
      price: "14.590.000đ",
      discountPrice: "16.990.000đ",
      sMember: "Smember giảm thêm đến",
      sMemberPrice: "146.000đ",
      sStudent: "S-Student giảm thêm đến",
      sStudentPrice: "438.000đ",
      couponPrice:
        "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
      link: "#",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple-airpods-4-thumb.png",
      name: "Tai nghe Bluetooth Apple AirPods 4",
      price: "3.090.000đ",
      discountPrice: "3.490.000đ",
      sMember: "Smember giảm thêm đến",
      sMemberPrice: "93.000đ",
      sStudent: "",
      sStudentPrice: "",
      couponPrice:
        "Tặng thêm 6 tháng bảo hành tại TTBH hãng (Chỉ áp dụng cho Khách hàng kích hoạt bảo hành Marshall tại thời điểm mua hàng) ",
      link: "#",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/m/smart_band_1__1.png",
      name: "Đồng hồ thông minh Huawei Watch GT 5",
      price: "4.990.000đ",
      discountPrice: "5.490.000đ",
      sMember: "Smember giảm thêm đến",
      sMemberPrice: "150.000đ",
      sStudent: "S-Student giảm thêm đến",
      sStudentPrice: "100.000đ",
      couponPrice:
        "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
      link: "#",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/m/smart_tivi_qned_lg_4k_75_inch_75qned86sra.png",
      name: "Tivi Xiaomi A Pro 4K 43 inch QLED 2025",
      price: "6.450.000đ",
      discountPrice: "7.990.000đ",
      sMember: "Smember giảm thêm đến",
      sMemberPrice: "65.000đ",
      sStudent: "",
      sStudentPrice: "",
      couponPrice:
        "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
      link: "#",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-massage-the-thao-mini-philips-ppm7501-1.png",
      name: "Máy massage thể thao mini Philips PPM7501",
      price: "2.890.000đ",
      discountPrice: "3.990.000đ",
      sMember: "Smember giảm thêm đến",
      sMemberPrice: "29.000đ",
      sStudent: "S-Student giảm thêm đến",
      sStudentPrice: "100.000đ",
      couponPrice:
        "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
      link: "#",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-reno13-f-chinh-hang-hinh-2.png",
      name: "OPPO Reno13 F 8GB 256GB",
      price: "8.990.000đ",
      discountPrice: "9.990.000đ",
      sMember: "Smember giảm thêm đến",
      sMemberPrice: "90.000đ",
      sStudent: "S-Student giảm thêm đến",
      sStudentPrice: "200.000đ",
      couponPrice:
        "Trả góp 0% lãi suất, không trả trước, không phụ phí qua Shinhan Finance",
      link: "#",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-reno13-f-chinh-hang-hinh-2.png",
      name: "OPPO Reno13 F 8GB 256GB",
      price: "8.990.000đ",
      discountPrice: "9.990.000đ",
      sMember: "Smember giảm thêm đến",
      sMemberPrice: "90.000đ",
      sStudent: "S-Student giảm thêm đến",
      sStudentPrice: "200.000đ",
      couponPrice:
        "Trả góp 0% lãi suất, không trả trước, không phụ phí qua Shinhan Finance",
      link: "#",
    },
  ];

  return (
    <>
      <div className="mt-[10px] w-full rounded-xl bg-[#e20043] p-2">
        <div className="flex flex-col justify-center px-[10px] py-[5px] md:flex-row md:justify-between">
          <img
            src="https://cdn2.cellphones.com.vn/x/media/catalog/product/h/o/hot-sale-tet-ant-2025-v2.gif"
            alt="Sale Tết"
            className="max-h-[70px] object-cover"
          />
          <div className="mb-[5px] flex items-center justify-center gap-2 text-center text-base font-bold text-[#fff0bf]">
            <p className="">Kết thúc sau: </p>
            <ul className="flex">
              <li className="flex">
                <p className="flex h-7 w-7 rounded-full bg-[#fff0bf] px-[5px] py-[2px] text-[#222222]">
                  14
                </p>
                <p className="mx-[5px]">:</p>
              </li>
              <li className="flex">
                <p className="flex h-7 w-7 rounded-full bg-[#fff0bf] px-[5px] py-[2px] text-[#222222]">
                  02
                </p>
                <p className="mx-[5px]">:</p>
              </li>
              <li className="flex">
                <p className="flex h-7 w-7 rounded-full bg-[#fff0bf] px-[5px] py-[2px] text-[#222222]">
                  08
                </p>
                <p className="mx-[5px]">:</p>
              </li>
              <li className="flex">
                <p className="flex h-7 w-7 rounded-full bg-[#fff0bf] px-[5px] py-[2px] text-[#222222]">
                  56
                </p>
              </li>
            </ul>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
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
        >
          {dataProductSale.map((items: IProduct, index: number) => (
            <SwiperSlide key={index} className="">
              <Link
                href={items.link}
                key={index}
                className="flex min-h-[530px] flex-col items-center justify-between rounded-xl border bg-white p-[10px] shadow-lg lg:min-h-[490px]"
              >
                <img
                  src={items.img}
                  alt={items.name}
                  className="mt-[10px] h-40 w-40 object-contain"
                />
                <p className="mt-[10px] flex h-[65px] w-full justify-start text-sm font-bold text-[#444444]">
                  {items.name}
                </p>
                <div className="mt-[10px] flex w-full flex-col items-start justify-start md:flex-row md:items-center md:gap-2">
                  <p className="mb-[5px] text-base font-bold text-[#d70018]">
                    {items.price}
                  </p>
                  <p className="mb-[5px] text-sm font-bold text-[#707070] line-through">
                    {items.discountPrice}
                  </p>
                </div>
                <p className="mb-[5px] flex w-full flex-col items-start justify-start gap-1 text-[11px] text-[#444444] md:flex-row md:items-center">
                  {items.sMember}
                  <span className="text-sm font-bold text-[#d70018]">
                    {items.sMemberPrice}
                  </span>
                </p>
                <p className="mb-[5px] flex w-full flex-col items-start justify-start gap-1 text-[11px] text-[#444444] md:flex-row md:items-center">
                  {items.sStudent}
                  <span className="text-sm font-bold text-[#d70018]">
                    {items.sStudentPrice}
                  </span>
                </p>
                <div className="rounded-md border p-[5px]">
                  <p className="text-xs text-[#444444]">{items.couponPrice}</p>
                </div>
                <div className="my-3 flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="/imgs/home-page/star-icon.svg"
                      alt="Star Icon"
                      className="h-[10px] w-[10px] object-contain md:h-[15px] md:w-[15px]"
                    />
                    <img
                      src="/imgs/home-page/star-icon.svg"
                      alt="Star Icon"
                      className="h-[10px] w-[10px] object-contain md:h-[15px] md:w-[15px]"
                    />
                    <img
                      src="/imgs/home-page/star-icon.svg"
                      alt="Star Icon"
                      className="h-[10px] w-[10px] object-contain md:h-[15px] md:w-[15px]"
                    />
                    <img
                      src="/imgs/home-page/star-icon.svg"
                      alt="Star Icon"
                      className="h-[10px] w-[10px] object-contain md:h-[15px] md:w-[15px]"
                    />
                    <img
                      src="/imgs/home-page/star-icon.svg"
                      alt="Star Icon"
                      className="h-[10px] w-[10px] object-contain md:h-[15px] md:w-[15px]"
                    />
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-1">
                    <span className="text-[9px] text-[#7777777] sm:text-xs">
                      Yêu thích
                    </span>
                    <img
                      src="/imgs/home-page/heart-icon.svg"
                      alt="Heart Icon"
                      className="h-4 w-4 object-contain lg:h-5 lg:w-5"
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
