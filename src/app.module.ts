import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [CompaniesModule, QuestionModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
