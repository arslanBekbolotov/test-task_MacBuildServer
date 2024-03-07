interface IAuth {
  email: string;
  password: string;
}

export interface GlobalError {
  error: string;
}

export interface IAuthResponse {
  user: User;
  message: string;
}

export interface ValidationError {
  errors: {
    [key: string]: {
      name: string;
      message: string;
    };
  };
  message: string;
  name: string;
  _message: string;
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
