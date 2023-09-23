import { Injectable } from "@nestjs/common"
import { CreateQuestionDto } from "./dto/create-question.dto"
import { QuestionsRepository } from "./repositories/questions-repository"
import { QuestionDto } from "./dto/question.dto"
import { QuestionMapper } from "./questions.mapper"
import { FormsService as FormsService } from "src/forms/forms.service"
import { UUID } from "crypto"
import { FormNotFound } from "src/forms/errors/FormNotFound"

@Injectable()
export class QuestionsService {
  constructor(private questionsRepository: QuestionsRepository, private formsService: FormsService) { }

  async create(dto: CreateQuestionDto): Promise<QuestionDto> {
    const form = await this.formsService.findOne(dto.formId)
    const question = QuestionMapper.toEntity(dto, form)
    const persistedQuestion = await this.questionsRepository.create(question)
    return QuestionMapper.toDto(persistedQuestion)
  }

  async findByFormId(formId: UUID): Promise<QuestionDto[]> {
    const questions = await this.questionsRepository.findByFormId(formId)
    return questions.map(QuestionMapper.toDto)
  }

  async findOne(id: UUID): Promise<QuestionDto> {
    const question = await this.questionsRepository.findOne(id)
    if (!question) throw new FormNotFound()
    return QuestionMapper.toDto(question)
  }

  async update(id: UUID, dto: CreateQuestionDto): Promise<QuestionDto> {
    const form = await this.formsService.findOne(dto.formId)
    const question = QuestionMapper.toEntity(dto, form)
    const persistedQuestion = await this.questionsRepository.update(id, question)
    if (!persistedQuestion) throw new FormNotFound()
    return QuestionMapper.toDto(persistedQuestion)
  }

  async remove(id: UUID): Promise<void> {
    await this.questionsRepository.remove(id)
  }
}
