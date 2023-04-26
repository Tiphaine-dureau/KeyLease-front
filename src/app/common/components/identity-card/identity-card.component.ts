import {Component, Input, OnInit} from '@angular/core';
import {ClientBusinessModel} from "../../business-models/client.business-model";

@Component({
  selector: 'app-identity-card',
  templateUrl: './identity-card.component.html'
})
export class IdentityCardComponent implements OnInit {
  @Input() data?: ClientBusinessModel
  @Input() subtitle!: String

  constructor() {
  }

  ngOnInit(): void {
  }
}
