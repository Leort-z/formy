import { Module } from '@nestjs/common'
import { FormsModule } from './forms/forms.module'
import { QuestionsModule } from './questions/questions.module'

@Module({ imports: [FormsModule, QuestionsModule] })
export class AppModule { }
