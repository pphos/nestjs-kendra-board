import { Controller, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { StoreRequestInput } from './store.dto';
import { PostRepository } from '../posts.repository';

@Controller('posts')
export class StoreController {
  constructor(private readonly repo: PostRepository) {}
  @Post()
  async store(@Res() res: Response, @Body() requestInput: StoreRequestInput) {
    console.log(requestInput);
    console.log(this.repo.create());
    return res.redirect('/posts');
  }
}
