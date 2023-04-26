export type UserData = {
  accessToken: string;
  displayName: string;
  email: string;
  uid: string;
  purchases: Order[];
};

export type UserState = {
  readonly currentUser: UserData | null;
};

export type Order = {
  userEmail: string;
  uid: string;
  id: string;
  total: number;
  createdAt: number;
  products: PurchasedProduct[];
};

export type PurchasedProduct = {
  id: number;
  brand: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
};
