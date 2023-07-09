import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('posts')
export class PostsController {
  @Get()
  async index(@Res() res: Response) {
    return res.render('posts/index');
  }

  @Get('/create')
  async create(@Res() res: Response) {
    return res.render('posts/create');
  }
}
