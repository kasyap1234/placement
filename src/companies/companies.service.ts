import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from 'src/question/dto/create-question.dto';
import { Question } from 'src/question/schema/question.schema';
import { Company } from './schemas/company.schema';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<Company>,
    @InjectModel(Question.name) private readonly questionModel: Model<Question>,
  ) {}

  async findAll(): Promise<Company[]> {
    return await this.companyModel.find().exec();
  }

  async findById(id: string): Promise<Company> {
    return await this.companyModel.findById(id).exec();
  }

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCompany = new this.companyModel(createCompanyDto);
    return await createdCompany.save();
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    return await this.companyModel.findByIdAndUpdate(id, updateCompanyDto, {
      new: true,
    });
  }

  async addQuestionToCompany(
    companyId: string,
    createQuestionDto: CreateQuestionDto,
  ): Promise<Company> {
    const company = await this.companyModel.findById(companyId).exec();
    if (!company) {
      throw new NotFoundException(`Company with id ${companyId} not found`);
    }
    const question = new this.questionModel(createQuestionDto);
    await question.save();

    company.questions.push(question);
    await company.save();
    return company;
  }
  async getQuestionsForCompany(companyId: string): Promise<Question[]>{
    const company = await this.companyModel.findById(companyId).populate('questions').exec();
    if (!company) {
      throw new NotFoundException(`Company with id ${companyId} not found`);
    }
    return company.questions;
  }
}
