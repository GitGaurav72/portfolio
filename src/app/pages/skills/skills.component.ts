import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    percentage: number;
  }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Backend Development',
      skills: [
        { name: 'Java', percentage: 95 },
        { name: 'Spring Boot', percentage: 90 },
        { name: 'Spring Security', percentage: 85 }
      ]
    },
    {
      name: 'Frontend Development',
      skills: [
        { name: 'Angular', percentage: 88 },
        { name: 'TypeScript', percentage: 85 },
        { name: 'HTML/CSS', percentage: 90 }
      ]
    },
    {
      name: 'Database & Tools',
      skills: [
        { name: 'MongoDB', percentage: 85 },
        { name: 'Git', percentage: 92 },
        { name: 'REST API', percentage: 90 }
      ]
    }
  ];
}