import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-componentes-basicos',
  templateUrl: './componentes-basicos.component.html',
})
export class ComponentesBasicosComponent implements OnInit {

  ngOnInit(): void {
    // this.miForm.setValue({
    //   nombreProducto: 'valor por defecto',
    //   precio: 1,
    //   existencias: 2
    // })
  }

  //Si queremos solo un input, o separado, el input debe tener el atributo formContrl
  // nombreProducto: FormControl = new FormControl('wii');


  //Forma 1 para trabajar con formulario reactivos:
  // miForm: FormGroup = new FormGroup({
  //   //Esta propiedad debe ser igual al del input en el atributo formControlName

  //   nombreProducto: new FormControl('Macbook pro', [Validators.required, Validators.minLength(3)]),
  //   precio: new FormControl('0.00'),
  //   existencias: new FormControl(5)
  // });

  //Este servicio nos permite trabajar mas comodo con formularios
  //que tienen muchos campos.
  constructor(private miFormBuilder: FormBuilder) { }

  miForm: FormGroup = this.miFormBuilder.group({
    //El arreglo recibe varios params: 
    //1, valor del campo por defecto
    //2 validadores sincronos, ej: cuando presiona una tecla,
    //3 funcion Asincrona (validar en la  base de datos si existe ese usuario)

    nombreProducto: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0.00, [Validators.required, Validators.min(0)]],
    existencias: [0.00, [Validators.required, Validators.min(0)]],

  });

  validarCampo(campoAValidar: string): boolean {
    return (this.miForm.controls[campoAValidar].errors && this.miForm.controls['nombreProducto'].touched) ? true : false;
  }

  guardar() {

    if (this.miForm.invalid) {
      this.miForm.markAllAsTouched();
      return;
    }

    console.log(this.miForm.value);
    this.miForm.reset();

  }


}
