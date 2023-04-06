import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterventionComponent } from './intervention/intervention.component';
import { HomeComponent } from './home/home.component';
import { ListInterventionComponent } from './list-intervention/list-intervention.component';
import { HeaderComponent } from './header/header.component';
import { NvInterventionComponent } from './nv-intervention/nv-intervention.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InterventionComponent,
    HomeComponent,
    ListInterventionComponent,
    HeaderComponent,
    NvInterventionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
