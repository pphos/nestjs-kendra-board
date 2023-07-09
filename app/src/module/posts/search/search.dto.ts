import { IsNotEmpty, IsString } from 'class-validator';
import { QueryResultItem } from '@aws-sdk/client-kendra';

export class SearchRequestInput {
  @IsNotEmpty()
  @IsString()
  query: string;
}

export class SearchServiceInput {
  @IsNotEmpty()
  @IsString()
  query: string;

  @IsNotEmpty()
  @IsString()
  indexId: string;

  @IsNotEmpty()
  @IsString()
  languageCode: string;
}

export class SearchResponderInput {
  @IsNotEmpty()
  @IsString()
  query: string;
  queryResultItems: QueryResultItem[];
}
