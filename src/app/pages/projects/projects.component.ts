import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  name: string;
  period: string;
  location: string;
  role: string;
  description: string;
  languages: string[];
  tools: string[];
  frameworks: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 'gamefied',
      name: 'Gamefied',
      period: 'Dec 2021 - Feb 2023',
      location: 'United States',
      role: 'Head of Blockchain Development',
      description: 'The web3 gaming guild management platform is designed to address the needs of gaming communities by providing a comprehensive solution for managing and organizing gaming guilds in the context of the evolving web3 ecosystem. With the rise of blockchain technology and the integration of NFTs (Non-Fungible Tokens), gaming guilds are seeking innovative tools and platforms that enable seamless management of members, assets, and activities.',
      languages: ['JavaScript/Node', 'C#', 'Java', 'Golang'],
      tools: ['Algolia', 'GraphQL', 'Airtable', 'Zapier'],
      frameworks: ['Next.js', 'React Native', 'Tailwind CSS']
    },
    {
      id: 'jovi',
      name: 'JOVI',
      period: 'Jan 2021 - Nov 2021',
      location: 'Remote',
      role: 'Senior Blockchain Developer',
      description: 'Developed smart contracts and DeFi protocols...',
      languages: ['Solidity', 'TypeScript', 'Python'],
      tools: ['Hardhat', 'Truffle', 'Web3.js'],
      frameworks: ['React', 'Node.js', 'Express']
    },
    // Add more projects as needed
  ];

  selectedProject: Project = this.projects[0];

  selectProject(project: Project) {
    this.selectedProject = project;
  }
}