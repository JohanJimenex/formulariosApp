import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }


  // en esta funcion viene el formControl cuando se llame desde los validarots Asyncronos 
  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

    let urlBase: string = 'http://localhost:3000'

    console.log(control);

    let query: string = control.value;

    return this.http.get<any[]>(`${urlBase}/usuarios?q=${query}`)
      .pipe(
        delay(1000), //un delay de 3 segundos para simular la espera asincrona ya que esta muy rapido
        // usamos el pipe .map() para retornar algo diferente que queramos ya que nos interesa solo saber si retorna algo
        //por defecto retornará el arreglo que venga desde la petición y funcioona, pero es mejor devovler algo mas claro
        map(
          (resp: any[]) => {
            return (resp.length === 0) ? null : { emailExiste: true }
          })
      )

  }








}
