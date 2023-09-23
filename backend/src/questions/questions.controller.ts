import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { UUID } from 'crypto'
import { CreateQuestionDto } from './dto/create-question.dto'
import { QuestionsService } from './questions.service'
import { QuestionDto } from './dto/question.dto'

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) { }

  @Post()
  async create(@Body() question: CreateQuestionDto): Promise<QuestionDto> {
    return await this.questionsService.create(question)
  }

  @Get('form/:formId')
  async findByFormId(@Param('formId') formId: UUID): Promise<QuestionDto[]> {
    return await this.questionsService.findByFormId(formId)
  }

  @Get(':id')
  async findOne(@Param('id') id: UUID): Promise<QuestionDto> {
    return await this.questionsService.findOne(id)
  }

  @Patch(':id')
  async update(@Param('id') id: UUID, @Body() question: CreateQuestionDto): Promise<QuestionDto> {
    return await this.questionsService.update(id, question)
  }

  @Delete(':id')
  async remove(@Param('id') id: UUID): Promise<void> {
    await this.questionsService.remove(id)
  }
}
