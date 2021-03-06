import { Component, OnInit, Input, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { Prom } from '../models/entities';
import { PromService } from '../services/prom.service';
import { UserService } from '../services/user.service';
// import { MatSnackBar } from '@angular/material';
import { Meta, Title, DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgxMasonryOptions } from 'ngx-masonry';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-proms',
  templateUrl: './proms.component.html',
  styleUrls: ['./proms.component.css']
})
export class PromsComponent implements OnInit {
  list: Prom[];
  link: SafeUrl;
  cartValue: string;
  selectedProm: Prom;
  showShareBtn = false;
  width: number;
  @Input() selected: string;

  constructor(
    private pService: PromService,
    @Inject(PLATFORM_ID) private platformID: Object,
    public uService: UserService,
    // public snack: MatSnackBar,
    private meta: Meta,
    private title: Title,
    private sanitizer: DomSanitizer,
  ) {}

  public myOptions: NgxMasonryOptions = {
    horizontalOrder: true,
    percentPosition: true,
    transitionDuration: '0.2s'
  };


  ngOnInit() {
    this.updateMetaTags();
    this.pService.getProms().subscribe( resp => {
      this.list = resp.filter(item => item._id !== this.selected);
      this.list.forEach(p => p.img = this.minifyImgs(p.img));
      // this.list = this.list.sort((a, b) => b.data.getDate() - a.data.getDate());
    });
    if (isPlatformBrowser(this.platformID)) {
      this.width = window.innerWidth;
      window.onresize = () => {
        this.width = window.innerWidth;
      };
    }
  }

  trackByFn(item): string {
    return 'carousel-' + this.list.indexOf(item);
  }

  turnUrlSafe(id): string {
    return 'https://www.supercopac.com.br/prom/' + id;
    /* return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.supercopac.com.br%2Fprom%2F
      ${id}&layout=button&size=large&appId=507937906363306&width=121&height=28`); */
  }

  getDate(date: string): string {
    if (date === null) {
      return '';
    }
    const aux = date.split('/');
    return (aux[1].length < 2 ? '0' + aux[1] : aux[1]) + '/' + (aux[0].length < 2 ? '0' + aux[0] : aux[0]) + '/' + aux[2];
  }

  // remove(item) {
  //   this.pService.removeProm(item._id).subscribe(resp => {
  //     if (resp) {
  //       this.openSnack('Sucesso ao excluir promoção!');
  //       this.pService.getProms().subscribe( response => this.list = response);
  //     } else {
  //       this.openSnack('Falha ao excluir promoção!');
  //     }
  //   });
  // }

  share(p?: Prom): void {
    if (p) {
      window.open(
        `http://api.whatsapp.com/send?text=${p.titulo} em oferta no SuperCopac, compre online esse(s) produto(s) em:
        \n https://www.supercopac.com.br/prom/${p._id}`,
        '_blank'
      );
    } else {
      window.open(
        `http://api.whatsapp.com/send?text=Olha essas ofertas do SuperCopac, veja todas em:
        \n https://copac.herokuapp.com/ofertas`,
        '_blank'
      );
    }
  }

  // openSnack(msg: string) {
  //   this.snack.open(msg, null, {duration: 10000});
  // }

  setValue(text: string) {
    this.cartValue = text;
  }

  private updateMetaTags() {
    this.meta.addTag({name: 'description', content: 'Confira as promoções do supermercado copac!'});
    const img1 = 'https://res.cloudinary.com/hcg7pmygp/image/upload/v1611955395/ofertas.png';
    const img2 = 'https://res.cloudinary.com/hcg7pmygp/image/upload/w_400,h_400,c_fill,g_north_west/ofertas.png';
    const title = 'Supermercado Copac - Ofertas';
    const url = 'https://copac.herokuapp.com/ofertas';
    const description = 'Confira as ofertas do Supermercado Copac!';

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'keywords', content: 'Supercopac, Mercado, Supermercado, Promo, Oferta, Promoção, Preço, Baixo, revista, encarte, charqueadas' });
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

  copyMessage(){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = 'Olha essas ofertas do SuperCopac, veja todas em: https://copac.herokuapp.com.br/ofertas';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.showShareBtn = false;
  }

  sharePhone() {
    if (isPlatformBrowser(this.platformID)) {
      let nav: any;
      nav = window.navigator

      if (nav && nav.share) {
        nav.share({
          title: 'Supermercado Copac - Ofertas',
          text: "Olha essas ofertas do SuperCopac, veja todas em: https://copac.herokuapp.com.br/ofertas",
          url: 'https://copac.herokuapp.com.br/ofertas'
        }).then(() => alert('Compartilhado com sucesso!'))
        .catch(error => console.log('Error sharing:' + error));
      } else {
        this.showShareBtn = !this.showShareBtn;
      }
    }
  }

  getValue(text: string) {
    if(text.includes('apenas')) {
      return [text.split('apenas ')[0] + 'apenas ', text.split('apenas ')[1]];
    } else {
      return [text.split('por ')[0] + 'por ', text.split('por ')[1]];
    }
      
  }

  minifyImgs(url: string) {
    if (!url.includes('firebase'))
      return url.replace(url.substr(50,11),'q_auto:low,w_200,c_fill');
    return url;
  }
}
