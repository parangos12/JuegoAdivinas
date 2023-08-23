import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DatosJugadorServiceService } from '../datos-jugador-service.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';
import { RfinalDialogComponent } from '../rfinal-dialog/rfinal-dialog.component';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
  randomNumber = 0;
  msgRandom = "";

  mensaje1 = ""
  mensaje2 = ""
  namePlayer1 = "";
  namePlayer2 = ""
  nTryPlayer1 = 4
  nTryPlayer2 = 4
  msgResult: string = "";
  
  constructor(private router: Router, private datosJugadorService: DatosJugadorServiceService, public dialog: MatDialog, public dialog2: MatDialog) {
    this.namePlayer1 = this.datosJugadorService.getNombreJugador(0);
    this.namePlayer2 = this.datosJugadorService.getNombreJugador(1)
  }

  dialogAbierto = false;
  numero1:number | undefined;
  numero2: number | undefined;
  value1: string | undefined;
  value2: string | undefined;

  ableRandom = false;
  ablePlayer1 = false;
  ablePlayer2 = true;

  mostrarP1 = false;
  mostrarP2 = false;

  final = false;

  verificar(n: number): string {
    let result="";
    if(n>50 || n<0){
      result = "El número debe estar entre 1 y 50";
    }else if (n === this.randomNumber) {
      result = "Ganaste";
    } else if (n < this.randomNumber) {
      result = "El Número a adivinar es mayor al ingresado";
    } else {
      result = "El Número a adivinar es menor al ingresado";
    }
  return result;
  }

  verificar1(numero: string) {
    this.value2 = "";
    let numberConverted=parseInt(numero);
    this.mensaje1 = this.verificar(numberConverted);
    
    this.nTryPlayer1 = this.nTryPlayer1 - 1;
    this.ablePlayer1 = true;
    this.ablePlayer2 = false;
    this.mostrarP1 = true;
  
  }

  verificar2(numero: string) {
    this.value1 = "";
    let numberConverted1 = parseInt(numero);
    this.mensaje2 = this.verificar(numberConverted1);

    this.nTryPlayer2 = this.nTryPlayer2 - 1;
    this.ablePlayer1 = false;
    this.ablePlayer2 = true;
    this.mostrarP2 = true;
  }
  

  finalMsg(): boolean {
    if (!this.dialogAbierto && this.nTryPlayer1 == 0 && this.nTryPlayer2 == 0) {
      const dialogRef2 = this.dialog2.open(RfinalDialogComponent, {
        width: '500px',
        height: '180px',  
        data: 'Demasiados intentos El número era: ' + this.randomNumber,
      });
      dialogRef2.afterClosed().subscribe(res => {
        if (res) {
          this.resetGame();
          }
      });
      this.dialogAbierto = true;
    } else if (!this.dialogAbierto && this.mensaje1 == "Ganaste") {
      const dialogRef2 = this.dialog2.open(RfinalDialogComponent, {
        width: '500px',
        height: '180px',  
        data: 'El ganador es el jugador #1: ' +this.namePlayer1 + " el número era "+this.randomNumber,
      });
      dialogRef2.afterClosed().subscribe(res => {
        if (res) {
          this.resetGame();
        }
      });
      this.dialogAbierto = true;
    }
    else if (!this.dialogAbierto && this.mensaje2 == "Ganaste") {
      const dialogRef2 = this.dialog2.open(RfinalDialogComponent, {
        width: '500px',
        height: '180px',  
        data: 'El ganador es el jugador #2: ' + this.namePlayer2 + " el número era " + this.randomNumber,
      });
      dialogRef2.afterClosed().subscribe(res => {
        if (res) {
          this.resetGame();}
      });
      this.dialogAbierto = true;
    }
    return this.final;
  }

  resetGame() {
    this.mensaje1 = "";
    this.mensaje2 = "";
    this.randomNumber = 0;
    this.msgRandom = "";
    this.mostrarP1 = false;
    this.mostrarP2 = false;
    this.ableRandom = false;
    this.ablePlayer1 = false;
    this.nTryPlayer1 = 4;
    this.nTryPlayer2 = 4;
    this.value1 = "";
    this.value2 = "";
    this.dialogAbierto = false; // Restablecer que el diálogo está cerrado
  }

  generateRandom() {
    // Genera un número aleatorio entre 1 y 10.
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    this.randomNumber = randomNumber;
    this.ableRandom = true;
    this.msgRandom="El número ha sido generado";
  }

  reset() {
    this.datosJugadorService.jugadores = [];
    this.router.navigate(['/']);
    //Volver a poner todo en cero y a la pagina inicial
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      width: '500px',
      height: '180px',  
      data: 'Que desea hacer?',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.randomNumber=0;
        this.msgRandom = "";
        this.mostrarP1 = false;
        this.mostrarP2 = false;
        this.ableRandom = false;
        this.ablePlayer1 = false;
        this.nTryPlayer1 = 3;
        this.nTryPlayer2 = 3;
      }
    });
  }
  
}
