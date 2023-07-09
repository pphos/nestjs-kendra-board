import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { SearchResponder } from './search.responder';

@Module({
  controllers: [SearchController],
  providers: [SearchService, SearchResponder],
  imports: [],
})
export class SearchModule {}
