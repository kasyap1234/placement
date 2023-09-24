import { Controller, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Get, Post, Put, Body, Param } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';

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
}
