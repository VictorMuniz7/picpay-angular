import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'usersList', component: UsersListComponent
  },
  {
    path: 'transaction', component: CreateTransactionComponent
  },
  {
    path: 'createUser', component: CreateUserComponent
  }

];
