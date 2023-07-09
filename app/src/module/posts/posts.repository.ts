import { Injectable } from '@nestjs/common';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

@Injectable()
export class PostRepository {
  private readonly tableName = '';
  private readonly client = new DynamoDBClient({});

  async create(): Promise<string> {
    return 'Hello';
  }
}
