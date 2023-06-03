import { UUID, randomUUID } from 'crypto'

export class Form {
  private _id: UUID
  private _name: string
  private _description?: string | null
  private _createdAt: Date
  private _updatedAt: Date
  private _status: string

  public get id(): UUID {
    return this._id
  }

  public set id(id: UUID | undefined) {
    this._id = id ?? randomUUID()
  }

  public get name(): string {
    return this._name
  }

  public set name(name: string) {
    this._name = name
  }

  public get description(): string | undefined | null {
    return this._description
  }

  public set description(description: string | undefined | null) {
    this._description = description
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
}
