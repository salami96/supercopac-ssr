import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    // private uService: UserService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformID: Object,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.updateMetaTags();
    // this.uService.ping().subscribe(resp => console.log(resp));
    if (isPlatformBrowser(this.platformID)) {
      this.route.params.subscribe(res => {
        if (res.data === 'cadastro') {
          const checkExist = setInterval(function() {
            if (document.readyState !== 'loading') {
              document.getElementById('cadastro').click();
              clearInterval(checkExist);
            }
          }, 100);
        }
      });
    }
  }

  animate(id: string, animationName: string, event: any) {
    if (event.type === 'mouseover') {
      const node = document.getElementById(id);
      node.classList.add('animated', animationName);
    }
    if (event.type === 'mouseout') {
      const node = document.getElementById(id);
      node.classList.remove('animated', animationName);
    }
  }

  private updateMetaTags() {
    const img1 = 'https://copac.herokuapp.com/assets/cover.jpeg';
    const img2 = 'https://res.cloudinary.com/hcg7pmygp/image/upload/v1607602262/favicon.ico';
    const title = 'SuperCopac - Alimentos saudáveis para a vida ♥';
    const url = 'https://copac.herokuapp.com/video';
    const description = `Visite o Supermercado Copac em Charqueadas, com grande variedade 
    de produtos, carnes de qualidade, verduras fresquinhas e orgânicas, pelo menor preço. Venha conferir!`;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'keywords', content: `super, supermercado, mercado, copac, coopac, cooperativa, agricultura, 
    familiar, organico, horta, charqueadas, compra, online, delivery, entrega` });
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'type', content: 'website' });
    this.meta.updateTag({ name: 'title', content: title});
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:title', content: title});
    this.meta.updateTag({ property: 'og:description', content: description});
    this.meta.updateTag({ property: 'twitter:url', content: url });
    this.meta.updateTag({ property: 'twitter:title', content: title});
    this.meta.updateTag({ property: 'twitter:description', content: description});
    this.meta.updateTag({ property: 'twitter:image', content: img1 });
    this.meta.updateTag({ property: 'og:type', content: 'website'});
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
    this.meta.addTag({ property: 'og:image:type', content: 'image/x-icon' });
    this.meta.addTag({ property: 'og:image:width', content: '256' });
    this.meta.addTag({ property: 'og:image:height', content: '248' });
  }
}
