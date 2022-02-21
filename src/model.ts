export type postUser = {
  name: string,
  fullName: string
}

export interface dispatch {
  type: string,
  payload: userInterface | userInterface[] | string
}

export interface userInterface {
  id: string,
  name: string,
  fullName: string
}