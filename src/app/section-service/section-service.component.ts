import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCompass, faRoute, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-service',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './section-service.component.html',
  styleUrl: './section-service.component.css'
})
export class SectionServiceComponent {
  faRoute = faRoute;
  faUsers = faUsers;
  faCompass = faCompass;


  services = [
    {
      icon: this.faRoute,
      title: 'Customizable Tours',
      description: 'Every adventure can be personalized just for you.'
    },
    {
      icon: this.faUsers,
      title: 'Unique Activities',
      description: 'Explore Madeira\'s unique scenery and activities.'
    },
    {
      icon: this.faCompass,
      title: 'Expert Guides',
      description: 'Discover the island\'s secrets with our expert guides.'
    }
  ];
}
