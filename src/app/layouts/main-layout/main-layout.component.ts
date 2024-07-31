import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Board } from '../../interfaces/Board';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
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
}
