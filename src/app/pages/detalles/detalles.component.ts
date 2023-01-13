import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{

  id!:string;
  codigo!:string;
  descripcion!:string;
  precompra!:string;
  preventa!:string;
  existencia!:string;

    detalles!: {id:string, codigo:string};
  // id="";

  constructor(private route:ActivatedRoute){ } 

    ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.codigo = String(this.route.snapshot.paramMap.get('codigo'));
  
  }
}
