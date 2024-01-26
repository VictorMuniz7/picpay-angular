import { UserType } from "../enums/user-type";

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  document: string,
  email: string,
  userType: UserType,
  balance: number,
  password: string
}
