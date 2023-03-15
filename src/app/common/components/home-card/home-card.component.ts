import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent {
  @Input() public title: string | undefined;
  @Input() public img: string | undefined;
  @Input() public alt: string | undefined;
  @Input() public route: string | undefined;

}
