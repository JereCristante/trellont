import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardCardComponent } from '../../components/board-card/board-card.component';
import { NotifCardComponent } from '../../components/notif-card/notif-card.component';
import { ActivityCardComponent } from '../../components/activity-card/activity-card.component';
import { Board } from '../../interfaces/Board';
import { Activity } from '../../interfaces/Activity';
import { Notification } from '../../interfaces/Notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,BoardCardComponent,NotifCardComponent,ActivityCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  boards: Array<Board> = [
    {
      _id: "3",
      name: "Proyecto Gamma",
      team_id: "equipo_3",
      team_name: "Equipo Gamma"
    },
    {
      _id: "4",
      name: "Proyecto Delta",
      team_id: "equipo_4",
      team_name: "Equipo Delta"
    }
  ];
  activities: Array<Activity>= [
    {
      _id: "1",
      title: "Fase de Diseño",
      description: "Completar el diseño de la nueva característica.",
      state: "En Progreso",
      end_date: "2024-06-30",
      board_id: "1"
    },
    {
      _id: "2",
      title: "Fase de Desarrollo",
      description: "Desarrollar la nueva característica.",
      state: "No Iniciado",
      end_date: "2024-07-15",
      board_id: "1"
    },
    {
      _id: "3",
      title: "Fase de Pruebas",
      description: "Probar la nueva característica.",
      state: "No Iniciado",
      end_date: "2024-07-30",
      board_id: "2"
    },
    {
      _id: "4",
      title: "Despliegue",
      description: "Desplegar la nueva característica en producción.",
      state: "No Iniciado",
      end_date: "2024-08-10",
      board_id: "2"
    }
  ];
  notifications: Array<Notification> = [
    {
      _id: "1",
      description: "Tienes un nuevo mensaje."
    },
    {
      _id: "2",
      description: "Tu tarea vence mañana."
    },
    {
      _id: "3",
      description: "Un nuevo miembro se ha unido a tu equipo."
    }];
  //arme los arrays filtrados aunque por el momento no tienen funcionalidad
  filteredBoards: Array<Board>= this.boards;
  filteredActivities: Array<Activity>= this.activities;
  filteredNotifications: Array<Notification>= this.notifications;

  


}
