import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css'
})
export class PortfolioCardComponent {
  @Input() projectName: string = '';

}
 