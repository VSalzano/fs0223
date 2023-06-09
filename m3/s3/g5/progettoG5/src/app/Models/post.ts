export class Post {
  id: number;
  title: string;
  body: string;
  author: string;

  constructor(id: number, title: string, body: string, author: string) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.author = author;
  }
}
