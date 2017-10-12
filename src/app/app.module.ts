import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent
  ],
  imports: [
  	BrowserModule,
  	MDBBootstrapModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { 
}
