import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TenantService} from "../services/tenant.service";
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";

@Component({
  selector: 'app-update-tenant',
  templateUrl: './update-tenant.component.html',
  styleUrls: ['./update-tenant.component.scss']
})
export class UpdateTenantComponent implements OnInit {
  public tenantId!: string;
  public tenant?: TenantBusinessModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tenantService: TenantService
  ) {
  }

  ngOnInit(): void {
    this.tenantId = this.activatedRoute.snapshot.params['id_tenant'];
    this.tenantService.getTenant(this.tenantId).subscribe({
      next: (tenant: TenantBusinessModel) => {
        this.tenant = tenant;
      },
      error: () => {
        // TODO handle error
      }
    });
  }

  public onSubmit($event: TenantBusinessModel): void {
    this.tenantService.putTenant($event, this.tenantId).subscribe();
  }
}
