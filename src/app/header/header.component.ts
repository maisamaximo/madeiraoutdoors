import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [FontAwesomeModule, NgbDropdownModule] // Importe FontAwesomeModule aqui
})
export class HeaderComponent {
  faInstagram = faInstagram; // Disponibiliza o ícone para o template
 // Exemplo: nome do usuário, poderia ser usado para exibir um nome de usuário dinamicamente
 userName: string = 'Visitante';

 // Você pode adicionar métodos para lidar com ações no seu cabeçalho, como navegação ou autenticação
 navigateTo(section: string): void {
   console.log(`Navegando para ${section}`);
   // Implementação da navegação aqui
 }
}
