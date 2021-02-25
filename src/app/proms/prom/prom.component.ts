import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Prom } from '../../models/entities';
import { PromService } from '../../services/prom.service';

@Component({
  selector: 'app-prom',
  templateUrl: './prom.component.html',
  styleUrls: ['./prom.component.css']
})
export class PromComponent implements OnInit {
  prom: Prom;

  constructor(
    private pService: PromService,
    @Inject(PLATFORM_ID) private platformID: Object,
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformID)) {
      this.route.params.subscribe(res => {
        if (res.id) {
          this.pService.getProm(res.id).subscribe(p => {
            this.prom = p;
            this.updateMetaTags(p);
          });
        }
      });
    }
  }

  updateMetaTags(p: Prom) {
    this.meta.addTag({ name: 'description', content: p.titulo + ' ' + p.descricao });
    const img1 = p.img;
    const img2 = p.img;
    const title = 'Supermercado Copac - ' + p.titulo;
    const url = 'https://copac.herokuapp.com/oferta/' + p._id;
    const description = p.titulo + ' ' + p.descricao;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'keywords', content: 'Supercopac, Mercado, Supermercado, Promo, Oferta, Promoção, Preço, Baixo, revista, encarte, charqueadas' + p.titulo.split(' ').join(', ') });
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
