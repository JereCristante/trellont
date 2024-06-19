import { Component, Input } from '@angular/core';
import { Activity } from '../../interfaces/Activity';

@Component({
  selector: 'activity-card',
  standalone: true,
  imports: [],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css'
})
export class ActivityCardComponent {
  @Input({ required: true }) activity: Activity = {
    _id: '',
    title: '',
    description: '',
    state: '',
    end_date: '',
    board_id: ''
  }
}
