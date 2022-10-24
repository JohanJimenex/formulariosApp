import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { emailRegEx, nombreYApellidoRegEx, noPuedeSerJohan } from 'src/app/shared/validators/validaciones';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required, Validators.pattern(nombreYApellidoRegEx)]],//variable importadas desde validators/validaciones.ts
      email: ['', [Validators.required, Validators.email, Validators.pattern(emailRegEx)], [this.emailValidatorSvc]],
      // usuario: ['', [Validators.required, noPuedeSerJohan]],//esto es un metodo, validacion personalizada importada de un script.ts
      usuario: ['', [Validators.required, this.vs.validarUsuario],],//esto es un metodo, validacion personalizada importada pero en un servicio y como no tiene parentesis se envia un formcontrol como referencia
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', [Validators.required,]],
    },
    //El formulario tiene su validadores para pode rejecutar validadore spersonalziados
    {
      validators: [this.vs.compararCampos('password', 'confirmarPassword')]
    }
  );

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidatorSvc: EmailValidatorService
  ) { }


  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "nombrePor defecto",
      email: "test1@test.com",
      usuario: "user por defecto",
      password: "123456",
      confirmarPassword: "123456"
    })
  }

  get emailErroMsg(): string {
    const errores = this.miFormulario.get('email')?.errors;

    if (errores?.['required']) { 
      return 'Email es requerido';
    }

    if (errores?.['pattern']) { 
      return 'Formato es incorrecto, viene desde el getter if';
    }

    if (errores?.['emailExiste']) { 
      return 'Correo esxiste, viene desde el getter';
    }

    return '';

  }





  public campoRequerido(campo: string): boolean {
    const campoControl = this.miFormulario.controls[campo];
    return (campoControl.touched && campoControl.invalid) ? true : false
  }

  //otra forma 
  public patronEmailInvalido(): boolean {
    return (this.miFormulario.get('email')?.touched && this.miFormulario.get('email')?.errors?.['pattern'])
  }

  public correoExiste(): boolean {
    const campoControl = this.miFormulario.controls['email'];
    return (campoControl.touched && campoControl.errors?.['emailExiste'])
  }

  public registrarse(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      console.log("es invalido");
    }
  }

}     