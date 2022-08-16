import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-componentes-basicos',
  templateUrl: './componentes-basicos.component.html'
})
export class ComponentesBasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Viene un objeto tipo json con todos los campos del formulario
  @ViewChild('miForm') miForm!: NgForm;

  // guardar(miForm: NgForm) {
  guardar() {
    // console.log(this.miForm.value);
  }

  validarCampos():boolean | null {
    console.log(this.miForm?.valid);

    return !this.miForm?.valid && this.miForm?.touched;
  }
}
