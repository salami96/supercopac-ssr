import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prom, Video } from '../models/entities';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PromService {
  u: string;
  // l = '5bc9fae934ceaf0f406f5ce4';
  l = '5be35308f4b33b003087623e';
  // url = 'http://10.1.1.104:3000/';
  // url = 'http://192.168.0.107:30000/';
  url = 'https://sendproms.herokuapp.com/api/';

  constructor(private http: HttpClient, private uService: UserService) { }

  // getUser(): void {
  //   this.u = this.uService.user._id;
  // }

  // postarProm(n: boolean, f: boolean, t: string, i: string[], d: string, dI: Date, dF?: Date): Observable<Prom> {
  //   return this.http.post<Prom>(this.url + 'proms',
  //   {
  //     'titulo': t,
  //     'descricao': d,
  //     'img': i,
  //     'data': dI,
  //     'dataFinal': dF,
  //     'autor': this.u,
  //     'loja': this.l,
  //     'notification': n,
  //     'facebook': f
  //   });
  // }

  // postarNotif(t: string, i: string[], d: string, l?: string): Observable<boolean> {
  //   return this.http.post<boolean>(this.url + 'notification',
  //   {
  //     'titulo': t,
  //     'descricao': d,
  //     'img': i,
  //     'link': l,
  //     'loja': this.l,
  //   });
  // }

  // makeFileRequest(files: Array<File>): Promise<string[]> {
  //   this.getUser();
  //   return new Promise((resolve, reject) => {
  //       const formData: any = new FormData();
  //       const xhr = new XMLHttpRequest();
  //       // xhr.withCredentials = true;
  //       for (let i = 0; i < files.length; i++) {
  //         formData.append('uploads[]', files[i], files[i].name);
  //       }
  //       xhr.onreadystatechange = function () {
  //         if (xhr.readyState === 4) {
  //           if (xhr.status === 200) {
  //             resolve(JSON.parse(xhr.response));
  //           } else {
  //             reject(xhr.response);
  //           }
  //         }
  //       };
  //       xhr.open('POST', this.url + 'images/' + this.l, true);
  //       xhr.send(formData);
  //   });
  // }

  getProms(): Observable<Prom[]> {
    return this.http.get<Prom[]>(this.url + 'new-proms/');
  }

  getProm(id: string): Observable<Prom> {
    return this.http.get<Prom>(this.url + 'prom/' + id);
  }


  // removeProm(id: string): Observable<boolean> {
  //   return this.http.delete<boolean>(this.url + 'prom/' + id);
  // }

  // publishVideo(t: string, l: string, dI: Date, dF: Date): Observable<boolean> {
  //   return this.http.post<boolean>(this.url + 'video',
  //   {
  //     'titulo': t,
  //     'data': dI,
  //     'dataFinal': dF,
  //     'link': l,
  //     'loja': this.l
  //   });
  // }
  getVideo(): Observable<Video> {
    return this.http.get<Video>(this.url + 'video/' + this.l);
  }
}
