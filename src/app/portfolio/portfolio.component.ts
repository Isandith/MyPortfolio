import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PortfolioCardComponent } from "../portfolio-card/portfolio-card.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

   constructor(private titleservice: Title) {
  
        this.titleservice.setTitle('John Doe - Portfolio');
  
     }

}
