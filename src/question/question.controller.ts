import { Controller, Get, Param } from '@nestjs/common';
import { QuestionService } from './question.service';
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  @Get(':id')
  async findQuestionsWithAnswers(@Param('id') questionId: string) {
    return await this.questionService.findQuestionsWithAnswers(questionId);
  }
}
