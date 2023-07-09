import { v4 as uuid } from 'uuid';

export class Post {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(title: string, content: string, category) {
    this.id = uuid();
    this.title = title;
    this.content = content;
    this.category = category;
    this.createdAt = new Date();
  }
}
