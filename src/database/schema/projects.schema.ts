import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { PersonalInfo } from './personal-info.schema';
import { Type } from 'class-transformer';

@Schema({ collection: 'projects' })
export class Projects extends mongoose.Document {
  @Prop({ required: true })
  project_name: string;

  @Prop({ required: true })
  project_description: string;

  @Prop({ required: true })
  duration_of_work: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: PersonalInfo.name })
  @Type(() => PersonalInfo)
  personalInfo: PersonalInfo;
}
