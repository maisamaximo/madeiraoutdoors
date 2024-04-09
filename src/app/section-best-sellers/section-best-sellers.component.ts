import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BestSeller {
  title: string;
  rating: number;
  reviewCount: number;
  discount: string;
  price: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-section-best-sellers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-best-sellers.component.html',
  styleUrl: './section-best-sellers.component.css'
})
export class SectionBestSellersComponent {
  bestSellers: BestSeller[] = [
    {
      title: 'Yosemite National Park & Adventure Games (Guided)',
      rating: 4.3,
      reviewCount: 371,
      discount: 'save upto 30% off',
      price: '$213',
      backgroundImage: 'assets/photos/card-1.jpeg'
    },
    {
      title: 'Yosemite National Park & Adventure Games (Guided)',
      rating: 4.3,
      reviewCount: 371,
      discount: 'save upto 30% off',
      price: '$213',
      backgroundImage: 'assets/photos/card-1.jpeg'
    },
    {
      title: 'Yosemite National Park & Adventure Games (Guided)',
      rating: 4.3,
      reviewCount: 371,
      discount: 'save upto 30% off',
      price: '$213',
      backgroundImage: 'assets/photos/card-1.jpeg'
    },
  ];
}
