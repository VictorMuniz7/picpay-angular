import { Component, Input} from '@angular/core';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent{

  @Input() user!: User

  showDetails: boolean = false

  toggleDetails(){
    this.showDetails = !this.showDetails;
  }
}
