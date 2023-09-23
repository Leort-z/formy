import { Module } from '@nestjs/common'
import { QuestionsController } from './questions.controller';
import { PrismaService } from 'src/prisma.service';
import { QuestionsService } from './questions.service';
import { QuestionsRepository } from './repositories/questions-repository';
import { PrismaQuestionsRepository } from './repositories/prisma-questions-repository';
import { FormsService } from 'src/forms/forms.service';
import { FormsRepository } from 'src/forms/repositories/forms-repository';
import { PrismaFormsRepository } from 'src/forms/repositories/prisma-forms-repository';

@Module({
  controllers: [QuestionsController],
  providers: [
    PrismaService,
    QuestionsService,
    FormsService,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository
    }, {
      provide: FormsRepository,
      useClass: PrismaFormsRepository,
    },]
})
export class QuestionsModule { }
