import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { UUID } from 'crypto'
import { CreateFormDto } from './dtos/create-form.dto'
import { FormDto } from './dtos/form.dto'
import { FormsService } from './forms.service'

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  async create(@Body() form: CreateFormDto): Promise<FormDto> {
    return await this.formsService.create(form)
  }

  @Get()
  async findAll(): Promise<FormDto[]> {
    return await this.formsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: UUID): Promise<FormDto> {
    return await this.formsService.getOne(id)
  }

  @Patch(':id')
  async update(@Param('id') id: UUID, @Body() form: CreateFormDto): Promise<FormDto> {
    return await this.formsService.update(id, form)
  }

  @Delete(':id')
  async remove(@Param('id') id: UUID): Promise<void> {
    await this.formsService.remove(id)
  }
}
