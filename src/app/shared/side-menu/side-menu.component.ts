import { Component } from '@angular/core';


interface MenuItem {
  texto: string,
  ruta: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

  constructor() { }


  arrTemplateMenuItems: MenuItem[] = [
    { texto: 'Basic', ruta: 'template/basicos' },
    { texto: 'Dinamic', ruta: 'template/dinamicos' },
    { texto: 'Switches', ruta: 'template/switches' },
  ];


  arrReactiveMenuItems: MenuItem[] = [
    { texto: 'Basic', ruta: 'reactivo/basicos' },
    { texto: 'Dinamic', ruta: 'reactivo/dinamicos' },
    { texto: 'Switches', ruta: 'reactivo/switches' },
  ];

  arrValidacionMenuItems: MenuItem[] = [
    { texto: 'Registro', ruta: 'validaciones/registro' },
    { texto: 'Login', ruta: 'validaciones/login' },
  ];


}
