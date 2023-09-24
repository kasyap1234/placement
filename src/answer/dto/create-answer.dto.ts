import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';

export class CreateAnswerDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsMongoId()
  question: string; // Assuming `question` is the ObjectId of the related question
}
