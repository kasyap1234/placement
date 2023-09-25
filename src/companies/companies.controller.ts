import { Controller, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Get, Post, Put, Body, Param } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CreateQuestionDto } from 'src/question/dto/create-question.dto';
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}
  @Get()
  async findAll() {
    return await this.companiesService.findAll();
  }
  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.companiesService.findById(id);
  }
  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return await this.companiesService.update(id, updateCompanyDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.companiesService.delete(id);
  }
  @Post(':id/questions')
  async addQuestionToCompany(
    @Param('id') companyId: string,
    @Body() createQuestionDto: CreateQuestionDto,
  ) {
    return await this.companiesService.addQuestionToCompany(
      companyId,
      createQuestionDto,
    );
  }
  @Get(':id/questions')
  async getQuestionsForCompany(@Param('id') companyId: string) {
    return await this.companiesService.getQuestionsForCompany(companyId);
  }
}
