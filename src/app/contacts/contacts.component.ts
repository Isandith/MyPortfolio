import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  
    constructor(private titleservice: Title) {
  
        this.titleservice.setTitle('John Doe - Contacts');
  
     }

}
