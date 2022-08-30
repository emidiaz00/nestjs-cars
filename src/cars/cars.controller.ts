/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async getAllcars(carsService: CarsService) {
    return this.carsService.findAll();
  }

  //@Get(':id')
  //getCarById(@Param('id') id: string) {

  //}
}
