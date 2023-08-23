import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  start() {
    this.router.navigate(['/jugador1']);
  }

  options: AnimationOptions = {
    path:'../../assets/img/animation_llim5zoa.json',
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
