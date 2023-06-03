import { Form } from '../entities/form.entity'

export abstract class FormsRepository {
  abstract create(form: Form): Promise<Form>
}
