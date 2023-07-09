import { Injectable } from '@nestjs/common';
import {
  KendraClient,
  QueryCommand,
  QueryCommandInput,
  QueryResultItem,
} from '@aws-sdk/client-kendra';
import { SearchServiceInput } from './search.dto';

export type SearchServiceOutput = QueryResultItem[];

@Injectable()
export class SearchService {
  async invoke(
    client: KendraClient,
    serviceInput: SearchServiceInput,
  ): Promise<SearchServiceOutput> {
    const { query, indexId, languageCode } = serviceInput;

    const commandInput: QueryCommandInput = {
      IndexId: indexId,
      QueryText: query,
      AttributeFilter: {
        EqualsTo: {
          Key: '_language_code',
          Value: {
            StringValue: languageCode,
          },
        },
      },
    };
    const command = new QueryCommand(commandInput);
    const response = await client.send(command);

    return response.ResultItems;
  }
}
