import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() icon: string = 'info';
  @Input() status: string = 'success';
}

