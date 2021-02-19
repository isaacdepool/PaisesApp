import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interface.pais';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent  {

  termino: string = 'Hola mundo';
  error: boolean = false;
  paises: Country[] = [];

  constructor( private paisSvc: PaisService) { }

  buscar( termino :string ){
    this.termino = termino;
    this.error = false;
    console.log(this.termino);

    this.paisSvc.buscarPais(this.termino)
      .subscribe( resp =>{
        
        this.paises = resp;

      }, (err) =>{
         this.error = true;
         this.paises = [];
      });
    
  }

  sugerencias( event:any ){
    this.error = false;
  }

}
