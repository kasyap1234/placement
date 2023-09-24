import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from './schemas/company.schema';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<Company>,
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
}
