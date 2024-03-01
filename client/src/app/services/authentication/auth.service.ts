import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl='http://localhost:8080/api/v1/auth';
  isLoggedIn : boolean = false;

  constructor(private http : HttpClient) { 
    this.isLoggedIn = this.checkLoggedIn();
  }

  private checkLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/authenticate`,user).pipe(
      tap(response => {
        this.isLoggedIn = true;
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        window.location.reload();
      }),
      catchError(error => {
        console.error('Login failed:', error);
        throw error;
      })
    );
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`,user)
  }

}
