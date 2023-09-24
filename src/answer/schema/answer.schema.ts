// src/answer/answer.schema.ts

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Answer extends Document {
  @Prop()
  content: string;

  @Prop({ type: Schema.Types.ObjectId, ref: 'Question' })
  question: string;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
