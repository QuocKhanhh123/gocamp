import { ObjectId } from 'mongodb';

export interface Product {
  _id?: ObjectId;
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  brand: string;
  stock: number;
  rating: number;
  reviews: number;
  weight: string;
  dimensions: string;
  materials: string[];
  isFeatured: boolean;
}
