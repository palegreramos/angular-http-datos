import { Component} from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  visibleComments=false;
  visiblePosts=false;
  title = 'http-get';
  datos; 
  url: string = 'https://jsonplaceholder.typicode.com/';
  error;
  foto;
  alt;
  constructor(private http: HttpClient) { }  

  ngOnInit() {  
    let num:number=Math.floor(Math.random() * 5000);

   this.http.get<any>(`${this.url}photos?id=${num}`).subscribe(foto => {
       this.foto="https://picsum.photos/200/300?random=2";
       this.alt=`${foto[0].id} - ${foto[0].title}`;
    },error => this.error = error);

  }

  verComments() { 
 this.http.get<any>(`${this.url}comments`).subscribe(data => {
       this.datos=data;
       this.visibleComments=!this.visibleComments;
    },error => this.error = error);
    console.log(this.datos);
    
  }
verPosts() { 
 this.http.get<any>(`${this.url}posts`).subscribe(data => {
       this.datos=data;
        this.visiblePosts=!this.visiblePosts;
    },error => this.error = error);
    console.log(this.datos);
    
  }
 






}
