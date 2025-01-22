import Header from "./components/Header";
import BannerSection from "./components/home-page/BannerSection";
import CategorySection from "./components/home-page/CategorySection";
import Footer from "./components/Footer";
import News from "./components/home-page/News";
import ProductSection from "./components/home-page/ProductSection";
import Menu from "./components/home-page/Menu";

const dataCategoryPhone = [
  { name: "Apple", link: "#" },
  { name: "Apple", link: "#" },
  { name: "Apple", link: "#" },
  { name: "Apple", link: "#" },
  { name: "Apple", link: "#" },
  { name: "Apple", link: "#" },
  { name: "Xem tất cả", link: "#" },
];

const dataProductPhone = [
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

const dataCategoryLaptop = [
  { name: "Asus", link: "#" },
  { name: "Asus", link: "#" },
  { name: "Asus", link: "#" },
  { name: "Asus", link: "#" },
  { name: "Asus", link: "#" },
  { name: "Asus", link: "#" },
  { name: "Xem tất cả", link: "#" },
];

const dataProductLaptop = [
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
];

const dataCategoryMonitorAndPc = [
  { name: "Máy tính bàn", link: "#" },
  { name: "Máy tính bàn", link: "#" },
  { name: "Máy tính bàn", link: "#" },
  { name: "Máy tính bàn", link: "#" },
  { name: "Máy tính bàn", link: "#" },
  { name: "Máy tính bàn", link: "#" },
  { name: "Xem tất cả", link: "#" },
];

const dataProductMonitorAndPc = [
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
];

const dataCategoryIpad = [
  { name: "Tab S10 Series", link: "#" },
  { name: "Tab S10 Series", link: "#" },
  { name: "Tab S10 Series", link: "#" },
  { name: "Tab S10 Series", link: "#" },
  { name: "Tab S10 Series", link: "#" },
  { name: "Tab S10 Series", link: "#" },
  { name: "Xem tất cả", link: "#" },
];

const dataProductIpad = [
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
];

const dataCategorySound = [
  { name: "Tai nghe Bluetooth", link: "#" },
  { name: "Tai nghe Bluetooth", link: "#" },
  { name: "Tai nghe Bluetooth", link: "#" },
  { name: "Tai nghe Bluetooth", link: "#" },
  { name: "Tai nghe Bluetooth", link: "#" },
  { name: "Tai nghe Bluetooth", link: "#" },
  { name: "Xem tất cả", link: "#" },
];

const dataProductSound = [
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
];

const dataCategoryWatch = [
  { name: "Apple Watch", link: "#" },
  { name: "Apple Watch", link: "#" },
  { name: "Apple Watch", link: "#" },
  { name: "Apple Watch", link: "#" },
  { name: "Apple Watch", link: "#" },
  { name: "Apple Watch", link: "#" },
  { name: "Xem tất cả", link: "#" },
];

const dataProductWatch = [
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
];

const dataCategoryHHA = [
  { name: "Nồi chiên không dầu", link: "#" },
  { name: "Nồi chiên không dầu", link: "#" },
  { name: "Nồi chiên không dầu", link: "#" },
  { name: "Nồi chiên không dầu", link: "#" },
  { name: "Nồi chiên không dầu", link: "#" },
  { name: "Nồi chiên không dầu", link: "#" },
  { name: "Xem tất cả", link: "#" },
];

const dataProductHHA = [
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
];

const dataCategoryTV = [
  { name: "LG", link: "#" },
  { name: "LG", link: "#" },
  { name: "LG", link: "#" },
  { name: "LG", link: "#" },
  { name: "LG", link: "#" },
  { name: "LG", link: "#" },
  { name: "Xem tất cả", link: "#" },
];

const dataProductTV = [
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
];

const dataAccessory = [
  {
    name: "Phụ kiện Apple",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_1_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Dán màn hình",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_2_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Ốp lưng, bao da",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_3_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Cáp, sạc",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_4_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Pin sạc dự phòng",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_5_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Thiết bị mạng",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_6_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Thẻ nhớ, USB",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_8_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Chuột, bàn phím",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_9_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Sim 4G",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_10_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Hub chuyển đổi",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_11_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Gimbal",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_12_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Gaming Gear, Playstation",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_13_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Flycam",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_15_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Phụ kiện Laptop",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_16_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Balo, túi xách",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_17_.png",
    link: "#",
    bgColor: "",
  },
  {
    name: "Máy ảnh",
    img: "https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_19_.png",
    link: "#",
    bgColor: "",
  },
];

const dataComputer = [
  {
    name: "PC ráp sẵn CellphoneS",
    img: "https://cellphones.com.vn/media/icons/category/cate-868.svg",
    link: "#",
    bgColor: "#fca5a5",
  },
  {
    name: "CPU",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/p/cpu_1.png",
    link: "#",
    bgColor: "#fda4af",
  },
  {
    name: "Mainboard",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/m/a/mainboard_1.png",
    link: "#",
    bgColor: "#f9a8d4",
  },
  {
    name: "RAM",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/r/a/ram_2.png",
    link: "#",
    bgColor: "#c4b5fd",
  },
  {
    name: "Ổ cứng",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/s/s/ssd_2.png",
    link: "#",
    bgColor: "#a5b4fc",
  },
  {
    name: "Card màn hình",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/v/g/vga.png",
    link: "#",
    bgColor: "#93c5fd",
  },
  {
    name: "Nguồn máy tính",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/p/s/psu.png",
    link: "#",
    bgColor: "#6ee7b7",
  },
  {
    name: "Tản nhiệt",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/t/_/t_n_nhi_t_2.png",
    link: "#",
    bgColor: "#fcd34b",
  },
  {
    name: "Case máy tính",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/case_1.png",
    link: "#",
    bgColor: "#fdba74",
  },
];

const dataOld = [
  {
    name: "Điện thoại cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/p/ip-14-hp-cu.png",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Máy tính bảng cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-cate-cu.png",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Mac cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-392.svg",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Laptop cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-878.svg",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Tai nghe cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-tai-nghe_1.png",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Loa cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-loa_1.png",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Đồng hồ thông minh cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-451.svg",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Đồ gia dụng cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-846.svg",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Phụ kiện cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-phu-kien.png",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Màn hình cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-man-hinh.png",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Tivi cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/tmp/catalog/product/t/i/tivi-cu-new_1334.png",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Cáp sạc cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-114.svg",
    link: "#",
    bgColor: "#d64044",
  },
  {
    name: "Pin dự phòng cũ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-122.svg",
    link: "#",
    bgColor: "#d64044",
  },
];

const dataStudent = [
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/RightBanner-udsv-thang-10.png",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/udsv-sliding-Mac.jpg",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/udsv-sliding-ipad.jpg",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/udsv-sliding-Laptop.jpg",
    link: "#",
  },
];

