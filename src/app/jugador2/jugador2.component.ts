import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosJugadorServiceService } from '../datos-jugador-service.service';

@Component({
  selector: 'app-jugador2',
  templateUrl: './jugador2.component.html',
  styleUrls: ['./jugador2.component.css']
})
export class Jugador2Component {
  constructor(private router: Router, private datosJugadorService: DatosJugadorServiceService) { }

  toGame(jugadorNombre2:string) {
    this.datosJugadorService.setNombreJugador(jugadorNombre2)
    this.router.navigate(['/juego']);
  }
  backPlayer1() {
    this.router.navigate(['/jugador1']);
  }

}
