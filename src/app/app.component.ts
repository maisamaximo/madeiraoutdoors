import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
  import { WhatsappIconComponent } from './whatsapp-icon/whatsapp-icon.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, WhatsappIconComponent, FooterComponent, CopyrightComponent]
})
export class AppComponent {
  title = 'madeiraoutdoors';
}
