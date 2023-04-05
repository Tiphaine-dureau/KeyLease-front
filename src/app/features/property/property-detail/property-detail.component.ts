import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyService} from "../services/property.service";
import {PropertyBusinessModel} from "../../../common/business-models/property.business-model";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: string;
  public isLoading = false;
  public property?: PropertyBusinessModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.propertyId = this.activatedRoute.snapshot.params['id_bien'];
    this.getProperty();
  }

  private getProperty(): void {
    this.propertyService.getProperty(this.propertyId).subscribe({
      next: (property: PropertyBusinessModel) => {
        this.property = property;
      },
      error: () => {
        // Todo handle error
      }
    });
  }

  public deleteProperty(): void {
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
  }
}
