import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Post()
  postNewProduct(@Body() body: { title: string; desc: string; price: number }) {
    const { title, desc, price } = body;
    return this.productsService.addProduct(title, desc, price);
  }
}
