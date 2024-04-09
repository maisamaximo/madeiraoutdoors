import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-our-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-our-experiences.component.html',
  styleUrl: './section-our-experiences.component.css'
})
export class SectionOurExperiencesComponent {
  experiences = [
    {
      title: 'Canyoning',
      description: 'A brief description of the experience package.',
      imageClass: 'card-1'
    },
    {
      title: 'Hiking',
      description: 'A brief description of the experience package.',
      imageClass: 'card-2'
    },
    {
      title: 'Paragliding',
      description: 'A brief description of the experience package.',
      imageClass: 'card-3'
    },
    {
      title: 'Whales Watching',
      description: 'A brief description of the experience package.',
      imageClass: 'card-4'
    }
  ];
}
