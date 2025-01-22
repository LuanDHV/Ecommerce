import Link from "next/link";

export default function BannerSection({ title, data }: IBannerSectionProps) {
  return (
    <div className="mb-[10px] mt-5">
      <div className="flex justify-between">
        <Link
          href="#"
          className="text-[22px] font-bold uppercase text-[#444444]"
        >
          {title}
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {data.map((items: IBannerData, index: number) => (
          <Link href={items.link} key={index}>
            <img
              src={items.img}
              alt="Banner image"
              className="rounded-xl object-cover shadow-lg"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
