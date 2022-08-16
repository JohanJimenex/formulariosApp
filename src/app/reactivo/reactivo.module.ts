import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactivoRoutingModule } from './reactivo-routing.module';
import { ComponentesBasicosComponent } from './componentes-basicos/componentes-basicos.component';
import { ComponentesDinamicosComponent } from './componentes-dinamicos/componentes-dinamicos.component';
import { ComponentesSwitchesComponent } from './componentes-switches/componentes-switches.component';


@NgModule({
  declarations: [
    ComponentesBasicosComponent,
    ComponentesDinamicosComponent,
    ComponentesSwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactivoRoutingModule
  ]
})
export class ReactivoModule { }
