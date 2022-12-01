import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddProgramInput } from '../inputs/add-program.input';
import { UpdateProgramInput } from '../inputs/update-program.input';
import { ProgramResponse } from '../responses/program.response';
import { ProgramService } from '../services/program.service';

@Resolver()
export class ProgramResolver {
  constructor(private readonly programService: ProgramService) {}

  @Query(() => [ProgramResponse])
  async getPrograms(): Promise<ProgramResponse[]> {
    return await this.programService.getProgrammes();
  }

  @Mutation(() => ProgramResponse)
  async addProgram(
    @Args({
      name: 'program',
      type: () => AddProgramInput,
      nullable: false,
    })
    program: AddProgramInput,
  ): Promise<ProgramResponse> {
    return await this.programService.addProgram(program);
  }

  @Mutation(() => ProgramResponse)
  async updateProgram(
    @Args('id') id: string,
    @Args({
      name: 'update',
      type: () => UpdateProgramInput,
      nullable: true,
    })
    program?: UpdateProgramInput,
  ): Promise<ProgramResponse> {
    return await this.programService.updateProgram(program, id);
  }

  @Mutation(() => ProgramResponse)
  async deleteProgram(@Args('id') id: string): Promise<ProgramResponse> {
    return await this.programService.deleteProgram(id);
  }
}
