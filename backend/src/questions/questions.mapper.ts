import { Form } from "src/forms/entities/form.entity"
import { CreateQuestionDto } from "./dto/create-question.dto"
import { Question } from "./entities/question.entity"
import { Question as PrimsaQuestion } from "@prisma/client"
import { UUID } from "crypto"
import { QuestionDto } from "./dto/question.dto"

export class QuestionMapper {
  static toEntity(dto: CreateQuestionDto, form: Form): Question {
    const question = new Question()
    question.title = dto.title
    question.helpText = dto.helpText
    question.order = dto.order
    question.type = dto.type
    question.form = form
    return question
  }

  static toDto(question: Question): QuestionDto {
    return {
      id: question.id,
      title: question.title,
      helpText: question.helpText,
      order: question.order,
      type: question.type,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
    }
  }

  static toPrisma(question: Question): PrimsaQuestion {
    return {
      id: question.id,
      title: question.title,
      help_text: question.helpText,
      order: question.order,
      type: question.type,
      form_id: question.form.id,
      created_at: question.createdAt ?? new Date(),
      updated_at: question.updatedAt ?? new Date(),
      status: question.status ?? '',
    }
  }

  static prismaToEntity(prisma: PrimsaQuestion): Question {
    const question = new Question()
    question.id = prisma.id as UUID
    question.title = prisma.title
    question.helpText = prisma.help_text
    question.order = prisma.order
    question.type = prisma.type
    question.createdAt = prisma.created_at as Date
    question.updatedAt = prisma.updated_at as Date

    return question
  }
}
