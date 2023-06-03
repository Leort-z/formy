import { UUID } from 'crypto'

export interface FormDto {
  id: UUID
  name: string
  description?: string | null
  createdAt: Date
  updatedAt: Date
}
