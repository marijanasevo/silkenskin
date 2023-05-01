export type PostsState = {
  readonly posts: Post[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export type Post = {
  title: string;
  content: string;
  createdAt: Date;
  tags: string[];
  id: string;
  excerpt: string;
  thumbnail: string;
};
