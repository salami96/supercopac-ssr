import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.css']
})
export class CartBtnComponent implements OnInit, OnDestroy {
  cartValue = '';
  @Input() mBottom: string;
  sub: Subscription;

  constructor(
    private router: Router,
    private cService: CartService
  ) { }

  
  ngOnInit() {
    this.sub = this.cService.getCartValue.subscribe(this.animate)
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  animate = (resp) => {
    if (resp) {
      this.cartValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resp + 5);
      const node = document.getElementById('cart');
      node.classList.add('animated', 'heartBeat');
      setTimeout(() => {
        node.classList.remove('animated', 'heartBeat');
      }, 1000);
    }
  }

  nav() {
    this.router.navigate([ '/carrinho' ]);
  }
}
