import { Injectable } from '@nestjs/common'
import { FormsRepository } from './forms-repository'
import { PrismaService } from 'src/prisma.service'
import { Form } from '../entities/form.entity'
import { FormMapper } from '../mappers/forms-mapper'

@Injectable()
export class PrismaFormsRepository implements FormsRepository {
  constructor(private prisma: PrismaService) {}

  async create(form: Form): Promise<Form> {
    const raw = FormMapper.toPrisma(form)
    const persistedForm = await this.prisma.form.create({ data: raw })
    return FormMapper.prismaToEntity(persistedForm)
  }
}
