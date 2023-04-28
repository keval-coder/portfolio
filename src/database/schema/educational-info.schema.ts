import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { PersonalInfo } from './personal-info.schema';
import { Type } from 'class-transformer';

@Schema({ collection: 'educational_info' })
export class EducationalInfo extends mongoose.Document {
  @Prop({ required: true })
  school_name: string;

  @Prop({ required: true })
  degree_name: string;

  @Prop({ required: true })
  starting_year: number;

  @Prop({ default: 0 })
  ending_year: number;

  @Prop({ required: true })
  school_link: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: PersonalInfo.name })
  @Type(() => PersonalInfo)
  personalInfo: PersonalInfo;
}

export const EducationalInfoSchema =
  SchemaFactory.createForClass(EducationalInfo);
