import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { IconsModule } from './icons/icons.module';
import { AppRoutingModule } from './routing/app.routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'supercopac-ssr' }),
    FormsModule,
    HttpClientModule,
    IconsModule,
    TransferHttpCacheModule,
  ],
  providers: [
    AppRoutingModule,
    IconsModule,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
