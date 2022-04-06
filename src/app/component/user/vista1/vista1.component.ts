import { Component, OnInit } from '@angular/core';
import { Vista1I } from 'src/app/models/Vista1';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component implements OnInit {
  
  public vehiculos:Vista1I[] = []
  constructor() { 
    this.vehiculos = [
      {
        id:1,
        marca: 'Chevrolet',
        modelo: 'Chevrolet Joy Sedán',
        precio: '49.490.000',
      },
      {
        id:2,
        marca: 'Renault',
        modelo: 'KWID',
        precio: '43.400.000',
      },
      {
        id:3,
        marca: 'BMW',
        modelo: 'BMW iX',
        precio: '419.900.000',
      }
    ]
  }
  ngOnInit(): void {
  }

}
