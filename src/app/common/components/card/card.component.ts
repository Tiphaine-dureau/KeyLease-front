import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public title: string | undefined;
  @Input() public img: string | undefined;
  @Input() public alt: string | undefined;
  @Input() public route: string | undefined;

}
