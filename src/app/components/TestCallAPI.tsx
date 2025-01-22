"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/app/services/productService";
import { IProduct } from "../types/products";

const ProductList = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product: IProduct) => (
        <div key={product.id} className="rounded-lg border p-4">
          <img
            src={product.image}
            alt={product.title}
            className="mb-4 h-48 w-full object-cover"
          />
          <h3 className="mb-2 text-xl font-semibold">{product.title}</h3>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <div className="text-lg font-bold text-red-500">${product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
