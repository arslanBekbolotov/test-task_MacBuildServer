export interface IUser {
  email: string;
  displayName?: string;
  role: string;
  password: string;
  token: string;
}

export interface IPost {
  title: string;
  publicationDate: string;
  topic: string;
  description: string;
}

export interface IWork {
  title: string;
  image: string;
  publicationYear: string;
  type: string;
  description: string;
}
