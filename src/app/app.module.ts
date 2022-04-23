import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { PostsComponent } from './posts/posts.component';
import { DatosjsonComponent } from './datosjson/datosjson.component';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule ],
  declarations: [ AppComponent, ComentariosComponent, PostsComponent, DatosjsonComponent],
  bootstrap:    [ AppComponent ],
  providers: [ConfigService]
})
export class AppModule { }
