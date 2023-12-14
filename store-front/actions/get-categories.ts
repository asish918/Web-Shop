import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const data = await fetch(URL);
  console.log(URL)
  const res = await data.json();
  return res;
};

export default getCategories;

