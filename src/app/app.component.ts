import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
  import { WhatsappIconComponent } from './whatsapp-icon/whatsapp-icon.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, HeaderComponent, WhatsappIconComponent, FooterComponent, CopyrightComponent, LandingPageComponent]
})
export class AppComponent {
  title = 'madeiraoutdoors';
}
