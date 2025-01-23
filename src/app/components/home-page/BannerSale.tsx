export default function BannerSale() {
  return (
    <>
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
    </>
  );
}
