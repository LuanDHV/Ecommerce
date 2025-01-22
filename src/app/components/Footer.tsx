import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="hidden h-auto flex-col items-center md:flex">
        <div className="grid w-full p-[15px] md:grid-cols-2 lg:grid-cols-4 xl:w-3/5">
          <div className="p-3">
            <div className="">
              <p className="mb-4 text-base font-bold text-[#363636]">
                Tổng đài hỗ trợ miễn phí
              </p>
              <div className="mb-3 grid gap-1 pl-[10] text-xs">
                <div className="">
                  Gọi mua hàng <strong>1800.2097</strong> (7h30 - 22h00)
                </div>
                <div className="">
                  Gọi khiếu nại <strong>1800.2063</strong> (8h00 - 21h30)
                </div>
                <div className="">
                  Gọi bảo hành <strong>1800.2064</strong> (8h00 - 21h00)
                </div>
              </div>
            </div>
            <div className="">
              <p className="mb-4 text-base font-bold text-[#363636]">
                Phương thức thanh toán
              </p>
              <div className="grid grid-rows-2">
                <div className="grid grid-cols-5">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/wysiwyg/apple-pay-og.png"
                    alt="Apple Pay"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png"
                    alt="Vnpay"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/momo_1.png"
                    alt="MoMo"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/onepay-logo.png"
                    alt="Onepay"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/mpos-logo.png"
                    alt="Mpos"
                    loading="lazy"
                  />
                </div>
                <div className="grid grid-cols-5">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/kredivo-logo.png"
                    alt="Kredivo"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png"
                    alt="Zalopay"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/alepay-logo.png"
                    alt="Alepay"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/fundiin.png"
                    alt="Fundiin"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <p className="">ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</p>
              <p className="text-sm text-[#d70018]">
                (*) Nhận ngay voucher 10%
              </p>
              <p className="mb-3 text-[13px] text-[#111111]">
                *Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới
              </p>
              <input
                type="text"
                placeholder="Email *"
                className="mb-3 w-full rounded-md border px-[10px] py-[3px] outline-none duration-300 ease-in-out hover:border-gray-300 focus:border-red-500"
              ></input>
              <input
                type="text"
                placeholder="Số điện thoại"
                className="mb-3 w-full rounded-md border px-[10px] py-[3px] outline-none duration-300 ease-in-out hover:border-gray-300 focus:border-red-500"
              ></input>
            </div>
            <label className="mb-3 flex gap-1">
              <input defaultChecked disabled={true} type="checkbox" />
              <Link
                href="#"
                target="_blank"
                className="text-[13px] text-[#d70018]"
              >
                Tôi đồng ý với điều khoản của CellphoneS
              </Link>
            </label>
            <button className="w-full rounded-lg bg-[#d70018] px-3 py-[6px] text-sm font-bold text-white">
              ĐĂNG KÝ NGAY
            </button>
          </div>
          <div className="p-3">
            <div className="">
              <p className="mb-4 text-base font-bold text-[#363636]">
                Thông tin và chính sách
              </p>
              <div className="mb-3 grid gap-1 pl-[10] text-xs">
                <div className="">Mua hàng và thanh toán Online</div>
                <div className="">Mua hàng trả góp Online</div>
                <div className="">Chính sách giao hàng</div>
                <div className="">Tra điểm Smember</div>
                <div className="">Xem ưu đãi Smember</div>
                <div className="">Tra thông tin bảo hành</div>
                <div className="">Tra cứu hoá đơn điện tử</div>
                <div className="">Thông tin hoá đơn mua hàng</div>
                <div className="">Trung tâm bảo hành chính hãng</div>
                <div className="">Quy định về việc sao lưu dữ liệu</div>
                <div className="">Chính sách khui hộp sản phẩm Apple</div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="">
              <p className="mb-4 text-base font-bold text-[#363636]">
                Dịch vụ và thông tin khác
              </p>
              <div className="mb-3 grid gap-1 pl-[10] text-xs">
                <div className="">Khách hàng doanh nghiệp (B2B)</div>
                <div className="">Ưu đãi thanh toán</div>
                <div className="">Quy chế hoạt động</div>
                <div className="">Tra điểm Smember</div>
                <div className="">Chính sách bảo mật thông tin cá nhân</div>
                <div className="">Chính sách Bảo hành</div>
                <div className="">Liên hệ hợp tác kinh doanh</div>
                <div className="">Tuyển dụng</div>
                <div className="">Dịch vụ bảo hành mở rộng</div>
                <div className="">Smember: Tích điểm & sử dụng ưu đãi</div>
                <div className="grid grid-cols-2">
                  <img
                    src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/QR_appGeneral.jpg"
                    alt="QR tải app"
                    loading="lazy"
                  />
                  <div className="grid place-items-center justify-items-center">
                    <img
                      src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadANDROID.png"
                      alt="Tải app từ Google Play"
                      loading="lazy"
                    />
                    <img
                      src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadiOS.png"
                      alt="Tải app từ App Store"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="">
              <p className="mb-4 text-base font-bold text-[#363636]">
                Kết nối với CellphoneS
              </p>
              <div className="mb-3 grid gap-1 pl-[10] text-xs">
                <div className="grid grid-cols-5">
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-youtube.png"
                    alt="CellphoneS Youtube Chanel"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-facebook.png"
                    alt="CellphoneS Fanpage"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-instagram.png"
                    alt="CellphoneS Instagram"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-tiktok.png"
                    alt="CellphoneS Tiktok"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-zalo.png"
                    alt="CellphoneS Zalo"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <p className="mb-4 text-base font-bold text-[#363636]">
                Website thành viên
              </p>
              <div className="mb-[5px] text-xs">
                <p className="mb-[5px]">
                  Hệ thống bảo hành sửa chữa Điện thoại - Máy tính
                </p>
                <img
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui.png"
                  alt="Hệ thống bảo hành sửa chữa Điện thoại - Máy tính"
                  loading="lazy"
                />
              </div>
              <div className="mb-[5px] text-xs">
                <p className="mb-[5px]">Trung tâm bảo hành uỷ quyền Apple</p>
                <img
                  src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Logo_CareS_1.png"
                  alt="Trung tâm bảo hành uỷ quyền Apple"
                  loading="lazy"
                />
              </div>
              <div className="mb-[5px] text-xs">
                <p className="mb-[5px]">
                  Kênh thông tin giải trí công nghệ cho giới trẻ
                </p>
                <img
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/schanel.png"
                  alt="Kênh thông tin giải trí công nghệ cho giới trẻ"
                  loading="lazy"
                />
              </div>
              <div className="mb-[5px] text-xs">
                <p className="mb-[5px]">Trang thông tin công nghệ mới nhất</p>
                <img
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/sforum.png"
                  alt="Trang thông tin công nghệ mới nhất"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-[15px] pb-5 xl:w-3/5">
          <div className="grid grid-cols-4">
            <div className="p-3 text-[10px]">
              <div className="">
                <Link href="#">Điện thoại iPhone 16 Pro</Link> <span> – </span>
                <Link href="#">Điện thoại iPhone 16 Pro Max</Link>
              </div>
              <div className="">
                <Link href="#">Điện thoại iPhone 15</Link> <span> – </span>
                <Link href="#">Điện thoại iPhone 15 Pro Max</Link>
              </div>
            </div>
            <div className="p-3 text-[10px]">
              <div className="">
                <Link href="#">Điện thoại</Link> <span> – </span>
                <Link href="#">Điện thoại iPhone</Link> <span> – </span>
                <Link href="#">Điện thoại Xiaomi</Link>
              </div>
              <div className="">
                <Link href="#">Điện thoại Samsung Galaxy</Link> <span> – </span>
                <Link href="#">Điện thoại OPPO</Link>
              </div>
            </div>
            <div className="p-3 text-[10px]">
              <div className="">
                <Link href="#">Laptop</Link> <span> – </span>
                <Link href="#">Laptop Acer</Link> <span> – </span>
                <Link href="#">Laptop Dell</Link> <span> – </span>
                <Link href="#">Laptop HP</Link> <span> – </span>
              </div>
              <div className="">
                <Link href="#">Tivi</Link> <span> – </span>
                <Link href="#">Tivi Samsumg</Link> <span> – </span>
                <Link href="#">Tivi Sony</Link> <span> – </span>
                <Link href="#">Tivi LG</Link>
              </div>
            </div>
            <div className="p-3 text-[10px]">
              <div className="">
                <Link href="#">Đồ gia dụng</Link> <span> – </span>
                <Link href="#">Máy hút bụi gia đình</Link> <span> – </span>
                <Link href="#">Laptop AI</Link>
              </div>
              <div className="">
                <Link href="#">Quà Tết 2025</Link> <span> – </span>
                <Link href="#">Điện thoại Samsung S25 Ultra</Link>
              </div>
            </div>
          </div>
          <p className="mb-[5px] px-3 text-[10px] text-[#00000080]">
            Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật DIỆU PHÚC - GPĐKKD:
            0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ văn phòng: 350-352 Võ
            Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
            Điện thoại: 028.7108.9666.
          </p>
          <div className="flex items-center justify-center gap-2">
            <img
              src="https://cdn2.cellphones.com.vn/80x,webp/media/logo/logoSaleNoti.png"
              alt="Đã thông báo"
              loading="lazy"
            />
            <img
              src="https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022"
              alt="DMCA.com Protection Status"
              className="h-5 w-24 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
