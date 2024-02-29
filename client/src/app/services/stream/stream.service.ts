import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private baseUrl='http://localhost:3000/streams';

  constructor(private http : HttpClient) { }

  loadStreamById(id: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
}
