import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { AuthService } from '../../services/authentication/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ NgFor, NgIf, NgClass, HttpClientModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers: [AuthService]
})
export class SidebarComponent {

  constructor(public authService : AuthService){}

  channels = [
    {
      "id": 1,
      "avatar":"https://static-cdn.jtvnw.net/jtv_user_pictures/dfb5c790-5ea6-4543-bc2b-0f5f79b1f959-profile_image-70x70.png",
      "name": "JitterTed",
      "category": "Fortnite",
      "views":"900",
      "state":"live"
    },
    {
      "id": 2,
      "avatar":"https://static-cdn.jtvnw.net/jtv_user_pictures/39da49ae-e57f-4fc2-b781-6371440847eb-profile_image-70x70.png",
      "name": "PrimeRed",
      "category": "Leage of legends",
      "views":"9k",
      "state":"live"
    },
    {
      "id": 3,
      "avatar":"https://static-cdn.jtvnw.net/jtv_user_pictures/a58575dc-6414-45f7-a2da-a1ea2bed2e1f-profile_image-70x70.png",
      "name": "Ahmed Sabiri",
      "category": "Valorant",
      "views":"2.5k",
      "state":"live"
    },
    {
      "id": 4,
      "avatar":"https://static-cdn.jtvnw.net/jtv_user_pictures/8cc62784-f8fb-485c-ad73-5a6053a74db5-profile_image-70x70.jpeg",
      "name": "TheDevRel",
      "category": "Software Devlopement",
      "views":"850",
      "state":"live"
    },
    {
      "id": 5,
      "avatar":"https://static-cdn.jtvnw.net/jtv_user_pictures/d96af87b-949c-4074-ace1-48c1f94533b6-profile_image-70x70.png",
      "name": "Chaos33",
      "category": "GTA V",
      "views":"1.2k",
      "state":"offline"
    },
    
  ];
}
