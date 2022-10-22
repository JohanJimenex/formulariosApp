import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailRegEx, nombreYApellidoRegEx, noPuedeSerJohan } from 'src/app/shared/validators/validaciones';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private fb: FormBuilder, private vs: ValidatorService) { }

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required, Validators.pattern(nombreYApellidoRegEx)]],//variable importadas desde validators/validaciones.ts
      email: ['', [Validators.required, Validators.email, Validators.pattern(emailRegEx)]],
      // usuario: ['', [Validators.required, noPuedeSerJohan]],//esto es un metodo, validacion personalizada importada de un script.ts
      usuario: ['', [Validators.required, this.vs.validarUsuario]],//esto es un metodo, validacion personalizada importada pero en un servicio y como no tiene parentesis se envia un formcontrol 
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', [Validators.required,]],
    },
    
    {
      validators: [this.vs.compararCampos('password', 'confirmarPassword')]
    }
  );

  elCampoEsValido(campo: string): boolean {
    const campoControl = this.miFormulario.controls[campo];
    return (campoControl.touched && campoControl.invalid) ? true : false
  }

  registrarse(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      console.log("es invalido");
    }
  }

}     