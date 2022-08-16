import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateModule } from './template/template.module';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
  },
  {
    path: 'reactivo',
    loadChildren: () => import('./reactivo/reactivo.module').then(m => m.ReactivoModule)
  },
  {
    path:'**',
    redirectTo:'template'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TemplateModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
