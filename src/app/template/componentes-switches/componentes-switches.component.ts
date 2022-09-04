import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes-switches',
  templateUrl: './componentes-switches.component.html'
})
export class ComponentesSwitchesComponent {

  persona: any = {
    genero: '',
    notificaciones: true
  }
  terminosCondiciones: boolean = true;

}
