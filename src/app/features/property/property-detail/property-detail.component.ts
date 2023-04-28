import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyService} from "../services/property.service";
import {PropertyBusinessModel} from "../../../common/business-models/property.business-model";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../common/components/dialog/dialog.component";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html'
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: string;
  public isLoading = false;
  public property?: PropertyBusinessModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    this.propertyId = this.activatedRoute.snapshot.params['id_bien'];
    this.getProperty();
  }

  private getProperty(): void {
    this.isLoading = true;
    this.propertyService.getProperty(this.propertyId).subscribe({
      next: (property: PropertyBusinessModel) => {
        this.isLoading = false;
        this.property = property;
      },
      error: () => {
        // Todo handle error
      }
    });
  }

  public deleteProperty(): void {
    const message = `Supprimer le bien : ${this.property?.type} - ${this.property?.area}m² - ${this.property?.roomsNumber} pièces engendrera s'il y a, la
    suppression du contrat associé et les paiements liés à ce contrat`
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {message},
      autoFocus: 'dialog'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "cancel") return;
      this.isLoading = true;
      this.propertyService.deleteProperty(this.propertyId).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigateByUrl("/biens");
        },
        error: () => {
          // TODO handle error
        }
      })
    })
  }
}
