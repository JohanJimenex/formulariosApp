import { FormControl, ValidationErrors } from "@angular/forms";

//expresion regular, acepta nombre de la A a la Z mas cualqueir valor 
export const nombreYApellidoRegEx: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailRegEx: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

//Valdiacion personalizada, Va dentor del validator, 
export function noPuedeSerJohan(control: FormControl): ValidationErrors | null {

    if (control.value.trim().toLowerCase() == 'johan') {
        return { error: true }
    }

    return null;

}