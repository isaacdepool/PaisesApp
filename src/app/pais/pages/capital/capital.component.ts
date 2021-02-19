import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/interface.pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent {

  termino: string = 'Hola mundo';
  error: boolean = false;
  paises: Country[] = [];

  constructor( private paisSvc: PaisService) { }

  buscarCapital( termino :string ){
    
    this.termino = termino;
    this.error = false;
    console.log(this.termino);

    this.paisSvc.buscarCapital(this.termino)
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
