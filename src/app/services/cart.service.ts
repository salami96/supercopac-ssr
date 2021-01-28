import { Injectable } from '@angular/core';
import { CartItem, Product, Order } from '../models/entities';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  value = 0;
  prods: CartItem[];
  // private socket: SocketIOClient.Socket;

  constructor(private http: HttpClient) {
    // this.socket = io('https://sendproms.herokuapp.com/');
  }

  add(p: Product, q: number, o: string): string {
    let contains = false;
    if (this.prods !== undefined) {
      this.prods.forEach(x => {
        if (x.prod.cod === p.cod) {
          x.quant += q;
          x.total += p.preco * q;
          contains = true;
          this.value += p.preco * q;
        }
      });
    }
    if (!contains) {
      const item = new CartItem(p, q, o);
      this.prods.push(item);
      this.value += item.total;
    }
    this.saveItems();
    const ret = this.total();
    return ret;
  }

  refresh() {
    this.value = 0;
    this.prods.forEach(x => {
      x.total = x.quant * x.prod.preco;
      this.value += x.total;
    });
  }

  total(): string {
    this.prods = this.getItems();
    this.refresh();
    return 'R$ ' + (this.value + 5).toFixed(2).replace('.', ',');
  }

  totalProdutos(): string {
    return 'R$ ' + (this.value).toFixed(2).replace('.', ',');
  }

  totalComFrete(): string {
    return 'R$ ' + (this.value + 10).toFixed(2).replace('.', ',');
  }

  postarPedido(nome: string, telefone: string, formaPagamento: string, comFrete: boolean,
    cpf?: string, rua?: string, numero?: string, bairro?: string): Observable<any> {
      const total = (comFrete ? (this.value + 10) : (this.value + 5)).toFixed(2);
      const userId = this.getContactUID();

      return this.http.post('https://sendproms.herokuapp.com/api/pedidos', {
        produtos: this.prods,
        nome,
        telefone,
        cpf,
        rua,
        numero,
        bairro,
        formaPagamento,
        comFrete,
        total,
        data: new Date(),
        userId
      });
  }

  getOrder(id: string): Observable<Order | null> {
    return this.http.get<Order>('https://sendproms.herokuapp.com/api/pedido/' + id);
  }
  getProduct(id: string): Observable<any> {
    return this.http.get<Order>('https://sendproms.herokuapp.com/api/produto/' + id);
  }

  /* onNewMessage(): Observable<Order[]> {
    return Observable.create((observer: any) => {
      this.socket.on('refresh-order', (msg: Order[]) => {
        observer.next(msg);
      });
    });
  } */

  getLimit(): Observable<{limit: boolean, weekend: boolean}> {
    return this.http.get<{limit: boolean, weekend: boolean}>('https://sendproms.herokuapp.com/api/limite/');
  }

  saveItems() {
    localStorage.setItem('cartItens', JSON.stringify(this.prods));
  }
  getItems(): CartItem[] {
    const ret = JSON.parse(localStorage.getItem('cartItens'));
    if (ret) {
      // console.log(ret);
      return ret;
    }
    return [];
  }

  saveContact(obj: any) {
    localStorage.setItem('contact', JSON.stringify(obj));
  }
  getContact() {
    const ret = JSON.parse(localStorage.getItem('contact'));
    if (ret) {
      // console.log(ret);
      return ret;
    }
    return [];
  }
  getContactUID() {
    const ret = JSON.parse(localStorage.getItem('contact-os-id'));
    if (ret) {
      // console.log(ret);
      return ret;
    }
    return [];
  }
}
