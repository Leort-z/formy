import { Injectable } from '@nestjs/common'
import { UUID } from 'crypto'
import { CreateFormDto } from './dtos/create-form.dto'
import { FormDto } from './dtos/form.dto'
import { FormNotFound } from './errors/FormNotFound'
import { FormMapper } from './mappers/forms-mapper'
import { FormsRepository } from './repositories/forms-repository'
import { Form } from './entities/form.entity'

@Injectable()
export class FormsService {
  constructor(private formsRepository: FormsRepository) { }

  async create(dto: CreateFormDto): Promise<FormDto> {
    const form = FormMapper.toEntity(dto)
    const persistedForm = await this.formsRepository.create(form)
    return FormMapper.toDto(persistedForm)
  }

  async findAll(): Promise<FormDto[]> {
    const forms = await this.formsRepository.findAll()
    return forms.map(FormMapper.toDto)
  }

  async findOne(id: UUID): Promise<Form> {
    const form = await this.formsRepository.findOne(id)
    if (!form) throw new FormNotFound()
    return form
  }

  async getOne(id: UUID): Promise<FormDto> {
    const form = await this.findOne(id)
    return FormMapper.toDto(form)
  }

  async update(id: UUID, dto: CreateFormDto): Promise<FormDto> {
    const form = FormMapper.toEntity(dto)
    const persistedForm = await this.formsRepository.update(id, form)
    if (!persistedForm) throw new FormNotFound()
    return FormMapper.toDto(persistedForm)
  }

  async remove(id: UUID): Promise<void> {
    await this.formsRepository.remove(id)
  }
}
