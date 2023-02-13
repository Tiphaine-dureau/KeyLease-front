import {Component, OnInit} from '@angular/core';
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";
import {TenantService} from "../../../common/services/tenant.service";

@Component({
  selector: 'app-tenant',
  templateUrl: './tenants-dashboard.component.html',
  styleUrls: ['./tenants-dashboard.component.scss']
})
export class TenantsDashboardComponent implements OnInit {
  tenantId: string = "98765"; // TODO get ID
  tenants?: TenantBusinessModel[];

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
    })
  }
}
