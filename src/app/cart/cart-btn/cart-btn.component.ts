import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.css']
})
export class CartBtnComponent implements OnInit {

  @Input() mBottom: string;

  constructor() { }

  ngOnInit() {
  }

  animate() {
    const node = document.getElementById('cart');
    node.classList.add('animated', 'heartBeat');
    setTimeout(() => {
      node.classList.remove('animated', 'heartBeat');
    }, 1000);
  }
}
