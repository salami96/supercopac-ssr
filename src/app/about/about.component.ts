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
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.updateMetaTags();
  }

  public showMatrizData(b: boolean): void {
    this.matrizData = b;
  }

  public showFilialData(b: boolean): void {
    this.supermercadoData = b;
  }

  private updateMetaTags() {
    const img = 'https://copac.herokuapp.com/assets/matriz.jpg';
    const title = 'Supermercado Copac - Sobre nós';
    const url = 'https://copac.herokuapp.com/sobre-nos';
    const description = `Saiba mais sobre nós, nossa história, nossas lutas e 
    conquistas, ou entre em contato conosco`;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'keywords', content: 'Assentamento, Supercopac, Mercado, Supermercado, Contato, Telefone, Sobre, Histórico' });
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'type', content: 'website' });
    this.meta.updateTag({ name: 'title', content: title });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: img });
    this.meta.updateTag({ property: 'twitter:url', content: url });
    this.meta.updateTag({ property: 'twitter:title', content: title});
    this.meta.updateTag({ property: 'twitter:description', content: description });
    this.meta.updateTag({ property: 'twitter:image', content: img });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image:type', content: 'image/jpg' });
    this.meta.updateTag({ property: 'og:image:width', content: '1181' });
    this.meta.updateTag({ property: 'og:image:height', content: '787' });
  }

}
