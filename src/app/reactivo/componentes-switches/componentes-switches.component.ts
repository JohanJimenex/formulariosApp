import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-componentes-switches',
  templateUrl: './componentes-switches.component.html',
})
export class ComponentesSwitchesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //esto funciona por que tienen el mismo nombre en la clave
    //y porque ya existen las propiedas, sino no funciona

    // this.miForm.setValue(this.persona)

    //Pero con reset si funciona, solo toma los valores dichos
    this.miForm.reset(this.persona);

    //para aplicar los cambios en vivo con un obersvable
    this.miForm.valueChanges.subscribe(({ condiciones, ...rest }) => {
      // this.persona.genero = this.miForm.controls['genero'].value;
      // this.persona.notificaciones = this.miForm.controls['notidicaciones'].value;

      //otra forma si solo recibimos el form como parametros
      // const formCopy = { ...form }//operador spreed... para crear una copia y no una referencia
      // delete formCopy.condiciones; //esto elimina una propiedad de un objeto

      //otra forma
      this.persona = rest;

    })

    //tambien podemos subscribirnos a un cmapos especifico
    this.miForm.controls['notificaciones'].valueChanges.subscribe((campo: any) => {
      console.log(campo);
    })
  }

  persona = {
    genero: 'M',
    notificaciones: true
  }

  miForm: FormGroup = this.fb.group({
    // genero: [this.persona.genero, [Validators.required]],
    genero: ['F', [Validators.required]],
    notificaciones: [false, [Validators.required]],
    condiciones: [false, Validators.requiredTrue]

  })

  guardar() {

    // this.persona.genero = this.miForm.controls['genero'].value;
    // this.persona.notificaciones = this.miForm.controls['notidicaciones'].value;

    //otra forma
    const formCopy = { ...this.miForm.value }; //operador spreed... para crear una copia y no una referencia
    delete formCopy.condiciones; //esto elimina una propiedad de un objeto
    this.persona = formCopy;


  }


}
