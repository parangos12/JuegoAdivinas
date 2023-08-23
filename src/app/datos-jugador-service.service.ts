import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosJugadorServiceService {

  jugadores: string[] = [];

  private nombreJugador: string = '';
  
  setNombreJugador(nombre: string) {
    this.jugadores.push(nombre);
    //this.nombreJugador = nombre;
  }
  getNombreJugador(i:number): string {
    return this.jugadores[i];
  }
}
