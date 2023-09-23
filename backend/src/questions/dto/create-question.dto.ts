import { UUID } from "crypto"

export interface CreateQuestionDto {
  title: string
  helpText: string | null
  order: number
  type: string
  formId: UUID
}
