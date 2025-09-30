import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit{
  ngAfterViewInit() {
    gsap.from('.hero-text', { y: -50, opacity: 0, duration: 1 });
    gsap.from('.hero-btn', { scale: 0, opacity: 0, duration: 0.8, delay: 0.5 });
  }
}
