import { Module } from '@nestjs/common';
import { ProgramResolver } from './resolvers/program.resolver';
import { ProgramService } from './services/program.service';


@Module({
  providers: [ProgramService, ProgramResolver],
  exports: [ProgramService],
})
export class ProgramModule {}
