import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostRepository } from './posts.repository';
import { SearchController, SearchService, SearchResponder } from './search';
import { StoreController, StoreService } from './store';

@Module({
  controllers: [PostsController, SearchController, StoreController],
  providers: [SearchService, StoreService, SearchResponder, PostRepository],
  imports: [],
})
export class PostsModule {}
