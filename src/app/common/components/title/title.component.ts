import {Component, Input} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-title',
  imports: [RouterModule, BrowserModule, MatButtonModule, MatIconModule],
  template: `
    <div class="flex items-center border-b-4 border-black my-5">
      <button *ngIf="back" mat-icon-button color="primary" class="me-3" routerLink="{{back}}">
        <mat-icon>arrow_back</mat-icon>
      </button>
      <h1 class="text-4xl uppercase font-mono">{{title}}</h1>
    </div>
  `,
})
export class TitleComponent {
  @Input() title!: string;
  @Input() back?: string;
}
