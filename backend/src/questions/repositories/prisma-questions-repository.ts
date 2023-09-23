import { Injectable } from '@nestjs/common'
import { UUID } from 'crypto'
import { PrismaService } from 'src/prisma.service'
import { Question } from '../entities/question.entity'
import { QuestionsRepository } from './questions-repository'
import { QuestionMapper } from '../questions.mapper'

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(private prisma: PrismaService) { }

  async create(question: Question): Promise<Question> {
    const raw = QuestionMapper.toPrisma(question)
    const persistedForm = await this.prisma.question.create({ data: raw })
    return QuestionMapper.prismaToEntity(persistedForm)
  }

  async findByFormId(formId: UUID): Promise<Question[]> {
    const forms = await this.prisma.question.findMany({ where: { form_id: formId } })
    return forms.map(QuestionMapper.prismaToEntity)
  }

  async findOne(id: UUID): Promise<Question | null> {
    const question = await this.prisma.question.findUnique({ where: { id } })
    if (!question) return null
    return QuestionMapper.prismaToEntity(question)
  }

  async update(id: UUID, question: Question): Promise<Question | null> {
    const raw = QuestionMapper.toPrisma(question)
    const persistedForm = await this.prisma.question.update({ where: { id }, data: raw })
    return QuestionMapper.prismaToEntity(persistedForm)
  }

  async remove(id: UUID): Promise<void> {
    await this.prisma.question.delete({ where: { id } })
  }
}
