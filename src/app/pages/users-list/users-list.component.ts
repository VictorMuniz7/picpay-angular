import { Component, OnInit, Output, inject, EventEmitter} from '@angular/core';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users/users.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CardComponent } from '../../components/card/card.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComponent, CardListComponent, RouterLink, RouterLinkActive],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit{
  @Output() userEvent = new EventEmitter<User[]>();

  usersList: User[] = []

  userService= inject(UsersService)

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.usersList = data
    })
    this.userEvent.emit(this.usersList)
  }

}
