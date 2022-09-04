import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-componentes-dinamicos',
  templateUrl: './componentes-dinamicos.component.html'
})
export class ComponentesDinamicosComponent implements OnInit {

  constructor(private miFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    // for (let item of this.miArrPersonas) {

    //   this.arrFavoritos.controls.push(
    //     new FormControl(item.nombre, Validators.required)
    //   )
    // }

    //esto solo funciona si las propiedades ya estan definidas
    // this.miForm.setValue(this.miData);

    this.miForm.reset(this.miData);

  }

  // miArrPersonas: any[] = [
  //   { nombre: 'uno' },
  //   { nombre: 'dos' },
  //   { nombre: 'tres' },

  // ]

  miData = {
    nombreProducto: 'johan',
    // agregar: '', si se usa el .reset(x) no obliga a usar esta propiedad 
    juegosFavoritos: [
      'sonic',
      'pokemon',
      'dos'
    ]

  }


  get arrFavoritos() {
    return this.miForm.controls['juegosFavoritos'] as FormArray;
    //otras formas
    // return this.miForm.get('juegosFavoritos')?.value ;
    // var x = this.miForm.get('juegosFavoritos') as FormArray;
    // return x.value;
  }


  miForm: FormGroup = this.miFormBuilder.group({
    //otra forma 'deprecada'
    // nombreProducto: this.miFormBuilder.control('valor por defecto', [Validators.required]),
    nombreProducto: ['default', [Validators.required, Validators.minLength(3)]],
    agregar: ['game name'],

    //Cuando hay varios inputs que comparten el mismo formControlName 
    //Se usa este metodo con arreglos, RECORDANDO que los valores por defecto
    // se controlan desde el typescript conbinado con el atributo formArrayName='' en el html
    juegosFavoritos: this.miFormBuilder.array(
      //  el 1er parametros es un arreglo de formControls
      [
        ['Mario', Validators.required],
        ['Metal Gear']
      ],
      //Esta validacion es para el formArrayName padre,
      //eje: debe ser requerido y minimo 2 elementos
      [Validators.required, Validators.minLength(2)]
    )
  })

  // ojo esto no existe dentro del formGroup miForm declarado como atributo en la etiqueta form
  // se debe utilizar el atributo [formControl]='agregarFavorito' en el input
  agregarFavorito: FormControl = new FormControl(
    'test', [Validators.required]
  )



  agregar() {

    if (this.agregarFavorito.invalid) {
      return;
    }

    // OTra forma
    // this.arrFavoritos
    //   .push(new FormControl(this.agregarFavorito.value, Validators.required))

    //Con formBuilder:
    this.arrFavoritos
      .push(this.miFormBuilder.control(this.agregarFavorito.value, Validators.required))

    this.agregarFavorito.reset();
  }

  guardar() {
    if (this.miForm.invalid) {
      this.miForm.markAllAsTouched();
      return;
    }
    console.log(this.miForm.value);
  }

  validarCampo(campoAValidar: string): boolean {

    const form = this.miForm.controls[campoAValidar];

    return (form.errors && form.touched) ? true : false;
  }

  eliminar(index: number) {
    this.arrFavoritos.removeAt(index)
  }
}
