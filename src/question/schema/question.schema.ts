// src/question/question.schema.ts

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Question extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: Schema.Types.ObjectId, ref: 'Company' })
  company: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
