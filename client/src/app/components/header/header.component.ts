import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUser, heroChatBubbleBottomCenter, heroSun, heroEllipsisVertical } from '@ng-icons/heroicons/outline';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [provideIcons({ heroUser , heroChatBubbleBottomCenter, heroSun, heroEllipsisVertical})]
})
export class HeaderComponent {
  isLogged: boolean = false;

  constructor(private dialog: MatDialog){}

  openLoginDialog(): void {
    this.dialog.open(LoginComponent);
  }
}
