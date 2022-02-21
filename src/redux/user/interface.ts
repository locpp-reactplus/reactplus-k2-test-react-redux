export interface UserState {
  users: IUserItem[];
  isAdd: boolean;
  currentUser: IUserItem;
  isEdit: boolean;
  isDelete: boolean;
}

export interface IUserItem {
  id: string;
  username: string;
  fullname: string;
}
