import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interface.pais';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( private activateRoute: ActivatedRoute,
               private paisSvc: PaisService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( ({id}) =>{

      this.paisSvc.VerPais(id)
          .subscribe( pais =>{
            this.pais = pais;            
      });    
    });

  }

}
