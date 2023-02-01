import {Component} from '@angular/core';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenants-dashboard.component.html',
  styleUrls: ['./tenants-dashboard.component.scss']
})
export class TenantsDashboardComponent {

  tenantId: string = "98765"; // TODO get ID

}
