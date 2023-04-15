import {Component, Input} from "@angular/core";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  standalone: true,
  selector: 'app-label-value',
  imports: [BrowserModule, MatIconModule, MatDividerModule],
  template: `
    <div [ngClass]="{'pb-5' : bottomSpacing}" class="flex flex-col pt-5">
      <div class="pb-3 text-lg text-zinc-500">{{label}}</div>
      <div [ngClass]="{'pb-5' : divider}" class="text-xl text-neutral-800">{{value || 'N/A'}}</div>
      <mat-divider *ngIf="divider"></mat-divider>
    </div>
  `,
})
export class LabelValueComponent {
  @Input() label!: string;
  @Input() value!: Date | string | number | null | undefined;
  @Input() divider: boolean = true;
  @Input() bottomSpacing: boolean = false;
}
