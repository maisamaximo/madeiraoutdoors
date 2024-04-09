import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Testimonial {
  text: string;
  author: string;
  country: string;
  imageUrl: string;
}

@Component({
  selector: 'app-section-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-testimonials.component.html',
  styleUrl: './section-testimonials.component.css'
})
export class SectionTestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      text: 'The hiking tour organized by Madeira Outdoors was simply breathtaking. The guides were knowledgeable and ensured we all had a safe yet thrilling experience. Can\'t wait to go back!',
      author: 'Jon Rundle',
      country: 'United States',
      imageUrl: 'path-to-author-photo.jpg'
    },
    {
      text: 'The hiking tour organized by Madeira Outdoors was simply breathtaking. The guides were knowledgeable and ensured we all had a safe yet thrilling experience. Can\'t wait to go back!',
      author: 'Jon Rundle',
      country: 'United States',
      imageUrl: 'path-to-author-photo.jpg'
    },
    {
      text: 'The hiking tour organized by Madeira Outdoors was simply breathtaking. The guides were knowledgeable and ensured we all had a safe yet thrilling experience. Can\'t wait to go back!',
      author: 'Jon Rundle',
      country: 'United States',
      imageUrl: 'path-to-author-photo.jpg'
    },
    {
      text: 'The hiking tour organized by Madeira Outdoors was simply breathtaking. The guides were knowledgeable and ensured we all had a safe yet thrilling experience. Can\'t wait to go back!',
      author: 'Jon Rundle',
      country: 'United States',
      imageUrl: 'path-to-author-photo.jpg'
    }
  ];
}
