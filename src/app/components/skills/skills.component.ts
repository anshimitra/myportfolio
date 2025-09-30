import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit{
skills = [
    { name: 'Angular', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'TailwindCSS', level: 80 }
  ];

  ngAfterViewInit() {
    gsap.from('.skill-bar', { width: 0, duration: 1, stagger: 0.3 });
  }
}
