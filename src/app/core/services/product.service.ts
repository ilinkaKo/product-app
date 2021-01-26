import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { products } from '../mocks/products.mock';

@Injectable()
export class ProductService {
  private products: Array<Product> = products;

  constructor() {}

  public getProducts(): Array<Product> {
    return this.products;
  }

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public getProductById(id: string): Product {
    return this.products.find(item => item.id === id);
  }

  public deleteProduct(id: string): void {
    this.products = this.products.filter(item => item.id !== id);
  }

  public editProduct(id: string, productData: Product): void {
    let product = this.getProductById(id);
    product.name = productData.name;
    product.image = productData.image;
    product.price = productData.price;
    product.manufacturer = productData.manufacturer;
    product.expiryDate = productData.expiryDate;
  }
}
