import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AccueilComponent } from './accueil/accueil.component';
import { ProblemeComponent } from './probleme/probleme.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TypeProblemeData } from './probleme/typeProbleme-data';
import { TypeProduitService } from './probleme/type-probleme.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProblemeComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TypeProblemeData,{delay: 100})
  ],
  providers: [TypeProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
