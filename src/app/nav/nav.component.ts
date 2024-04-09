import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  imports: [FontAwesomeModule, NgbDropdownModule, CommonModule]
})
export class NavComponent {
  faInstagram = faInstagram;

  isScrolled = false;
  isExpanded = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Defina um valor limite para quando deseja que o navbar mude de estilo
    const limit = 50;
    this.isScrolled = window.scrollY > limit;
  }

  toggleMenu() { // Chame essa função ao clicar no botão de alternância do menu
    this.isExpanded = !this.isExpanded;
  }
}
