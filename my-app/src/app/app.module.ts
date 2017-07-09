import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { NavComponent } from "./navigation/nav.component";
import { HeroService } from "./hero.service";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [NavComponent]
})
export class AppModule { }
