import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JuegoComponent } from './juego/juego.component';
import { Jugador2Component } from './jugador2/jugador2.component';
import { Jugador1Component } from './jugador1/jugador1.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Export this function
export function playerFactory(): any {
  return import('lottie-web');
}

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { RfinalDialogComponent } from './rfinal-dialog/rfinal-dialog.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'juego', component: JuegoComponent},
  {path: 'jugador1', component: Jugador1Component},
  {path: 'jugador2', component: Jugador2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JuegoComponent,
    Jugador2Component,
    Jugador1Component,
    ResultDialogComponent,
    RfinalDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
