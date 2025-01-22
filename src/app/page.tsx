import { Footer } from "antd/es/layout/layout";
import Header from "./components/Header";
import ProductList from "./components/TestCallAPI";

export default function Home() {
  return (
    <>
      <Header />
      <div className="text-5xl font-bold text-red-500">Home Page</div>
      {/* <ProductList /> */}
      <Footer />
    </>
  );
}
