import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [NgIf],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
  {
  title: 'Crazy Betting',
  desc: 'A full-featured sports betting platform built using Angular 19. Features include live odds, user account management, real-time updates, and responsive UI for seamless betting experience on both desktop and mobile.',
  image: 'assets/images/project1.png',
  github: '',  // Private / not available
  live: 'https://www.crazy-betting.com/'
}
,
   {
    title: 'Autonomous Universal PMS',
    desc: 'A comprehensive project management system developed for task scheduling, resource allocation, and reporting. This was a client project (code not available).',
    image: 'assets/images/project2.png',  // use a placeholder image
    github: '',  // no code available
    live: ''     // no live demo
  },
  {
    title: 'NGO Website',
    desc: 'Developed a responsive website for an NGO to manage events, donations, and campaigns.',
    image: 'assets/images/project3.png',
    github: 'https://github.com/yourusername/ngo-website',
    live: 'https://ngo-website.example.com'
  },
  // {
  //   title: 'Employee Attendance Dashboard',
  //   desc: 'A dashboard system for tracking employee attendance, leave, and performance metrics. This was a client project (code not available).',
  //   image: '',  // use a placeholder image
  //   github: '',
  //   live: ''
  // }
  ];
}
