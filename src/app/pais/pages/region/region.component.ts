import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interface.pais';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class RegionComponent implements OnInit {

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = '';
  paises:Country[] = [];

  constructor( private paisSvc: PaisService) { }

  ngOnInit(): void {
  }

  activarRegion( region: string ){

    if( region == this.regionActiva){
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisSvc.buscarRegion(region)
      .subscribe( resp =>{
        this.paises = resp;        
      });
  }

  getClassCss( region: string ){
    return ( region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

}
