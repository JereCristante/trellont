import { Component, Input } from '@angular/core';
import { Board } from '../../interfaces/Board';

@Component({
  selector: 'board-card',
  standalone: true,
  imports: [],
  templateUrl: './board-card.component.html',
  styleUrl: './board-card.component.css'
})
export class BoardCardComponent {
  @Input({ required: true }) board: Board = {
    _id: '',
    name: '',
    team_id: '',
    team_name: '',
    description:''
  }
}
