import { Component, Input } from '@angular/core';
import { Activity } from '../../interfaces/Activity';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'activity-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css'
})
export class ActivityCardComponent {
  @Input({ required: true }) activity: Activity = {
    _id: '',
    title: '',
    description: '',
    state: '',
    list_id: {_id: '',
      name: '',
      team_id: '',
      team_name: '',
      description:''}
  }
}
