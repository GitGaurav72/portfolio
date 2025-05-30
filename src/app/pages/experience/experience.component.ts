import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      period: 'feb-2024 — PRESENT',
      title: 'Software Engineer',
      company: 'PayNways',
      description: 'I have modernized legacy systems by upgrading Java applications (Java 8 to 17, JBoss 7.4 to 8), improving performance by 30% and compatibility. I integrated Ping Federate SSO to secure and streamline authentication for 5+ banking apps, reducing authentication time by 40%. My work included robust transaction processing for encrypted/decrypted ISO 8583 messages, achieving 90% size reduction in storage, and integrating SonarQube to maintain 82% code coverage and zero critical vulnerabilities. I also blended Thales HSM for secure PIN generation, meeting PCI DSS standards, which strengthened my ability to design and implement secure fintech solutions for the banking sector.',
      skills: ['Java 8', 'Microservices', 'Kafka', 'Angular', 'SSO', 'OAuth', 'REST APIs', 'Web Accessibility', 'Git', 'GitHub', 'Jira', 'Jenkins', 'AWS', 'Thales HSM', 'Ping Federate', 'SonarQube', 'Jira', 'Jenkins', 'AWS', 'Thales HSM', 'Ping Federate', 'SonarQube']
    },
    {
      period: 'Jan-2023 — July-2023',
      title: 'Sofware Engineer Intern',
      company: 'Merithub Technologies',
      roles: [],
      description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
      skills: ['Java', 'JavaScript', 'HTML & SCSS', 'Go', 'Docker', 'Wasabi', 'AWS(EC2)', 'Git']
    }
  ];

  education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'NIT Kurukshetra',
      period: '2020 — 2023'
    },
    {
      degree: 'Bachelor of Science (BSc)',
      institution: 'Magadh University Bodh Gaya',
      period: '2015 — 2018'
    }
  ];

  resumeUrl = 'assets/resume.pdf';
}