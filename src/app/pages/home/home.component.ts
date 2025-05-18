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
  title = 'Professional Web3/Blockchain Developer - Play2Earn Games';
  experience = '12 years being a professional tech/engineer (10 years in tech leadership), transitioned from a Distributed Computing (VoIP) Engineer to a Decentralized/Blockchain Leader with the ability to recruit the finest engineering talent from all over the world.';
  
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

  ngOnInit() {
    this.animateName();
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