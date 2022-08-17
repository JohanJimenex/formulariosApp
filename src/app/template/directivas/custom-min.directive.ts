import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    //En el selector le decimos los atributos que debe tene le la etiqueta html para que sea llamada esta directiva.
    selector: '[DirectiPersonali] [ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: DirectivaPersonalizada,
        multi: true
    }]
})
export class DirectivaPersonalizada implements Validator {

    constructor() { }

    @Input() valorMinimo!: number;

    validate(control: FormControl) {
        const valorIngresado = control.value;

        //Si el valor ingresado es menor a valorMinimo inyectamos un objeto que se agrega
        //a la propiedad de 'errors' en el FormControl. 
        //para ser manejado desde el FormControl del input, de lo contrario enviamos null
        return (valorIngresado < this.valorMinimo) ? { 'minimo': true } : null;
    }
}

