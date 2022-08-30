/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';


@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Volkswagen', 'Peugeot'];

  @Get()
  getAllcars() {
    return this.cars;
  }
  
  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.cars[id]
  }
}
