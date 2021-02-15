import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.css']
})
export class CartBtnComponent implements OnInit {
  cartValue = '5,00';
  @Input() mBottom: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  animate() {
    const node = document.getElementById('cart');
    node.classList.add('animated', 'heartBeat');
    setTimeout(() => {
      node.classList.remove('animated', 'heartBeat');
    }, 1000);
  }

  nav() {
    this.router.navigate([ '/carrinho' ]);
  }
}
