import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEducationalInfoDto {
  @IsNotEmpty()
  @IsString()
  school_name: string;

  @IsNotEmpty()
  @IsString()
  degree_name: string;

  @IsNotEmpty()
  @IsNumber()
  starting_year: number;

  @IsOptional()
  @IsNumber()
  ending_year: number;

  @IsNotEmpty()
  @IsString()
  school_link: string;

  @IsNotEmpty()
  @IsString()
  personalInfo: string;
}
