import axiosInstance from "@/app/utils/axiosInstance";

export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error: any) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};
