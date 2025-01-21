type HeaderItemProps = {
  icon: string;
  text: string;
  subText?: string;
  href?: string;
  isHiddenOnMobile?: boolean;
};

export function HeaderItem({
  icon,
  text,
  subText,
  href = "#",
  isHiddenOnMobile = false,
}: HeaderItemProps) {
  return (
    <div
      className={`${
        isHiddenOnMobile ? "hidden lg:flex" : "flex"
      } cursor-pointer items-center justify-center gap-1 rounded-xl px-[5px] py-[3px] duration-300 ease-in-out hover:bg-[#ffffff33]`}
    >
      <img src={icon} alt="Icon" className="h-6 w-6 object-contain" />
      <div className="text-xs text-white">
        <p>{text}</p>
        {subText && <span>{subText}</span>}
      </div>
    </div>
  );
}
