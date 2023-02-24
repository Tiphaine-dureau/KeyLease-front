import {Component, OnInit} from '@angular/core';
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";
import {TenantService} from "../services/tenant.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-tenant',
  templateUrl: './tenants-dashboard.component.html',
  styleUrls: ['./tenants-dashboard.component.scss']
})
export class TenantsDashboardComponent implements OnInit {
  tenantId: string = "98765"; // TODO get ID
  tenants?: TenantBusinessModel[];
  displayedColumns = ['lastName', 'firstName', 'phoneNumber', 'email', 'actions'];
  dataSource?: MatTableDataSource<TenantBusinessModel>;


  constructor(
    private tenantService: TenantService,
  ) {
  }

  ngOnInit(): void {
    this.getTenants();
  }

  private getTenants(): void {
    this.tenantService.getTenants().subscribe((tenants: TenantBusinessModel[]) => {
      this.tenants = tenants;
      this.dataSource = new MatTableDataSource(this.tenants);
    })
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}
