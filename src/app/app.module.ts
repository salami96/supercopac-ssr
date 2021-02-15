import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { IconsModule } from './icons/icons.module';
import { AppRoutingModule } from './routing/app.routing.module';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import * as mask from 'ngx-mask';
import { HomeComponent } from './home/home.component';
import { CartBtnModule } from './cart-btn/cart-btn.module';

export const options: Partial<mask.IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'supercopac-ssr' }),
    CartBtnModule,
    FormsModule,
    HttpClientModule,
    IconsModule,
    mask.NgxMaskModule.forRoot(options),
    TransferHttpCacheModule,
  ],
  providers: [
    AppRoutingModule,
    CartBtnModule,
    IconsModule,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
