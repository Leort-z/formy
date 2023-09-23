import { UUID } from 'crypto'
import { Question } from '../entities/question.entity'

export abstract class QuestionsRepository {
  abstract create(Question: Question): Promise<Question>
  abstract findByFormId(formId: UUID): Promise<Question[]>
  abstract findOne(id: UUID): Promise<Question | null>
  abstract update(id: UUID, question: Question): Promise<Question | null>
  abstract remove(id: UUID): Promise<void>
}
