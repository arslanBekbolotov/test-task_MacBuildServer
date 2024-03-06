export interface IUser {
  username: string;
  displayName?: string;
  avatar?: string;
  role: string;
  password: string;
  token: string;
  googleID?: string;
}
