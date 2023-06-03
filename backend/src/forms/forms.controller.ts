import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { FormsService } from './forms.service'
import { CreateFormDto } from './dtos/create-form.dto'
import { FormDto } from './dtos/form.dto'

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  async create(@Body() form: CreateFormDto): Promise<FormDto> {
    return await this.formsService.create(form)
  }

  @Get()
  findAll() {
    return this.formsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formsService.findOne(+id)
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
  //   return this.formsService.update(+id, updateFormDto)
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formsService.remove(+id)
  }
}
