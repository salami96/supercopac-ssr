import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product, Prom } from '../../models/entities';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnChanges {
  modal: string;
  quant: number[] = [];
  obs: string[] = [];

  constructor(private cService: CartService) { }

  @Input() prom: Prom;

  ngOnChanges() {
    this.startQuant();
  }

  getFormattedPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  }

  startQuant() {
    this.prom.product.map(p => {
      this.quant[p.cod] = 1;
      this.obs[p.cod] = '';
    });
  }

  setQuant(id: string, op: string) {
    if (op === 'add') {
      this.quant[id] = this.quant[id] + 1;
    } else {
      if (this.quant[id] > 1) {
        this.quant[id] = this.quant[id] - 1;
      }
    }
  }

  checkValue(id: string) {
    if (this.quant[id] <= 0.09) {
      this.quant[id] = 1;
    }
  }

  add2Cart(prod: Product) {
    this.cService.add(prod, this.quant[prod.cod], this.obs[prod.cod]);
    document.getElementById('close-modal').click();
  }

}