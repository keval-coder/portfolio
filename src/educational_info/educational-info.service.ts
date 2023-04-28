import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EducationalInfo } from '../database/schema/educational-info.schema';

@Injectable()
export class EducationalInfoService {
  constructor(
    @InjectModel('EducationalInfo')
    private readonly educationalInfoModel: Model<EducationalInfo>,
  ) {}
}
