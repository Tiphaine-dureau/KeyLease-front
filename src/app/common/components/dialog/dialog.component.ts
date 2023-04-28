import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'app-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  template:
    `
      <h1 mat-dialog-title>Confirmez-vous la suppression ?</h1>
      <div mat-dialog-content>
        {{data.message}}
      </div>
      <div mat-dialog-actions align="end">
        <button mat-button mat-dialog-close="cancel">Annuler</button>
        <button mat-raised-button color="warn" mat-dialog-close="validate">Supprimer</button>
      </div>
    `,
})

export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {
  }
}
