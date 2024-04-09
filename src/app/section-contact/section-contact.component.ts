import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-section-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './section-contact.component.html',
  styleUrl: './section-contact.component.css'
})
export class SectionContactComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  message: string = '';

  constructor() { }

  submitForm() {
    // Aqui você pode adicionar lógica para enviar o formulário
    console.log('Formulário enviado');
    console.log('Nome:', this.firstName, this.lastName);
    console.log('Email:', this.email);
    console.log('Mensagem:', this.message);
  }
}
