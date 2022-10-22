import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidacionesRoutingModule } from './validaciones-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    ValidacionesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    

  ]
})
export class ValidacionesModule { }
