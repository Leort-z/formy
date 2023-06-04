import { UUID, randomUUID } from 'crypto'
import { Form } from 'src/forms/entities/form.entity'

export class Question {
  private _id: UUID
  private _title: string
  private _helpText?: string | null
  private _order: number
  private _type: string
  private _createdAt: Date
  private _updatedAt: Date
  private _status: string
  private _form: Form

  public get id(): UUID {
    return this._id
  }

  public set id(id: UUID | undefined) {
    this._id = id ?? randomUUID()
  }

  public get title(): string {
    return this._title
  }

  public set title(title: string) {
    this._title = title
  }

  public get helpText(): string | undefined | null {
    return this._helpText
  }

  public set helpText(helpText: string | undefined | null) {
    this._helpText = helpText
  }

  public get order(): number {
    return this._order
  }

  public set order(order: number) {
    this._order = order
  }

  public get type(): string {
    return this._type
  }

  public set type(type: string) {
    this._type = type
  }

  public get createdAt(): Date {
    return this._createdAt
  }

  public set createdAt(createdAt: Date) {
    this._createdAt = createdAt
  }

  public get updatedAt(): Date {
    return this._updatedAt
  }

  public set updatedAt(updatedAt: Date) {
    this._updatedAt = updatedAt
  }

  public get status(): string {
    return this._status
  }

  public set status(status: string) {
    this._status = status
  }

  public get form(): Form {
    return this._form
  }

  public set form(form: Form) {
    this._form = form
  }
}
