import { IProduct } from './IProduct';

export class Product implements IProduct {
  id?: number;
  name: string;
  imageUrl: string;
  price: number;

  constructor(name: string, imageUrl: string, price: number, id?: number) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.id = id;
  }
}
