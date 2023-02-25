import {Component, OnInit} from '@angular/core';
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";
import {TenantService} from "../services/tenant.service";
import {ClientListModel} from "../../../common/components/client-list/client-list.model";

@Component({
  selector: 'app-tenant',
  templateUrl: './tenants-dashboard.component.html',
  styleUrls: ['./tenants-dashboard.component.scss']
})
export class TenantsDashboardComponent implements OnInit {
  clientModels?: ClientListModel[];

  constructor(
    private tenantService: TenantService,
  ) {
  }

  ngOnInit(): void {
    this.getTenants();
  }

  private getTenants(): void {
    this.tenantService.getTenants().subscribe((tenants: TenantBusinessModel[]) => {
      this.clientModels = tenants.map((tenant: TenantBusinessModel) => {
        return {
          id: tenant.id,
          firstName: tenant.firstName,
          lastName: tenant.lastName,
          email: tenant.email,
          phoneNumber: tenant.phoneNumber
        } as ClientListModel
      });
    })
  }
}
