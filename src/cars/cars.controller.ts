/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async getAllCars(carsService: CarsService) {
    return this.carsService.findAll();
  }

  @Get(':id')
  async getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCars(@Body() createCarsDto: any) {
    return {
      createCarsDto
    }
  }
  @Patch(':id') 
  updateCars( @Param('id', ParseIntPipe) id:number, createCarsDto: any) {
    return {
      createCarsDto
    }
  }
  @Delete(':id') 
  deleteCars( @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'Delete',
      id
    }
  }
}
