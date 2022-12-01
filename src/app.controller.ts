import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors';
import { Request, Response } from 'express';
import { FileUploadService } from './shared/file-upload.service';

@Controller('/')
export class AppController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Get('/')
  getWelcome(@Req() req: Request, @Res() res: Response): void {
    res.send('Welcome to the beginning of nothingness');
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file, @Res() res: Response): Promise<any> {
    const result = await this.fileUploadService.upload(file);
    res.send(result);
  }
}
