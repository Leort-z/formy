import { Injectable } from '@nestjs/common'
import { UUID } from 'crypto'
import { PrismaService } from 'src/prisma.service'
import { Form } from '../entities/form.entity'
import { FormMapper } from '../mappers/forms-mapper'
import { FormsRepository } from './forms-repository'

@Injectable()
export class PrismaFormsRepository implements FormsRepository {
  constructor(private prisma: PrismaService) {}

  async create(form: Form): Promise<Form> {
    const raw = FormMapper.toPrisma(form)
    const persistedForm = await this.prisma.form.create({ data: raw })
    return FormMapper.prismaToEntity(persistedForm)
  }

  async findAll(): Promise<Form[]> {
    const forms = await this.prisma.form.findMany()
    return forms.map(FormMapper.prismaToEntity)
  }

  async findOne(id: UUID): Promise<Form | null> {
    const form = await this.prisma.form.findUnique({ where: { id } })
    if (!form) return null
    return FormMapper.prismaToEntity(form)
  }

  async update(id: UUID, form: Form): Promise<Form | null> {
    const raw = FormMapper.toPrisma(form)
    const persistedForm = await this.prisma.form.update({ where: { id }, data: raw })
    return FormMapper.prismaToEntity(persistedForm)
  }

  async remove(id: UUID): Promise<void> {
    await this.prisma.form.delete({ where: { id } })
  }
}
