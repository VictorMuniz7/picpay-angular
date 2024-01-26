import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { UserDTO } from '../../dtos/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly baseUrl: string = 'http://localhost:8080/users'

  http = inject(HttpClient)

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl)
  }

  createUser(user: UserDTO): Observable<User>{
    return this.http.post<User>(this.baseUrl, user)
  }
}
