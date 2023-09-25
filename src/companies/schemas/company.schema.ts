import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Question } from '../../question/schema/question.schema';
@Schema()
export class Company extends Document {
  @Prop()
  name: string;

  @Prop({ type: [{ type: Schema.Types.ObjectId, ref: 'Question' }] })
  questions: Question[];
}

export const CompanySchema = SchemaFactory.createForClass(Company);
