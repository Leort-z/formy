import { Injectable } from '@nestjs/common'
import { FormsRepository } from './repositories/forms-repository'
import { FormMapper } from './mappers/forms-mapper'
import { CreateFormDto } from './dtos/create-form.dto'
import { FormDto } from './dtos/form.dto'

@Injectable()
export class FormsService {
  constructor(private formsRepository: FormsRepository) {}

  async create(dto: CreateFormDto): Promise<FormDto> {
    const form = FormMapper.toEntity(dto)
    const persistedForm = await this.formsRepository.create(form)
    return FormMapper.toDto(persistedForm)
  }

  findAll() {
    return `This action returns all forms`
  }

  findOne(id: number) {
    return `This action returns a #${id} form`
  }

  // update(id: number, dto: FormDto) {
  //   return `This action updates a #${id} form ${dto}`
  // }

  remove(id: number) {
    return `This action removes a #${id} form`
  }
}
