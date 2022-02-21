export type Book = {
  readonly id: string;
  name: string;
  price: number;
};

export type action = {
  type : string,
  payload : any
};
