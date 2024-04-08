import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { WhatsappIconComponent } from './whatsapp-icon/whatsapp-icon.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, WhatsappIconComponent]
})
export class AppComponent {
  title = 'madeiraoutdoors';
}
