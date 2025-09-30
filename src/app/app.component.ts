import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectComponent } from "./components/project/project.component";
import { ContactComponent } from "./components/contact/contact.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ExperienceComponent } from "./components/experience/experience.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AboutComponent, ProjectComponent, ContactComponent, SkillsComponent, FooterComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
}
