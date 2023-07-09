import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { SearchResponderInput } from './search.dto';

@Injectable()
export class SearchResponder {
  async respondView(res: Response, responderInput: SearchResponderInput) {
    const responseApi = await this.respondApi(responderInput);
    return res.render('posts/index', { posts: responseApi });
  }

  async respondApi(responderInput: SearchResponderInput) {
    const { queryResultItems } = responderInput;
    const posts = queryResultItems.map((item) => {
      const title = item.DocumentTitle.Text;
      const text = item.DocumentExcerpt.Text;
      const link = '#';

      return {
        title,
        text,
        link,
      };
    });
    return posts;
  }
}
