import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardCardComponent } from '../../components/board-card/board-card.component';
import { NotifCardComponent } from '../../components/notif-card/notif-card.component';
import { ActivityCardComponent } from '../../components/activity-card/activity-card.component';
import { Board } from '../../interfaces/Board';
import { Activity } from '../../interfaces/Activity';
import { Notification } from '../../interfaces/Notification';
import { BoardService } from '../../Services/board.service';
import { CardService } from '../../Services/card.service';
import { ActivitesService } from '../../Services/activites.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,BoardCardComponent,NotifCardComponent,ActivityCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  boards: Array<Board> = [
    {
      _id: "3",
      name: "Proyecto Gamma",
      description: "Completar el diseño de la nueva característica.",
      team_id: "equipo_3",
      team_name: "Equipo Gamma"
    },
    {
      _id: "4",
      name: "Proyecto Delta",
      description: "Completar el diseño de la nueva característica.",
      team_id: "equipo_4",
      team_name: "Equipo Delta"
    }
  ];
  activities: Array<Activity>= [];
  notifications: Array<Notification> = [
    {
      _id: "1",
      description: "Tienes un nuevo mensaje.",
      title: "Nuevo"
    },
    {
      _id: "2",
      description: "Tu tarea vence mañana.",
      title: "Nuevo"
    },
    {
      _id: "3",
      description: "Un nuevo miembro se ha unido a tu equipo.",
      title: "Nuevo"
    }];
  //arme los arrays filtrados aunque por el momento no tienen funcionalidad
  filteredBoards: Array<Board>= this.boards;
  filteredActivities: Array<Activity>= this.activities;
  filteredNotifications: Array<Notification>= this.notifications;

  Breaload = this.Bservice.getReload();
  Creaload = this.Bservice.getReload();
  Areaload = this.Bservice.getReload();

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  constructor(private Bservice: BoardService,private Cservice: CardService,private Aservice: ActivitesService) {
   // localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW5AZ21haWwuY29tIiwiaWF0IjoxNzIzNjQ1NjA1LCJleHAiOjE3MjM3MzIwMDV9.HZXBnwjsoWTQwktbz_ib_r8b0x0PGs5yUsztQVNgOBc");
    effect(() => {
      this.Breaload();
      this.Bservice.readAll().subscribe(
        (response) => (this.filteredBoards = response.response),
        (error) => alert(error.error.message)
      );
      this.Creaload();
      this.Cservice.readAll().subscribe(
        (response) => (this.filteredActivities = response.response),
        (error) => alert(error.error.message)
      );
      this.Areaload();
      this.Aservice.readAll().subscribe(
        (response) => (this.filteredNotifications = response.response),
        (error) => alert(error.error.message)
      );
    });
  }


}
