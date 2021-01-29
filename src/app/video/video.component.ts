import { Component, OnInit } from '@angular/core';
import { PromService } from '../services/prom.service';
import { Video } from '../models/entities';
import { DomSanitizer, SafeUrl, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  video: Video;
  link: SafeUrl;
  loading = true;
  constructor(
    public pService: PromService,
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
  ) {
    this.updateMetaTags();
  }

  private updateMetaTags() {
    const img = 'https://copac.herokuapp.com/assets/play.png';
    const title = 'Supermercado Copac - Vídeo';
    const url = 'https://copac.herokuapp.com/video';
    const description = 'Confira o vídeo com as promoções da copac';

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'keywords', content: 'Supercopac, Mercado, Supermercado, Promo, Oferta, Promoção, Preço, Video' });
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'type', content: 'video' });
    this.meta.updateTag({ name: 'title', content: title });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: img });
    this.meta.updateTag({ property: 'twitter:url', content: url });
    this.meta.updateTag({ property: 'twitter:title', content: title });
    this.meta.updateTag({ property: 'twitter:description', content: description });
    this.meta.updateTag({ property: 'twitter:image', content: img });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image:type', content: 'image/png' });
    this.meta.updateTag({ property: 'og:image:width', content: '950' });
    this.meta.updateTag({ property: 'og:image:height', content: '511' });
  }

  ngOnInit() {
    this.updateMetaTags();
    this.pService.getVideo().subscribe( resp => {
      this.loading = false;
      this.video = resp;
      this.link = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.facebook.com/plugins/video.php?href='
        + resp.link +
        '&mute=0&autoplay=1&show_text=false&appId=507937906363306'
      );
      this.meta.addTag({property: 'og:video', content: resp.link});
    });
  }

  getDate(date: string): string {
    if (date === null) {
      return '';
    }
    const aux = date.split('/');
    return aux[1] + '/' + aux[0] + '/' + aux[2];
  }

  share(): void {
    // PRECISA MUDAR URL
    window.open(
      'http://api.whatsapp.com/send?text=Confira o video com as promoções do Super Copac.'
      + ' Acesse https://copac.herokuapp.com/video/',
      '_blank'
    );
  }
}
