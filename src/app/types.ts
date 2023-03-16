export interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  creator: string;
  creatorName: string;
  createdAt: string;
  reaction: {
    liked: number;
    loved: number;
    helpful: number;
  };
  __v: string;
}
