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
import * as fs from 'fs';
import { join } from 'path';

@Controller('/')
export class AppController {
  constructor(
  ) {}

  @Get('/')
  getWelcome(@Req() req: Request, @Res() res: Response): void {
    res.send('Welcome to the beginning of nothingness');
  }

}
