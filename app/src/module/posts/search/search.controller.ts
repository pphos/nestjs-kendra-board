import { Controller, Post, Res, Body } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KendraClient } from '@aws-sdk/client-kendra';
import { Response } from 'express';
import { SearchService, SearchServiceOutput } from './search.service';
import { SearchResponder } from './search.responder';
import {
  SearchRequestInput,
  SearchServiceInput,
  SearchResponderInput,
} from './search.dto';

interface EnvironmentVariables {
  AWS_KENDRA_INDEX_ID: string;
  AWS_KENDRA_LANGUAGE_CODE: string;
}

@Controller('posts')
export class SearchController {
  private readonly kendraClient: KendraClient;

  constructor(
    private readonly config: ConfigService<EnvironmentVariables>,
    private readonly service: SearchService,
    private readonly responder: SearchResponder,
  ) {
    this.kendraClient = new KendraClient({});
  }

  @Post('/search')
  async search(@Res() res: Response, @Body() requestInput: SearchRequestInput) {
    const serviceInput = this.createServiceInput(requestInput);
    const serviceResponse = await this.service.invoke(
      this.kendraClient,
      serviceInput,
    );

    const responderInput = this.createResponderInput(
      requestInput,
      serviceResponse,
    );
    return this.responder.respondView(res, responderInput);
  }

  private createServiceInput(
    requestInput: SearchRequestInput,
  ): SearchServiceInput {
    return {
      query: requestInput.query,
      indexId: this.config.get('AWS_KENDRA_INDEX_ID'),
      languageCode: this.config.get('AWS_KENDRA_LANGUAGE_CODE'),
    };
  }

  private createResponderInput(
    requestInput: SearchRequestInput,
    serviceResponse: SearchServiceOutput,
  ): SearchResponderInput {
    return {
      query: requestInput.query,
      queryResultItems: serviceResponse,
    };
  }
}
