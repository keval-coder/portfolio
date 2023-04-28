import { Module } from '@nestjs/common';
import { PersonalInfoController } from './personal-info.controller';
import { PersonalInfoService } from './personal-info.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PersonalInfo,
  PersonalInfoSchema,
} from '../database/schema/personal-info.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PersonalInfo.name, schema: PersonalInfoSchema },
    ]),
  ],
  controllers: [PersonalInfoController],
  providers: [PersonalInfoService],
})
export class PersonalInfoModule {}
