import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
experiences = [
  {
    role: 'Junior Angular Developer',
    company: 'Eminence Innovation, Gurgaon',
    duration: 'September 2025 – Present',
    description: `Hired as a Junior Angular Developer.
Developing responsive and high-performance web applications using Angular.
Collaborating with cross-functional teams to implement scalable UI solutions and enhance user experience.`
  },
  {
    role: 'Web Developer & SEO Executive',
    company: 'The WalkerMedia, Gurgaon',
    duration: 'June 2025 – September 2025',
    description: `Developed and deployed crazy-betting.com using Angular with a responsive, high-performance interface.
Built and customized WordPress sites for optimal layout and user experience.
Managed blog-style content sites and applied on-page SEO strategies to improve search engine rankings.`
  },
  {
    role: 'Angular Frontend Developer',
    company: 'Chaffer Business Solutions Pvt. Ltd., Lucknow, India',
    duration: 'April 2024 – Dec 2024',
    description: `Designed and developed the complete frontend of the ChafferHub website using Angular 16.
Integrated Firebase for real-time database functionality and implemented secure user authentication using JWT.`
  }
];



}
