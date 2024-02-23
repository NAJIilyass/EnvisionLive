import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  channels = [
    {
      "id": 1,
      "avatar":"https://static-cdn.jtvnw.net/jtv_user_pictures/dfb5c790-5ea6-4543-bc2b-0f5f79b1f959-profile_image-70x70.png",
      "name": "JitterTed",
      "category": "Software Devlopement",
      "views":"900",
      "state":"active"
    },
    {
      "id": 2,
      "avatar":"https://static-cdn.jtvnw.net/jtv_user_pictures/dfb5c790-5ea6-4543-bc2b-0f5f79b1f959-profile_image-70x70.png",
      "name": "JitterTed",
      "category": "Software Devlopement",
      "views":"9k",
      "state":"active"
    },
    {
      "id": 3,
      "avatar":"https://static-cdn.jtvnw.net/jtv_user_pictures/dfb5c790-5ea6-4543-bc2b-0f5f79b1f959-profile_image-70x70.png",
      "name": "JitterTed",
      "category": "Software Devlopement",
      "views":"2.5k",
      "state":"active"
    },
    {
      "id": 4,
      "avatar":"https://static-cdn.jtvnw.net/jtv_user_pictures/dfb5c790-5ea6-4543-bc2b-0f5f79b1f959-profile_image-70x70.png",
      "name": "JitterTed",
      "category": "Software Devlopement",
      "views":"850",
      "state":"active"
    },
    {
      "id": 5,
      "avatar":"https://static-cdn.jtvnw.net/jtv_user_pictures/dfb5c790-5ea6-4543-bc2b-0f5f79b1f959-profile_image-70x70.png",
      "name": "JitterTed",
      "category": "Software Devlopement",
      "views":"1.2k",
      "state":"active"
    },
    
  ];
}
