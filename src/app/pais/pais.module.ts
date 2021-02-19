import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CapitalComponent } from './pages/capital/capital.component';
import { PaisComponent } from './pages/pais/pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RegionComponent } from './pages/region/region.component';
import { RouterModule } from '@angular/router';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';



@NgModule({
  declarations: [
    CapitalComponent, 
    PaisComponent, 
    VerPaisComponent, 
    RegionComponent, 
    PaisTablaComponent,
    PaisInputComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CapitalComponent, 
    PaisComponent, 
    VerPaisComponent, 
    RegionComponent
  ]
})
export class PaisModule { }
