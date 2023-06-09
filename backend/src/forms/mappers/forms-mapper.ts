import { Prisma } from '@prisma/client'
import { UUID } from 'crypto'
import { CreateFormDto } from '../dtos/create-form.dto'
import { FormDto } from '../dtos/form.dto'
import { Form } from '../entities/form.entity'

export class FormMapper {
  static toEntity(dto: CreateFormDto): Form {
    const form = new Form()
    form.name = dto.name
    form.description = dto.description
    return form
  }

  static toDto(form: Form): FormDto {
    return {
      id: form.id,
      name: form.name,
      description: form.description,
      createdAt: form.createdAt,
      updatedAt: form.updatedAt,
    }
  }

  static toPrisma(form: Form) {
    return {
      id: form.id,
      name: form.name,
      description: form.description,
      created_at: form.createdAt ?? new Date(),
      updated_at: form.updatedAt ?? new Date(),
      status: form.status ?? '',
    }
  }

  static prismaToEntity(prisma: Prisma.FormCreateInput): Form {
    const form = new Form()
    form.id = prisma.id as UUID
    form.name = prisma.name
    form.description = prisma.description
    form.createdAt = prisma.created_at as Date
    form.updatedAt = prisma.updated_at as Date

    return form
  }
}
