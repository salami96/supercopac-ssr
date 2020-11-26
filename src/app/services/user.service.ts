import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  envioWhats (n: string, t: string): Observable<{ status: boolean, msg: string }> {
    return this.http.post<{ status: boolean, msg: string }>('https://sendproms.herokuapp.com/api/contatos/',
      {
        'nome': n,
        'numero': t
      },
      {
        headers: new HttpHeaders({
          'access_key': 't5b3b9a5'
        })
      }
    );

  }
}
