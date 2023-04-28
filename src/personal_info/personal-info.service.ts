import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonalInfo } from '../database/schema/personal-info.schema';
import {
  CreatePersonalInfoDto,
  FindPersonalInfoByNameDto,
} from './personal-info.dto';

@Injectable()
export class PersonalInfoService {
  constructor(
    @InjectModel('PersonalInfo')
    private readonly personalInfoModel: Model<PersonalInfo>,
  ) {}

  async createPersonalInfo(createPersonalInfoDto: CreatePersonalInfoDto) {
    const {
      name,
      first_name,
      last_name,
      cover_letter,
      address,
      email,
      mobile,
      profile_image,
      dob,
      marital_status,
    } = createPersonalInfoDto;

    const personalInfoExist = await this.personalInfoModel
      .findOne({
        first_name,
        last_name,
      })
      .exec();

    if (personalInfoExist) {
      throw new BadRequestException('Personal info is already exist.');
    }

    const personalInfo = new this.personalInfoModel({
      name,
      first_name,
      last_name,
      cover_letter,
      address,
      email,
      mobile,
      profile_image,
      dob,
      marital_status,
    });

    return personalInfo.save();
  }

  async findPersonalInfoByName(
    findPersonalInfoByNameDto: FindPersonalInfoByNameDto,
  ) {
    const { name } = findPersonalInfoByNameDto;

    const personalInfo = await this.personalInfoModel.findOne({ name }).exec();

    return personalInfo;
  }
}
