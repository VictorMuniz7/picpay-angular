import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users/users.service';
import { TransactionService } from './services/transaction/transaction.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, CreateTransactionComponent, CreateUserComponent, UsersListComponent, HttpClientModule],
  providers: [UsersService, TransactionService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'picpay-angular';
}
