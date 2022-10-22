import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  //expresion regular, acepta nombre de la A a la Z mas cualqueir valor 
  public nombreYApellidoRegEx: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailRegEx: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  //Valdiacion personalizada, Va dentor del validator, 
  public validarUsuario(control: FormControl): ValidationErrors | null {

    if (control.value.trim().toLowerCase() == 'johan') {
      return { error: true }
    }
    return null;
  }

  public compararCampos(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get('password')?.value;
      const pass2 = formGroup.get('confirmarPassword')?.value;

      if (pass1 != pass2) {
        formGroup.get('confirmarPassword')?.setErrors({ error: true })
        return { noEsIgual: true }
      }

      if (pass1 == pass2) {
        formGroup.get('confirmarPassword')?.setErrors(null);
      }

      return null;
    }
  }
}
