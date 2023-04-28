import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PersonalInfo,
  PersonalInfoSchema,
} from './database/schema/personal-info.schema';
import { PersonalInfoModule } from './personal_info/personal-info.module';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([
      { name: PersonalInfo.name, schema: PersonalInfoSchema },
    ]),
    PersonalInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
