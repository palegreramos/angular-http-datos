import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-datosjson',
  templateUrl: './datosjson.component.html',
  styleUrls: ['./datosjson.component.css']
})
export class DatosjsonComponent implements OnInit {

@Input() datos;

  constructor() { }

  ngOnInit() {
  }

}