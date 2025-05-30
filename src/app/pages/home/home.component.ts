import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticleBgComponent } from '../../components/particle-bg/particle-bg.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParticleBgComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullName = 'Gaurav Kumar';
  displayName = 'Gaurav Kumar';
  title = 'Fintech Full-Stack Architect | Java & Angular Specialist | Digital Payment Solutions Engineer';
  experience = 'Passionate Full-Stack Developer crafting seamless financial experiences at Paynways, where I bridge the gap between innovative payment solutions and robust enterprise architecture. With 1.5 years of hands-on expertise in Java and Angular, I specialize in building secure, scalable fintech applications that transform complex financial workflows into intuitive user experiences.';
  
  companies = [
    'Google',
    'BARCLAYS',
    'Inc.',
    'Microsoft',
    'BUSINESS INSIDER',
    'Entrepreneur',
    'Forbes',
    'AI-BUSINESS'
  ];

  featuredProject = {
    title: 'Food Delivery App',
    period: 'Dec 2021 - Feb 2023',
    // image: '/assets/images/featured-project.jpg'  // Add image path here
  };

  projects = [
    {
      name: 'ExpensoHub',
      description: 'A comprehensive expense tracking and budgeting application',
      imageUrl: '../../../../assets/images/ExpensoHub.png'
    },
    {
      name: 'ChatZap',
      description: 'Real-time messaging platform with modern features',
      imageUrl: 'assets/images/ChatZap.png'
    },
    {
      name: 'EmailPilot',
      description: 'Smart email automation and management system',
      imageUrl: 'assets/images/EmailPilot.png'
    }
  ];

  currentProjectIndex = 0;
  cubeRotation = 0;

  ngOnInit() {
    this.animateName();
    this.rotateCube();
  }

  private rotateCube() {
    setInterval(() => {
      this.cubeRotation = (this.cubeRotation + 120) % 360;
    }, 3000);
  }
  private startProjectSlideshow() {
    setInterval(() => {
      this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    }, 3000); // Change slide every 3 seconds
  }

  private animateName() {
    let index = 0;
    this.displayName = '';
    
    const interval = setInterval(() => {
      if (index < this.fullName.length) {
        this.displayName += this.fullName[index];
        index++;
      } else {
        setTimeout(() => {
          this.displayName = '';
          index = 0;
        }, 1000);
      }
    }, 100);
  }
}