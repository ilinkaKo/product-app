import { Manufacturer } from './manufacturer.model';

export interface Product {
  id: string,
  name: string,
  manufacturer: Manufacturer,
  price: number,
  expiryDate: Date,
  image?: string
};
