import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesBasicosComponent } from './componentes-basicos/componentes-basicos.component';
import { ComponentesDinamicosComponent } from './componentes-dinamicos/componentes-dinamicos.component';
import { ComponentesSwitchesComponent } from './componentes-switches/componentes-switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basicos',
        component: ComponentesBasicosComponent
      },
      {
        path: 'dinamicos',
        component: ComponentesDinamicosComponent
      },
      {
        path: 'switches',
        component: ComponentesSwitchesComponent
      }, 
      {
        path: '**',
        redirectTo:'basicops'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
