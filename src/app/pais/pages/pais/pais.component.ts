import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interface.pais';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PaisComponent  {

  termino: string = '';
  error: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias = false;

  constructor( private paisSvc: PaisService) { }

  buscar( termino :string ){
    this.termino = termino;
    this.error = false;

    this.paisSvc.buscarPais(this.termino) 
      .subscribe( resp =>{
        
        this.paises = resp;

      }, (err) =>{
         this.error = true;
         this.paises = [];
      });
    
  }

  sugerencias( termino:string ){
    this.error = false;
    this.mostrarSugerencias = true;

    this.termino = termino;

    this.paisSvc.buscarPais(termino)
      .subscribe( resp =>{
        this.paisesSugeridos = resp.splice(0, 3);
      }, err => {
        this.paisesSugeridos = []
      }); 

  }

  buscarSugeridos( termino: string){
    this.buscar(termino);
    this.mostrarSugerencias = false;
    this.paisesSugeridos = [];
  }

}
