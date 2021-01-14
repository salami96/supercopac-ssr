import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  matrizData = false;
  supermercadoData = false;
  lat = -30.022613;
  lng = -51.631440;
  latF = -29.9573627;
  lngF = -51.631788;
  constructor(private route: ActivatedRoute, private meta: Meta, private title: Title) {
    this.route.params.subscribe(res => {
      if (res.data === 'mtdata') {
        this.matrizData = true;
      }
      if (res.data === 'fldata') {
        this.supermercadoData = true;
      }
    });
  }

  ngOnInit() {
    this.title.setTitle('Supermercado Copac - Sobre nós');
    this.meta.addTag({name: 'keywords', content: 'Supercopac, Mercado, Supermercado, Contato, Telefone, Sobre, Histórico'});
    this.meta.addTag({name: 'description', content: `Saiba mais sobre nós, nossa história, nossas lutas e 
    conquistas, ou entre em contato conosco`});
  }

  public showMatrizData(b: boolean): void {
    this.matrizData = b;
  }

  public showFilialData(b: boolean): void {
    this.supermercadoData = b;
  }

}
