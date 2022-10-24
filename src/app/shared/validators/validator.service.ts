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

  //Valdiacion personalizada, Va dentor del validator, con retornar un objeto es suficinete para que se dispare el error en el control
  // esto se llama en el validator [] del cformControl
  public validarUsuario(control: FormControl): ValidationErrors | null {

    if (control.value.trim().toLowerCase() == 'johan') {
      return { error: true }
    }
    return null;
  }

  public compararCampos(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const valor1 = formGroup.get(campo1)?.value;
      const valor2 = formGroup.get(campo2)?.value;
      
      if (valor1 != valor2) {
        formGroup.get(campo2)?.setErrors({ error: true })
        return { noEsIgual: true }
      }

      if (valor1 == valor2) {
        formGroup.get(campo2)?.setErrors(null);
      }
      
      return null;
    }
  }
}
