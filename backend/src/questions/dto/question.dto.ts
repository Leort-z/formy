import { UUID } from "crypto"

export interface QuestionDto {
  id: UUID
  title: string
  helpText?: string | null
  order: number
  type: string
  createdAt: Date
  updatedAt: Date
}