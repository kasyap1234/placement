import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsMongoId()
  company: string; // Assuming `company` is the ObjectId of the related company
}
