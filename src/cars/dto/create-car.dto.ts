import { IsNotEmpty, IsString } from "class-validator";

export class CreateCarDto {

    @IsNotEmpty()
    id: string;
    
    @IsString()
    brand: string;

    @IsString()
    model: string;
}