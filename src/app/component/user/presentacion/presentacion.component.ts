import { Component, OnInit } from '@angular/core';
import { PresentacionI } from 'src/app/models/Presentacion';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  public users:PresentacionI[] = []
  constructor() { 
    this.users = [
      {
        id: 1,
        nombres: 'Jose',
        apellidos: 'Ocampo',
        codigo: '0181420044',
        semestre: '9'
      }
    ]
  }

  ngOnInit(): void {
  }

}
