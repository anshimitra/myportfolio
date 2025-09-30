import { Component } from '@angular/core';
import * as emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  sendEmail(e: Event) {
    e.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_m5exdus', 'template_g2c5lvh', e.target as HTMLFormElement, 'BZOnQN4fIgoS_UaVn')
      .then((result) => { // Remove EmailJSResponseStatus
        alert('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      }, (error) => {
        alert('Failed to send message: ' + JSON.stringify(error));
      });
  }
}
