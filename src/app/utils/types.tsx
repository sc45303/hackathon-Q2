import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  title: string;
  image?: string[] | StaticImageData;
  slug: string;
  price: number;
  category: string;
  discrption: string;
  size: string[];
  color: string[];
  qty: number;
  discount?: number;
  rating: number;
  originalPrice: number;
};
export type Cart = {
  id: number;
  title: string;
  image?: string | StaticImageData | undefined;
  slug: string;
  price: number;
  category: string;
  discount?: number;
  size: string;
  qty: number;
};
