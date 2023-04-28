import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PersonalInfoService } from './personal-info.service';
import {
  CreatePersonalInfoDto,
  FindPersonalInfoByNameDto,
} from './personal-info.dto';

@Controller('personal-info')
export class PersonalInfoController {
  constructor(private readonly personalInfoService: PersonalInfoService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createPersonalInfo(
    @Body() createPersonalInfoDto: CreatePersonalInfoDto,
  ) {
    return {
      data: await this.personalInfoService.createPersonalInfo(
        createPersonalInfoDto,
      ),
      message: 'Personal info was created successfully.',
    };
  }

  @Get()
  @UsePipes(ValidationPipe)
  async findOnePersonalInfo(
    @Query() findPersonalInfoByNameDto: FindPersonalInfoByNameDto,
  ) {
    return {
      data: await this.personalInfoService.findPersonalInfoByName(
        findPersonalInfoByNameDto,
      ),
      message: 'Personal info was found successfully.',
    };
  }
}
