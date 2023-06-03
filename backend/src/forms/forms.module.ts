import { Module } from '@nestjs/common'
import { FormsService } from './forms.service'
import { FormsController } from './forms.controller'
import { FormsRepository } from './repositories/forms-repository'
import { PrismaFormsRepository } from './repositories/prisma-forms-repository'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [FormsController],
  providers: [
    PrismaService,
    FormsService,
    {
      provide: FormsRepository,
      useClass: PrismaFormsRepository,
    },
  ],
})
export class FormsModule {}
