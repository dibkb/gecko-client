export interface Blog {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  creator: string;
  createdAt: string;
  reaction: {
    liked: number;
    loved: number;
    helpful: number;
  };
  __v: string;
}
