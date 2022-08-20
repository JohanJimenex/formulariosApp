import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-componentes-basicos',
  templateUrl: './componentes-basicos.component.html'
})
export class ComponentesBasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  //Viene un objeto tipo json con todos los campos del formulario
  @ViewChild('miForm') miForm!: NgForm;

  // guardar(miForm: NgForm) {
  guardar() {

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
