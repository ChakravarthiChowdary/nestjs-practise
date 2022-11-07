import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  addProduct(title: string, description: string, price: number) {
    const product = new Product(
      Math.random().toString(),
      title,
      description,
      price,
    );

    this.products.push(product);

    return { id: product.id };
  }

  getProducts() {
    return this.products;
  }
}
