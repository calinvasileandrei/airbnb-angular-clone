import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { HeaderComponent } from './header/header.component';
import { AlertTextComponent } from './alert-text/alert-text.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { InlinecardComponent } from './inlinecard/inlinecard.component';
import { ListdestinationsComponent } from './listdestinations/listdestinations.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    HeaderComponent,
    AlertTextComponent,
    SearchbarComponent,
    InlinecardComponent,
    ListdestinationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
