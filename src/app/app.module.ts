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
import { CartModule } from './cart/cart.module';
import { CartBtnComponent } from './cart/cart-btn/cart-btn.component';

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
    CartModule,
    FormsModule,
    HttpClientModule,
    IconsModule,
    mask.NgxMaskModule.forRoot(options),
    TransferHttpCacheModule,
  ],
  providers: [
    AppRoutingModule,
    CartModule,
    IconsModule,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
