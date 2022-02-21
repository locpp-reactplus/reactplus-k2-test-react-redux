import axios from 'axios'
import { baseURL } from './config'

const instance = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
export const getBook = () => instance.get(baseURL)
export const postBook = (params) => instance.post(baseURL,params)
export const putBook = (id,params) => instance.put(baseURL+'/'+id,params)
export const deleteBook = (params) => instance.delete(params)