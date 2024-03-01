import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUser, heroChatBubbleBottomCenter, heroSun, heroEllipsisVertical, heroArrowLeftStartOnRectangle } from '@ng-icons/heroicons/outline';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../../services/authentication/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, NgIf, HttpClientModule, MatMenuModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [provideIcons({ heroUser , heroChatBubbleBottomCenter, heroSun, heroEllipsisVertical, heroArrowLeftStartOnRectangle})],
  providers: [AuthService]
})
export class HeaderComponent {

  constructor(
    private dialog: MatDialog,
    public authService : AuthService
    ){}

  openLoginDialog(): void {
    this.dialog.open(LoginComponent);
    console.log(this.authService.isLoggedIn)
  }
  openRegisterDialog(): void {
    this.dialog.open(RegisterComponent);
  }

  logoutUser(): void{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.reload();
  }
}
