import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './design/footer/footer.component';
import { MainContentComponent } from './design/main-content/main-content.component';
import { NavbarComponent } from './design/navbar/navbar.component';
import { SliderComponent } from './design/slider/slider.component';
import { MainComponent } from './pages/main/main.component';
import { LostComponent } from './pages/lost/lost.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LostComponent,
    MainContentComponent,
    MainComponent,
    NavbarComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
