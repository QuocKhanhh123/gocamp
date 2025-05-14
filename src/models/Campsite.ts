import { ObjectId } from 'mongodb';

export interface Campsite {
  _id?: ObjectId;
  id: number;
  name: string;
  location: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  source: string;
}
