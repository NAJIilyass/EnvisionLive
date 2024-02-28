import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/authentication/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[AuthService]
})
export class RegisterComponent {

  constructor(
    private dialogRef: MatDialogRef<RegisterComponent>,
    private authService : AuthService
    ){}
  register(form : NgForm): void{
    this.authService.registerUser(form.value).subscribe(response =>{
      console.log(response);
    }, error => {
      console.log(error);
    })
    this.dialogRef.close();
  }

}
