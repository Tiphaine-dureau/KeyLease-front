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

  constructor(
    private activatedRoute: ActivatedRoute,
    private tenantService: TenantService
  ) {
  }

  ngOnInit(): void {
    this.tenantId = this.activatedRoute.snapshot.params['id_tenant'];
    this.tenantService.getTenant(this.tenantId).subscribe((data: TenantBusinessModel) => {
      console.warn(data);
    });
  }
}
