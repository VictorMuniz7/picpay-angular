import { UserType } from "../enums/user-type";

export interface UserDTO {
  firstName: string,
  lastName: string,
  document: string,
  email: string,
  userType: UserType,
  balance: number,
  password: string
}
