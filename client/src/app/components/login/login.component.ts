import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from '../../services/authentication/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule ,MatDialogModule, HttpClientModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AuthService]
})
export class LoginComponent {

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private authservice : AuthService
    ){}

  login(form : NgForm): void{
    this.authservice.loginUser(form.value).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
    this.dialogRef.close();
  }

}
