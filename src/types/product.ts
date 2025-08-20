import { LucideIcon } from "lucide-react";

export interface ProductVariant {
  type: string;
  size: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  ingredients: string[];
  variants: ProductVariant[];
  image: string;
  badges: string[];
  icon: LucideIcon;
  color: string;
  bgColor: string;
}