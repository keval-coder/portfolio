import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePersonalInfoDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  cover_letter: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  mobile: string;

  @IsNotEmpty()
  @IsString()
  profile_image: string;

  @IsNotEmpty()
  dob: Date;

  @IsOptional()
  @IsBoolean()
  marital_status: boolean;
}

export class FindPersonalInfoByNameDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

// export class EducationalInfo {
//   @IsNotEmpty()
//   @IsString()
//   school_name: string;

//   @IsNotEmpty()
//   @IsString()
//   degree_name: string;

//   @IsNotEmpty()
//   @IsString()
//   starting_year: string;

//   @IsNotEmpty()
//   @IsString()
//   ending_year: string;

//   @IsNotEmpty()
//   @IsString()
//   school_link: string;
// }
