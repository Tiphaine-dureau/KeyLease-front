import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OwnerService} from "../services/owner.service";
import {OwnerBusinessModel} from "../../../common/business-models/owner.business-model";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../common/components/dialog/dialog.component";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-detail.component.html'
})
export class OwnerDetailComponent implements OnInit {
  public ownerId!: string;
  public owner?: OwnerBusinessModel;
  public isLoading = false;
  public subtitle = "Propriétaire";

  constructor(
    private activatedRoute: ActivatedRoute,
    private ownerService: OwnerService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.ownerId = this.activatedRoute.snapshot.params['id_proprietaire'];
    this.getOwner();
  }

  private getOwner(): void {
    this.isLoading = true;
    this.ownerService.getOwner(this.ownerId).subscribe({
      next: (owner: OwnerBusinessModel) => {
        this.isLoading = false;
        this.owner = owner;
      },
      error: () => {
        // Todo handle error
      }
    });
  }

  public deleteOwner(): void {
    const message = `Supprimer le propriétaire ${this.owner?.firstName} ${this.owner?.lastName} engendrera s'il y a, la
    suppression du contrat associé et les paiements liés à ce contrat`
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {message},
      autoFocus: 'dialog'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "cancel") return;
      this.isLoading = true;
      this.ownerService.deleteOwner(this.ownerId).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(["/proprietaires"]);
        },
        error: () => {
          // TODO add Toast
        }
      })
    })
  }
}
