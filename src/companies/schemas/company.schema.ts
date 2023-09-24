import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Docuement } from 'mongoose';
@Schema()
export class Company extends Docuement {
  @Prop()
  name: string;
}
export const CompanySchema = SchemaFactory.createForClass(Company);
