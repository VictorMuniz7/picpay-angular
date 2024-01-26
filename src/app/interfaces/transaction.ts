import { User } from "./user";

export interface Transaction {
  id: number,
  amount: number,
  sender: User,
  receiverId: User,
  value: number,
  timestamp: Date
}
