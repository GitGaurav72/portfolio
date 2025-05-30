import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'fab fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'fab fa-github' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'fab fa-twitter' }
  ];

  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;

  onSubmit() {
    // Replace these with your actual EmailJS IDs
    const serviceID = 'service_ahd4nik';
    const templateID = 'template_4h0v8h6';
    const userID = 'd943yTenf6IvOucRN';

    emailjs.send(serviceID, templateID, {
      from_name: this.name,
      from_email: this.email,
      message: this.message
    }, userID)
    .then(response => {
      console.log('Success!', response.status, response.text);
      this.submitted = true;
      // Optionally reset form fields
      this.name = '';
      this.email = '';
      this.message = '';
    }, error => {
      console.log('Failed', error);
    });
  }
}