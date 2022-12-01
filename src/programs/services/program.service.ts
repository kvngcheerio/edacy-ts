import {
  BadRequestException,
  Injectable,
  BadGatewayException,
} from '@nestjs/common';
import { ProgramModel } from 'src/database/mongoose/models/program';
import { AddProgramInput } from '../inputs/add-program.input';
import { UpdateProgramInput } from '../inputs/update-program.input';
import { IProgram } from '../interfaces/program.interface';
import { ProgramResponse } from '../responses/program.response';

@Injectable()
export class ProgramService {
  async getProgrammes(): Promise<IProgram[]> {
    return await ProgramModel.find({}).exec();
  }

  async addProgram(payload: AddProgramInput): Promise<ProgramResponse> {
    try {
      const model = new ProgramModel(payload);
      await model.save();
      return payload;
    } catch (error) {
      const specificMessage = !!error.message && `(${error.message})`;
      throw new BadRequestException(
        `Error adding program ${specificMessage}`,
        error,
      );
    }
  }

  async updateProgram(
    program: UpdateProgramInput,
    id: string,
  ): Promise<ProgramResponse> {
    try {
      const programExists = await ProgramModel.findOne({ _id: id }).exec();
      if (!programExists)
        throw new BadGatewayException('Error: Program doesnt exist');

      return (await ProgramModel.findByIdAndUpdate({ _id: id }, program, {
        new: true,
      }).exec()) as UpdateProgramInput;
    } catch (error) {
      const specificMessage = !!error.message && `(${error.message})`;
      throw new BadRequestException(
        `Error updating program ${specificMessage}`,
        error,
      );
    }
  }

  async deleteProgram(id: string): Promise<ProgramResponse> {
    try {
      return await ProgramModel.findByIdAndDelete(id).exec();
    } catch (error) {
      const specificMessage = !!error.message && `(${error.message})`;
      throw new BadRequestException(
        `Error updating program ${specificMessage}`,
        error,
      );
    }
  }
}
