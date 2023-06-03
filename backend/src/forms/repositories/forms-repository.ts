import { UUID } from 'crypto'
import { Form } from '../entities/form.entity'

export abstract class FormsRepository {
  abstract create(form: Form): Promise<Form>
  abstract findAll(): Promise<Form[]>
  abstract findOne(id: UUID): Promise<Form | null>
  abstract update(id: UUID, form: Form): Promise<Form | null>
  abstract remove(id: UUID): Promise<void>
}
