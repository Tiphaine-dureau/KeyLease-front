import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../services/property.service";
import {PropertyBusinessModel} from "../../../common/business-models/property.business-model";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-property',
  templateUrl: './properties-dashboard.component.html',
  styleUrls: ['./properties-dashboard.component.scss']
})
export class PropertiesDashboardComponent implements OnInit {
  properties?: PropertyBusinessModel[];
  dataSource!: MatTableDataSource<PropertyBusinessModel>;
  public displayedColumns = ['type', 'area', 'roomsNumber', 'address', 'leaseContractId', 'fixtureInventoryId', 'actions'];
  public isLoading = false;

  constructor(
    private propertyService: PropertyService,
  ) {
  }

  ngOnInit(): void {
    this.getProperties();
  }

  private getProperties(): void {
    this.isLoading = true;
    this.propertyService.getProperties().subscribe((properties: PropertyBusinessModel[]) => {
      this.isLoading = false;
      this.properties = properties;
      this.dataSource = new MatTableDataSource(this.properties);
    })
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filterPredicate = (data: PropertyBusinessModel, filter: string) => {
        const searchString = data.type + data.area + data.roomsNumber +
          data.address.street + data.address.additionalAddress +
          data.address.zipCode + data.address.town;
        return searchString.toLowerCase().indexOf(filter) !== -1;
      };
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}
