import { IUserItem } from "../redux/user/interface";
import { axiosClient } from "./axiosClient";

const UserAPI = {
  getAll() {
    const url = `/users`;
    return axiosClient.get(url);
  },
  addUser(itemUser: IUserItem) {
    const url = `/users`;
    return axiosClient.post(url, itemUser);
  },
  deleteUser(idUser: string) {
    const url = `/users/${idUser}`;
    return axiosClient.delete(url);
  },
  updateUser(itemUser: IUserItem) {
    const url = `/users/${itemUser.id}`;
    return axiosClient.put(url, itemUser);
  },
};
export default UserAPI;
