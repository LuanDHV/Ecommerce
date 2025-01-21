import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="h-auto">
        <div className="flex h-[30px] w-full justify-center bg-[#f6eca2]">
          <Link
            href="#"
            className="flex w-full items-center justify-center text-xs font-bold text-red-500 lg:w-4/5 lg:text-base"
          >
            Trao Tết Ấm Deal Ngập Tràn - Chọn Quà Ngay
          </Link>
        </div>

        <div className="flex h-16 justify-center bg-[#d70018]">
          <div className="flex w-full justify-center gap-1 lg:w-4/5">
            {/* Logo */}
            <div className="px-3 py-2">
              <div className="hidden lg:block">
                <img
                  src="/imgs/header/logo-desktop.svg"
                  alt="Logo"
                  className="h-[30px] w-[160px] object-cover"
                />
              </div>
              <div className="lg:hidden">
                <img
                  src="/imgs/header/logo-mobile.svg"
                  alt="Logo"
                  className="h-8 w-8 object-cover"
                />
              </div>
            </div>

            {/* Category */}
            <div className="hidden items-center justify-center gap-1 rounded-xl px-[5px] py-[10px] duration-300 ease-in-out hover:bg-[#ffffff33] lg:flex">
              <img
                src="/imgs/header/category-icon.svg"
                alt="Category Icon"
                className="h-6 w-6 object-contain"
              />
              <Link href="#" className="text-xs text-white">
                Danh mục
              </Link>
            </div>

            {/* Location */}
            <div className="flex cursor-pointer items-center justify-center gap-1 rounded-xl px-[5px] py-[3px] duration-300 ease-in-out hover:bg-[#ffffff33]">
              <img
                src="/imgs/header/location-icon.svg"
                alt=""
                className="h-5 w-5 object-contain"
              />
              <div className="text-white">
                <div className="flex justify-between">
                  <p className="text-[9px] lg:text-[10px]">Xem giá tại</p>
                  <img src="/imgs/header/arrow-down.svg" alt="Arrow Down" />
                </div>
                <span className="text-[11px] lg:text-sm">Hồ Chí Minh </span>
              </div>
            </div>

            {/* Button */}

            {/* Phone */}
            <div className="hidden cursor-pointer items-center justify-center gap-1 rounded-xl px-[5px] py-[3px] duration-300 ease-in-out hover:bg-[#ffffff33] lg:flex">
              <img
                src="/imgs/header/phone-icon.svg"
                alt="Phone Icon"
                className="h-6 w-6 object-contain"
              />

              <div className="flex flex-col justify-between text-xs text-white">
                <p className="">Gọi mua hàng</p>
                <span className="">1800.2097 </span>
              </div>
            </div>

            {/* Store */}
            <div className="hidden cursor-pointer items-center justify-center gap-1 rounded-xl px-[5px] py-[3px] duration-300 ease-in-out hover:bg-[#ffffff33] lg:flex">
              <img
                src="/imgs/header/location-icon.svg"
                alt="Store"
                className="h-5 w-5 object-contain"
              />
              <div className="text-xs text-white">
                <p className="">
                  Cửa hàng <br /> gần bạn
                </p>
              </div>
            </div>

            {/* Order */}
            <div className="hidden cursor-pointer items-center justify-center gap-1 rounded-xl px-[5px] py-[3px] duration-300 ease-in-out hover:bg-[#ffffff33] lg:flex">
              <img
                src="/imgs/header/car-icon.svg"
                alt="Car Icon"
                className="h-6 w-10 object-contain"
              />
              <div className="text-xs text-white">
                <p className="">
                  Cửa hàng <br /> gần bạn
                </p>
              </div>
            </div>

            {/* Cart */}
            <div className="flex cursor-pointer items-center justify-center gap-1 rounded-xl px-[5px] py-[3px] duration-300 ease-in-out hover:bg-[#ffffff33]">
              <div className="relative">
                <img
                  src="/imgs/header/cart-icon.svg"
                  alt="Car Icon"
                  className="h-6 w-10 object-contain"
                />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white">
                  0
                </span>
              </div>
              <div className="text-xs text-white">
                <p className="">
                  Giỏ <br /> hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
