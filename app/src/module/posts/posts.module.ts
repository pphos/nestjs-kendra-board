import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { SearchModule } from './search/search.module';

@Module({
  controllers: [PostsController],
  providers: [],
  imports: [SearchModule],
})
export class PostsModule {}
