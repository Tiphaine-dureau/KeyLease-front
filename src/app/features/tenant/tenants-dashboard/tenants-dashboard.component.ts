import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../common/services/client.service";
import {ClientBusinessModel} from "../../../common/business-models/client.business-model";

@Component({
  selector: 'app-tenant',
  templateUrl: './tenants-dashboard.component.html',
  styleUrls: ['./tenants-dashboard.component.scss']
})
export class TenantsDashboardComponent implements OnInit {

  tenantId: string = "98765"; // TODO get ID
  clients?: ClientBusinessModel[];

  constructor(
    private clientService: ClientService,
  ) {
  }

  ngOnInit(): void {
    this.getClient();
  }

  private getClient(): void {
    this.clientService.getClients().subscribe((clients: ClientBusinessModel[]) => {
      this.clients = clients;
    });
  }
}
