import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-componentes-basicos',
  templateUrl: './componentes-basicos.component.html'
})
export class ComponentesBasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  //Guardamos la referencia del formulario en la variable miForm
  //Tiene todas las propiedades del form
  @ViewChild('miForm') miForm!: NgForm;

  // guardar(miForm: NgForm) { //otra forma para enviar el form desde el template
  guardar() {

    //Reseteamo los valores del campo precio y existencia
    this.miForm?.resetForm({
      pre: 0,
      exi: 0 
    });

  }

  validarNombreProd(): boolean {
    return this.miForm?.controls['pro']?.invalid
      && this.miForm?.controls['pro']?.touched;
  }

  validarPrecio(): boolean {
    // console.log(this.miForm?.controls['pre']?.value);

    if (this.miForm?.controls['pre']?.value <= 0
      && this.miForm?.controls['pre']?.touched) {
      return true;
    }
    return false;
  }
}
