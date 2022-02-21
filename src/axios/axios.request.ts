import axios from "./axios.config";
import { userInterface } from "../model";
import { postUser } from "../model";


export const GetUser = async():Promise<userInterface[]> => {
  const response = axios.get<userInterface[], userInterface[]>("")
  return response
}

export const AddUser = async(data: postUser):Promise<userInterface> => {
  const response = axios.post<userInterface, userInterface>("",data, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return response
}

export const DeleteUser = async(id: string):Promise<userInterface> => {
  const response = axios.delete<userInterface, userInterface>(`/${id}`);
  return response
}

export const EditUser = async(data: userInterface):Promise<userInterface> => {
  const response = axios.put<userInterface, userInterface>(`/${data.id}`, {
    name: data.name,
    fullName: data.fullName
  });
  return response
}
