import Link from "next/link";

export default function CategorySection({
  title,
  data,
}: ICategorySectionProps) {
  return (
    <>
      <div className="mb-[10px] mt-5 flex justify-between">
        <Link
          href="#"
          className="text-[22px] font-bold uppercase text-[#444444]"
        >
          {title}
        </Link>
        <Link href="#" className="text-sm text-[#111111] hover:underline">
          Xem tất cả
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-8">
        {data.map((item: ICategory, index: number) => (
          <Link
            href={item.link}
            key={index}
            className="aspect-[1/1] rounded-lg bg-cover bg-center"
            style={{
              backgroundColor: item.bgColor || "transparent",
              backgroundImage: `url(${item.img})`,
            }}
          >
            <p className="mt-[5px] flex flex-shrink-0 px-[5px] text-sm font-bold text-white">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
