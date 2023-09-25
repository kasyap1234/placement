// question.schema.ts

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Answer } from '../../answer/schema/answer.schema';

@Schema()
export class Question extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: Schema.Types.ObjectId, ref: 'Answer' }] })
  answers: Answer[]; // Reference to related answers
}

export const QuestionSchema = SchemaFactory.createForClass(Question);

