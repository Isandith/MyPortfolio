import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  
    constructor(private titleservice: Title) {
  
        this.titleservice.setTitle('John Doe - Resume');
  
     }

}
