import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  EducationalInfo,
  EducationalInfoSchema,
} from './educational-info.schema';
import { Type } from 'class-transformer';

@Schema({ collection: 'personal_info' })
export class PersonalInfo extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true })
  cover_letter: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  mobile: string;

  @Prop({ required: true })
  profile_image: string;

  @Prop({ required: true })
  dob: Date;

  @Prop({ default: false })
  marital_status: boolean;
}

export const PersonalInfoSchema = SchemaFactory.createForClass(PersonalInfo);
