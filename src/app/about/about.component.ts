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
    const img1 = 'https://res.cloudinary.com/hcg7pmygp/image/upload/v1612187479/matriz.jpg';
    const img2 = 'https://res.cloudinary.com/hcg7pmygp/image/upload/w_400,h_400,c_fill,g_center/matriz.jpg';
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
    this.meta.updateTag({ property: 'twitter:url', content: url });
    this.meta.updateTag({ property: 'twitter:title', content: title});
    this.meta.updateTag({ property: 'twitter:description', content: description });
    this.meta.updateTag({ property: 'twitter:image', content: img1 });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.removeTag("property='og:image'");
    this.meta.removeTag("property='og:image:type'");
    this.meta.removeTag("property='og:image:width'");
    this.meta.removeTag("property='og:image:height'");
    this.meta.removeTag("property='og:image:type'");
    this.meta.removeTag("property='og:image:width'");
    this.meta.removeTag("property='og:image:height'");
    this.meta.removeTag("property='og:image'");
    this.meta.addTag({ property: 'og:image', content: img1 });
    this.meta.addTag({ property: 'og:image:type', content: 'image/png' });
    this.meta.addTag({ property: 'og:image:width', content: '1200' });
    this.meta.addTag({ property: 'og:image:height', content: '630' });
    this.meta.addTag({ property: 'og:image', content: img2 });
    this.meta.addTag({ property: 'og:image:type', content: 'image/png' });
    this.meta.addTag({ property: 'og:image:width', content: '400' });
    this.meta.addTag({ property: 'og:image:height', content: '400' });
  }

}