const dataPayment = [
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/uu-dai-doi-tac-home-11-2024.png",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/uu-dai-ocb-06-03-2024.png",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/techcombank-t1-2025-slide.png",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/uu-dai-acb%20(2).png",
    link: "#",
  },
];

const dataBrand = [
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/apple-chinh-hang-home.jpg",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/SIS%20asus.png",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/gian-hang-samsung-home.png",
    link: "#",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/xiaomi.png",
    link: "#",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex h-auto justify-center bg-white bg-cover bg-center py-28 lg:bg-[url('/imgs/home-page/background.png')] lg:pb-5">
        <div className="w-full bg-white px-[15px] py-[10px] xl:w-4/6">
          <Menu />
          <div className="mb-[10px] mt-5">
            <img
              src="/imgs/home-page/special-desktop.gif"
              alt="Special Desk"
              className="hidden w-full object-contain lg:block"
            />
            <img
              src="/imgs/home-page/special-mobile.gif"
              alt="Special Desk"
              className="w-full object-contain lg:hidden"
            />
          </div>

          <ProductSection
            title="Điện thoại nổi bật"
            products={dataProductPhone}
            category={dataCategoryPhone}
          />
          <ProductSection
            title="Laptop"
            products={dataProductLaptop}
            category={dataCategoryLaptop}
          />
          <ProductSection
            title="Màn hình, máy tính để bàn"
            products={dataProductMonitorAndPc}
            category={dataCategoryMonitorAndPc}
          />
          <ProductSection
            title="Máy tính bảng"
            products={dataProductIpad}
            category={dataCategoryIpad}
          />
          <ProductSection
            title="Âm thanh"
            products={dataProductSound}
            category={dataCategorySound}
          />
          <ProductSection
            title="Đồng hồ thông mình"
            products={dataProductWatch}
            category={dataCategoryWatch}
          />
          <ProductSection
            title="Đồ gia dụng"
            products={dataProductHHA}
            category={dataCategoryHHA}
          />
          <ProductSection
            title="Tivi"
            products={dataProductTV}
            category={dataCategoryTV}
          />
          <CategorySection title="Phụ kiện" data={dataAccessory} />
          <CategorySection title="Linh kiện máy tính" data={dataComputer} />
          <CategorySection title="Hàng cũ" data={dataOld} />
          <BannerSection title="Ưu đãi sinh viên" data={dataStudent} />
          <BannerSection title="Ưu đãi thanh toán" data={dataPayment} />
          <BannerSection title="Chuyên trang thương hiệu" data={dataBrand} />
          <News />
        </div>
      </div>
      {/* <ProductList /> */}
      <Footer />
    </>
  );
}
