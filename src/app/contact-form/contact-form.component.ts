import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'] // Corrected to styleUrls
})
export class ContactFormComponent {
  contactFg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactFg = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]), // Added email validator
      message: new FormControl('', [Validators.required, Validators.maxLength(300)]),
    });
  }

  get email() {
    return this.contactFg.get('email') as FormControl;
  }

  get message() {
    return this.contactFg.get('message') as FormControl;
  }

  doSend() {
    if (this.contactFg.valid) {
      alert('Demande de contact envoyée avec succès')
    }
  }
}
