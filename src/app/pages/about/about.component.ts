import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

interface Skill {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  pdfUrl: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer) {
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/resume.pdf');
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'Gaurav_Kumar_Resume.pdf';
    link.click();
  }
  skills: Skill[] = [
    {
      icon: '🚀',
      title: 'Rapid Prototyping & MVP',
      description: 'From concept, ideation and prototyping to MVP, testing and launching technology enabled business is in my DNA.'
    },
    {
      icon: '⚡',
      title: 'Full Stack Development',
      description: 'Over the years, I\'ve specialized in all areas of the stack, Front-End to Back-End, DevOps and Infrastructure, at scale.'
    },
    {
      icon: '💡',
      title: 'Business Model Innovation',
      description: 'With deep experience of SaaS, Cloud, Telecoms, Financial Services, I help in developing the right business model, through experimentation and iteration.'
    },
    {
      icon: '☁️',
      title: 'FinOps / Serverless / Cloud Native',
      description: 'As an early adopter and advocate of Cloud, I use leading-edge tools, services and techniques to give businesses major advantage in time to market and TCO.'
    }
  ];

  techStack = {
    languages: ['JavaScript/Node', 'C#', 'Java', 'Golang'],
    frameworks: ['SpringBoot', 'AWS Amplify', 'Furnace Framework', 'React', 'Gatsby', 'Next.js', 'React Native', 'Xamarin', 'Tailwind CSS', 'Grommet'],
    devOps: ['Github', 'Docker', 'Kubernetes', 'Ansible', 'Terraform', 'Pulumi', 'Gitlab', 'Jenkins', 'Circle CI'],
    tools: ['Sanity CMS', 'Algolia', 'GraphQL', 'Airtable', 'Zapier'],
    platforms: ['Amazon Web Services (Lambda, DynamoDB)', 'GCP', 'Kinesis', 'S3', 'API Gateway', 'EC2/Fargate', 'Microsoft Azure', 'Google Cloud Platform']
  };
}
