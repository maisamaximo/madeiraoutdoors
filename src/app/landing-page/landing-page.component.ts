import { Component } from '@angular/core';
import { SectionServiceComponent } from '../section-service/section-service.component';
import { SectionOurExperiencesComponent } from '../section-our-experiences/section-our-experiences.component';
import { SectionAboutUsComponent } from '../section-about-us/section-about-us.component';
import { SectionBestSellersComponent } from '../section-best-sellers/section-best-sellers.component';
import { SectionCallToActionComponent } from '../section-call-to-action/section-call-to-action.component';
import { SectionBlogComponent } from '../section-blog/section-blog.component';
import { SectionTestimonialsComponent } from '../section-testimonials/section-testimonials.component';
import { SectionCustomizeComponent } from '../section-customize/section-customize.component';
import { SectionContactComponent } from '../section-contact/section-contact.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [SectionServiceComponent, SectionOurExperiencesComponent, SectionAboutUsComponent, SectionBestSellersComponent, SectionCallToActionComponent, SectionBlogComponent, SectionTestimonialsComponent, SectionCustomizeComponent, SectionContactComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
