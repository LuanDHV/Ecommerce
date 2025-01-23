import Link from "next/link";
import { IMobileItems } from "../types/home-page/header";

const headerMobileItems: IMobileItems[] = [
  {
    src: "/imgs/header/home-icon-gray.svg",
    alt: "Home Icon",
    text: "Trang Chủ",
    href: "#",
  },
  {
    src: "/imgs/header/category-icon-gray.svg",
    alt: "Category Icon",
    text: "Danh Mục",
    href: "#",
  },
  {
    src: "/imgs/header/store-icon-gray.svg",
    alt: "Store Icon",
    text: "Cửa hàng",
    href: "#",
  },
  {
    src: "/imgs/header/login-icon-gray.svg",
    alt: "Gray Icon",
    text: "Đăng nhập",
    href: "#",
  },
  {
    src: "/imgs/header/see-more-icon-gray.svg",
    alt: "See More Icon",
    text: "Xem thêm",
    href: "#",
  },
];

export default function Header() {
  return (
    <>
      {/* Header Tablet Desktop */}
      <section className="fixed top-0 z-50 w-full">
        <div className="flex h-[30px] w-full justify-center bg-[#f6eca2]">
          <Link
            href="#"
            className="flex w-full items-center justify-center text-xs font-bold text-red-500 lg:text-base xl:w-4/6"
          >
            Trao Tết &#39;ANt&#39; Deal Ngập Tràn - Chọn Quà Ngay!
          </Link>
        </div>

        <div className="flex h-16 justify-center bg-[#d70018]">
          <div className="flex w-full gap-1 px-[15px] xl:w-4/6">
            {/* Logo */}
            <div className="flex items-center px-3 py-2">
              <div className="hidden lg:block">
                <img
                  src="/imgs/header/logo-desktop.svg"
                  alt="Logo"
                  className="h-[30px] w-[160px] object-contain"
                />
              </div>
              <div className="rounded-lg border border-white lg:hidden">
                <img
                  src="/imgs/header/logo-mobile.svg"
                  alt="Logo"
                  className="h-8 w-8 object-cover p-1"
                />
              </div>
            </div>

            {/* Category */}
            <div className="hidden items-center justify-center gap-1 rounded-xl px-[5px] py-[10px] duration-300 ease-in-out hover:bg-[#ffffff33] md:flex">
              <img
                src="/imgs/header/category-icon-white.svg"
                alt="Category Icon"
                className="h-6 w-6 object-contain"
              />
              <Link href="#" className="text-center text-xs text-white">
                Danh mục
              </Link>
            </div>

            {/* Location */}
            <div className="flex flex-shrink-0 cursor-pointer items-center justify-center gap-1 rounded-xl duration-300 ease-in-out hover:bg-[#ffffff33] lg:px-[5px] lg:py-[3px]">
              <img
                src="/imgs/header/location-icon.svg"
                alt="Location Icon"
                className="h-5 w-5 object-contain"
              />
              <div className="text-white">
                <div className="flex w-full justify-between">
                  <p className="text-[9px] font-bold lg:text-[10px]">
                    Xem giá tại
                  </p>
                  <img src="/imgs/header/arrow-down.svg" alt="Arrow Down" />
                </div>
                <span className="text-[11px] lg:text-sm">Hồ Chí Minh </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex flex-grow items-center">
              <div className="flex w-full items-center rounded-lg bg-white">
                <img
                  src="/imgs/header/glass-icon.svg"
                  alt="Glass Icon"
                  className="pl-[6px] md:pr-2"
                />
                <input
                  type="text"
                  placeholder="Bạn cần tìm gì?"
                  className="w-full rounded-r-lg py-2 pl-2 pr-8 outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="hidden flex-shrink-0 cursor-pointer items-center justify-center gap-1 rounded-xl duration-300 ease-in-out hover:bg-[#ffffff33] md:flex lg:px-[5px] lg:py-[3px]">
              <img
                src="/imgs/header/phone-icon.svg"
                alt="Phone Icon"
                className="h-6 w-6 object-contain"
              />

              <div className="flex flex-col justify-between text-start text-xs text-white">
                <p className="">Gọi mua hàng</p>
                <span className="hidden lg:block">1800.2097 </span>
              </div>
            </div>

            {/* Store */}
            <div className="hidden flex-shrink-0 cursor-pointer items-center justify-center gap-1 rounded-xl duration-300 ease-in-out hover:bg-[#ffffff33] md:flex lg:px-[5px] lg:py-[3px]">
              <img
                src="/imgs/header/location-icon.svg"
                alt="Store Icon"
                className="h-5 w-5 object-contain"
              />
              <div className="text-xs text-white">
                <p className="text-start">
                  Cửa hàng <br />
                  <span className="hidden lg:block">gần bạn</span>
                </p>
              </div>
            </div>

            {/* Order */}
            <div className="hidden flex-shrink-0 cursor-pointer items-center justify-center gap-1 rounded-xl duration-300 ease-in-out hover:bg-[#ffffff33] lg:flex lg:px-[5px] lg:py-[3px]">
              <img
                src="/imgs/header/car-icon.svg"
                alt="Car Icon"
                className="h-6 w-10 object-contain"
              />
              <div className="text-xs text-white">
                <p className="text-start">
                  Tra cứu <br /> đơn hàng
                </p>
              </div>
            </div>

            {/* Cart */}
            <div className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-xl duration-300 ease-in-out hover:bg-[#ffffff33] md:flex-row lg:px-[5px] lg:py-[3px]">
              <div className="relative">
                <img
                  src="/imgs/header/cart-icon.svg"
                  alt="Cart Icon"
                  className="h-6 w-10 object-contain"
                />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white">
                  0
                </span>
              </div>
              <div className="flex items-center justify-center text-xs text-white">
                <p className="text-center md:text-start">
                  Giỏ <br className="hidden md:block" /> hàng
                </p>
              </div>
            </div>

            {/* Login */}
            <div className="hidden cursor-pointer flex-col items-center justify-center gap-1 rounded-xl duration-300 ease-in-out hover:bg-[#ffffff33] md:flex lg:px-[5px] lg:py-[10px]">
              <img
                src="/imgs/header/login-icon-white.svg"
                alt="Login Icon"
                className="h-5 w-5 object-contain"
              />
              <span className="text-center text-xs text-white">Đăng nhập</span>
            </div>
          </div>
        </div>
      </section>

      {/* Header Mobile */}
      <section className="fixed bottom-0 z-50 h-[72px] w-full border-t bg-white md:hidden">
        <div className="grid grid-cols-5">
          {headerMobileItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="flex cursor-pointer flex-col items-center justify-center p-[5px]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="my-[5px] h-5 w-5 object-contain"
              />
              <p className="text-xs font-bold text-[#707070]">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
