import Link from "next/link";

export default function ProductSection({
  title,
  products,
  category,
}: IProductSectionProps) {
  return (
    <>
      <div className="mb-[10px] mt-5 flex flex-col justify-between lg:flex-row">
        <Link
          href="#"
          className="text-[22px] font-bold uppercase text-[#444444]"
        >
          {title}
        </Link>
        <div className="flex justify-end gap-1">
          {category.map((items: ICategory, index: number) => (
            <Link
              href={items.link}
              key={index}
              className="flex h-9 flex-shrink-0 items-center rounded-xl border px-[10px] py-[5px] text-xs text-[#111111]"
            >
              {items.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((items: IProduct, index: number) => (
          <Link
            href={items.link}
            key={index}
            className="flex flex-col items-center justify-center rounded-xl border p-[10px] shadow-lg"
          >
            <img
              src={items.img}
              alt={items.name}
              className="mt-[10px] h-40 w-40 object-contain"
            />
            <p className="flex h-[50px] w-full justify-start text-sm font-bold text-[#444444] md:h-[65px]">
              {items.name}
            </p>
            <div className="mt-[10px] flex w-full flex-col items-start justify-start md:items-center md:gap-2">
              <p className="mb-[5px] text-base font-bold text-[#d70018]">
                {items.price}
              </p>
              <p className="mb-[5px] text-sm font-bold text-[#707070] line-through">
                {items.discountPrice}
              </p>
            </div>
            <p className="mb-[5px] flex w-full items-center justify-start gap-1 text-[11px] text-[#444444]">
              {items.sMember}
              <span className="text-sm font-bold text-[#d70018]">
                {items.sMemberPrice}
              </span>
            </p>
            <p className="mb-[5px] flex w-full items-center justify-start gap-1 text-[11px] text-[#444444]">
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
                  className="h-[15px] w-[15px] object-contain"
                />
                <img
                  src="/imgs/home-page/star-icon.svg"
                  alt="Star Icon"
                  className="h-[15px] w-[15px] object-contain"
                />
                <img
                  src="/imgs/home-page/star-icon.svg"
                  alt="Star Icon"
                  className="h-[15px] w-[15px] object-contain"
                />
                <img
                  src="/imgs/home-page/star-icon.svg"
                  alt="Star Icon"
                  className="h-[15px] w-[15px] object-contain"
                />
                <img
                  src="/imgs/home-page/star-icon.svg"
                  alt="Star Icon"
                  className="h-[15px] w-[15px] object-contain"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-[#7777777]">Yêu thích</span>
                <img
                  src="/imgs/home-page/heart-icon.svg"
                  alt="Heart Icon"
                  className="h-5 w-5 object-contain"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
