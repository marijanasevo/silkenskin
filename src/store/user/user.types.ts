export type UserData = {
  accessToken: string;
  displayName: string;
  email: string;
};

export type UserState = {
  readonly currentUser: UserData | null;
};
