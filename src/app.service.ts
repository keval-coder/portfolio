import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { PersonalInfo } from './database/schema/personal-info.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectConnection() private readonly conn: Connection,
    @InjectModel('PersonalInfo')
    private readonly personalInfoModel: Model<PersonalInfo>,
  ) {}

  async getHello() {
    return await this.personalInfoModel.find().exec();
  }

  async create() {
    const createPersonalInfo = new this.personalInfoModel({
      name: 'Keval',
      email: 'Keval3@gmail.com',
    });

    return createPersonalInfo.save();
  }
}
