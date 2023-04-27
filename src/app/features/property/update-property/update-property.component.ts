import {Component, OnInit} from '@angular/core';
import {PropertyBusinessModel} from "../../../common/business-models/property.business-model";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyService} from "../services/property.service";

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html'
})
export class UpdatePropertyComponent implements OnInit {
  public propertyId!: string;
  public property?: PropertyBusinessModel;
  public isLoading = false;
  public backRoute?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.propertyId = this.activatedRoute.snapshot.params['id_bien'];
    this.propertyService.getProperty(this.propertyId).subscribe({
      next: (property: PropertyBusinessModel) => {
        this.isLoading = false;
        this.property = property;
        this.backRoute = `/biens/${property.id}`
      },
      error: () => {
        // TODO handle error
      }
    })
  }

  public onSubmit($event: PropertyBusinessModel): void {
    this.isLoading = true;
    this.propertyService.modifyProperty($event, this.propertyId).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl('/biens')
      },
      error: () => {
        // TODO handle error
      }
    })
  }
}
