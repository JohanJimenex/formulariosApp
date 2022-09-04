import { Component, OnInit } from '@angular/core';


interface Persona {
  nombre: string,
  favoritos: Favoritos[]
}

interface Favoritos {
  id: number,
  nombre: string

}

@Component({
  selector: 'app-componentes-dinamicos',
  templateUrl: './componentes-dinamicos.component.html',

})
export class ComponentesDinamicosComponent {

  personas: Persona[] = [];

  persona: Persona = {
    nombre: 'Johan',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gear'
      },
      {
        id: 2,
        nombre: 'Super Mario 64'
      }
    ]
  }

  favorito: Favoritos = {
    id: 0,
    nombre: ''
  }

  guardar(): void {
    console.log('klk');
  }

  eliminar(item: Favoritos): void {
    let i = this.persona.favoritos.indexOf(item);

    this.persona.favoritos.splice(i, 1);

  }

  agregar(): void {
    this.favorito.id = this.persona.favoritos.length + 1
    this.persona.favoritos.push(this.favorito);

    this.favorito = { id: 0, nombre: '' }
  }
}
