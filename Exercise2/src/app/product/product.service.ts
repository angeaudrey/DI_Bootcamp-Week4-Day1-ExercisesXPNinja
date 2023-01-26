import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      name: "Orange",
      price: 1500,
    },
    {
      name: "Apple",
      price: 500,
    }
  ];

  constructor() { }

  getListUsers() {
      return this.products;
  }
}

export class Product {
  name?: string;
  price?: number;
}
