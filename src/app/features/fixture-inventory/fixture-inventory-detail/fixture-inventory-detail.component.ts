import {Component, OnInit} from '@angular/core';
import {FixtureInventoryBusinessModel} from "../../../common/business-models/fixture-inventory.business-model";
import {FixtureInventoryService} from "../services/fixture-inventory.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogComponent} from "../../../common/components/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-fixture-inventory-detail',
  templateUrl: './fixture-inventory-detail.component.html',
})
export class FixtureInventoryDetailComponent implements OnInit {
  public fixtureInventory?: FixtureInventoryBusinessModel;
  public fixtureInventoryId!: string;
  public isLoading = false;
  public backRoute?: string;

  constructor(
    private fixtureInventoryService: FixtureInventoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.fixtureInventoryId = this.activatedRoute.snapshot.params['id_etat-des-lieux']
    this.getFixtureInventory();
  }

  private getFixtureInventory(): void {
    this.isLoading = true;
    this.fixtureInventoryService.getFixtureInventory(this.fixtureInventoryId).subscribe({
      next: (fixtureInventory: FixtureInventoryBusinessModel) => {
        this.isLoading = false;
        this.fixtureInventory = fixtureInventory;
        this.backRoute = `/biens/${fixtureInventory.property.id}`
      },
      error: () => {
        // TODO handle error
      }
    });
  }

  public goToModification() {
    this.router.navigate(['/etats-des-lieux/' + this.fixtureInventoryId + '/modification'])
  }

  public deleteFixtureInventory() {
    const message = `Vous êtes sur le point de supprimer l'état des lieux. Voulez-vous continuer ?`
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {message},
      autoFocus: 'dialog'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "cancel") return;
      this.isLoading = true;
      this.fixtureInventoryService.delete(this.fixtureInventoryId).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/biens/' + this.fixtureInventory?.property.id])
        }, error: () => {
          // TODO HANDLE ERROR
        }
      })
    })
  }
}
