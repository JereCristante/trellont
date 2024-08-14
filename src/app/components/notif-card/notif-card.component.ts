import { Component, Input } from '@angular/core';
import { Notification } from '../../interfaces/Notification';

@Component({
  selector: 'notif-card',
  standalone: true,
  imports: [],
  templateUrl: './notif-card.component.html',
  styleUrl: './notif-card.component.css'
})
export class NotifCardComponent {
  @Input({ required: true }) notification: Notification = {
    _id: '',
    description: '',
    title: ''
  }
}
