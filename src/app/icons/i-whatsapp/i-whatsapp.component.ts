import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'i-whatsapp',
  templateUrl: './i-whatsapp.component.html',
  styleUrls: ['./i-whatsapp.component.css']
})
export class IWhatsappComponent implements OnInit {

  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }

}
