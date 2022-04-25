export type Category = {
  forums: string[];
  name: string;
  slug: string;
  id: string;
};

export type Forum = {
  categoryId?: string;
  description?: string;
  firstPostId?: string;
  lastPostId?: string;
  name?: string;
  slug?: string;
  threads?: string[];
  id?: string;
};

export type Post = {
  edited?: {
    at: number;
    by: string;
    moderated: boolean;
  };

  publishedAt: number;
  text: string;
  threadId: string;
  userId: string;
  id: string;
  reactions?: Record<string, Record<string, string>>;
};

export type Stats = {
  postsCount: number;
  threadsCount: number;
  usersCount: number;
  usersOnline: number;
};

export type Thread = {
  contributors?: string[];
  firstPostId: string;
  forumId: string;
  lastPostAt: number;
  lastPostId: string;
  posts: string[];
  publishedAt: number;
  slug: string;
  title: string;
  userId: string;
  id: string;
};

export type User = {
  avatar: string;
  bio?: string;
  twitter?: string;
  website?: string;
  email: string;
  lastVisitAt: number;
  name: string;
  isModerator?: boolean;
  registeredAt: number;
  username: string;
  usernameLower: string;
  id: string;
};

export type Data = {
  categories: Category[];
  forums: Forum[];
  posts: Post[];
  stats: Stats;
  threads: Thread[];
  users: User[];
};
