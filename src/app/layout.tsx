import type { Metadata } from "next";
import "./globals.css";
import "antd/dist/reset.css";
import ReactQueryProvider from "./providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Cellphone S - Điện thoại, laptop, tablet, phụ kiện chính hãng",
  description: "An e-commerce application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
