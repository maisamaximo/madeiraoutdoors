import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
}

@Component({
  selector: 'app-section-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-blog.component.html',
  styleUrl: './section-blog.component.css'
})
export class SectionBlogComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Exploring the Hidden Waterfalls of Madeira',
      summary: 'Join us as we uncover the most secluded waterfalls on the island.',
      imageUrl: 'assets/photos/card-1.jpeg',
      date: 'April 10, 2024'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Madeira Outdoors',
      summary: 'Your essential guide to the best outdoor experiences in Madeira.',
      imageUrl: 'assets/photos/card-2.jpeg',
      date: 'March 23, 2024'
    },
    {
      id: 1,
      title: 'Exploring the Hidden Waterfalls of Madeira',
      summary: 'Join us as we uncover the most secluded waterfalls on the island.',
      imageUrl: 'assets/photos/card-3.jpeg',
      date: 'April 10, 2024'
    },
  ];
}
