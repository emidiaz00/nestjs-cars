/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
  createCars(@Body() createCarsDto: CreateCarDto) {
    return this.carsService.createCar( createCarsDto )
  }
  @Patch(':id') 
  updateCars( 
  @Param('id', ParseUUIDPipe) id: string, 
  @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.updateCar(id, updateCarDto)
  }
  @Delete(':id') 
  deleteCars( @Param('id', ParseIntPipe) id: string) {
    return {
      method: 'Delete',
      id
    }
  }
}
