import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  fullname: string;
  username: string;
  email: string;
  password: string; 
}
