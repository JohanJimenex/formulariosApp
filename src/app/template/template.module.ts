import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { ComponentesBasicosComponent } from './componentes-basicos/componentes-basicos.component';
import { ComponentesDinamicosComponent } from './componentes-dinamicos/componentes-dinamicos.component';
import { ComponentesSwitchesComponent } from './componentes-switches/componentes-switches.component';
import { FormsModule } from '@angular/forms';
import { DirectivaPersonalizada } from './directivas/custom-min.directive';


@NgModule({
  declarations: [
    ComponentesBasicosComponent,
    ComponentesDinamicosComponent,
    ComponentesSwitchesComponent,
    DirectivaPersonalizada
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
  ]
})
export class TemplateModule { }
