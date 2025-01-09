import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=>${limit} offset=>${offset} brand=> ${brand}`;
  }

  @Get('products/filter')
  getProductFilter() {
    return `producto con un bello filtro de datos`;
  }
  @Get('products/:producId')
  getProduct(@Param('producId') producId: number) {
    return `product ${producId}`;
  }

  @Get('categories/:id/products/:producId')
  getCategory(@Param('producId') producId: number, @Param('id') id: number) {
    return `product ${producId} and id ${id}`;
  }
}
