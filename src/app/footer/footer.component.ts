import { Component } from '@angular/core';
import { CopyrightComponent } from '../copyright/copyright.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CopyrightComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
