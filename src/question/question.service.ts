import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schema/question.schema';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private readonly questionModel: Model<Question>,
  ) {}
  async findQuestionsWithAnswers(questionId: string): Promise<Question> {
    const question = (await this.questionModel.findById(questionId))
      .populated('answers')
      .exec();
    if (!question) {
      throw new NotFoundException(`Question with id ${questionId} not found`);
    }
    return question;
  }
}
