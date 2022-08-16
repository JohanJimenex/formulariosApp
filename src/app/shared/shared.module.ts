import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ReactivoModule } from '../reactivo/reactivo.module';
import { TemplateModule } from '../template/template.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // TemplateModule, 
    // ReactivoModule,

  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
