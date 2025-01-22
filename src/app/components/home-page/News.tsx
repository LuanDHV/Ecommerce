import Link from "next/link";

const dataNews = [
  {
    img: "https://cdn-media.sforum.vn/storage/app/media/haianh/xiaomi-mi-band-9-pro-cap-nhat-thumb.jpg",
    title:
      "Xiaomi Mi Band 9 Pro nhận bản cập nhật mới, tính năng ngày càng tốt hơn",
    link: "#",
  },
  {
    img: "https://cdn-media.sforum.vn/storage/app/media/minhty/camera-ip-365-selection-c1.jpg",
    title:
      "Đánh giá camera IP 365 Selection C1: Giá &quot;siêu hạt dẻ&quot; trông nhà để Tết này tẹt ga du xuân",
    link: "#",
  },
  {
    img: "https://cdn-media.sforum.vn/storage/app/media/haianh/samsung-kinh-vr-project-moohan-thumb.jpg",
    title:
      "Samsung có thể giới thiệu cả kính VR Project Moohan tại Galaxy Unpacked 2025",
    link: "#",
  },
  {
    img: "https://cdn-media.sforum.vn/storage/app/media/haianh/tay-cam-xbox-moi-lo-dien-thumb.jpg",
    title: "Tay cầm Xbox mới lộ diện: Pulse Cipher đỏ trong suốt, giá hấp dẫn!",
    link: "#",
  },
];

export default function News() {
  return (
    <>
      <div className="mb-[10px] mt-5 flex justify-between">
        <Link
          href="#"
          className="text-[22px] font-bold uppercase text-[#444444]"
        >
          Tin công nghệ
        </Link>
        <Link href="#" className="text-sm text-[#111111] hover:underline">
          Xem tất cả
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {dataNews.map((items, index: number) => (
          <Link
            href={items.link}
            key={index}
            className="rounded-xl border p-1 shadow-lg"
          >
            <img
              src={items.img}
              alt="News Image"
              className="rounded-t-xl object-cover p-1"
            />
            <p className="line-clamp-2 px-2 text-base font-bold text-[#444444] hover:underline">
              {items.title}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
