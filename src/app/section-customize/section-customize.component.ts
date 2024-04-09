import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafePipe } from '../safe.pipe';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-section-customize',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-customize.component.html',
  styleUrl: './section-customize.component.css'
})
export class SectionCustomizeComponent {
  typeformUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.typeformUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://w7z8i4hvu05.typeform.com/to/kzO3vvkk');
  }}
