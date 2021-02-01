import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.css']
})
export class TutoComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.updateMetaTags();
  }

  private updateMetaTags() {
    const img1 = 'https://copac.herokuapp.com/assets/tuto.png';
    const img2 = 'https://copac.herokuapp.com/assets/tuto.jpg';
    const title = 'Supermercado Copac - Tutorial';
    const url = 'https://copac.herokuapp.com/tutorial';
    const description = 'Aprenda como fazer compras pelo site do SuperCopac';

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'keywords', content: 'como, comprar, online, copac, Supercopac, Mercado, Supermercado, tutorial, aprenda' });
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
    this.meta.addTag({ property: 'og:image:width', content: '946' });
    this.meta.addTag({ property: 'og:image:height', content: '498' });
    this.meta.addTag({ property: 'og:image', content: img2 });
    this.meta.addTag({ property: 'og:image:type', content: 'image/jpg' });
    this.meta.addTag({ property: 'og:image:width', content: '398' });
    this.meta.addTag({ property: 'og:image:height', content: '442' });
  }
}
