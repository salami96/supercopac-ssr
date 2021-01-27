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
    console.log(this.mBottom);
  }

}
