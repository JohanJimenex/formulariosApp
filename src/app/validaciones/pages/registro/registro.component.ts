import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  noPuedeSerJohan(control: FormControl) {

    if (control.value.trim().toLowerCase() == 'johan') {
      return {
        error: true
      }
    }
    return null;

  }

  //expresion regular, acepta nombre de la A a la Z mas cualqueir valor 
  nombreYApellidoRegEx: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailRegEx: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required, Validators.pattern(this.nombreYApellidoRegEx)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailRegEx)]],
      usuario: ['', [Validators.required, this.noPuedeSerJohan]],
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