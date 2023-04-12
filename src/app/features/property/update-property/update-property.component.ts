import {Component, OnInit} from '@angular/core';
import {PropertyBusinessModel} from "../../../common/business-models/property.business-model";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyService} from "../services/property.service";

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.scss']
})
export class UpdatePropertyComponent implements OnInit {
  public propertyId!: string;
  public property?: PropertyBusinessModel;
  public isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.propertyId = this.activatedRoute.snapshot.params['id_bien'];
    this.propertyService.getProperty(this.propertyId).subscribe({
      next: (property: PropertyBusinessModel) => {
        this.property = property;
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
