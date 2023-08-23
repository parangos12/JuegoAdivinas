import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosJugadorServiceService } from '../datos-jugador-service.service';

@Component({
  selector: 'app-jugador1',
  templateUrl: './jugador1.component.html',
  styleUrls: ['./jugador1.component.css']
})
export class Jugador1Component {

  nombreJugador: string = '';

  constructor(private router: Router, private datosJugadorService: DatosJugadorServiceService) { }
      
  toPlayer2(jugadorNombre1:string) {
    this.datosJugadorService.setNombreJugador(jugadorNombre1)
      this.router.navigate(['/jugador2']);
  }

  toHome() {
    this.router.navigate(['/']);
  }

}
