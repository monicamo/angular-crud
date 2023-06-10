import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API)
  }

  criar(pensamento: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, pensamento);
  }

}
