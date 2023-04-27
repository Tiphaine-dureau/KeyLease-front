import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TenantService} from "../services/tenant.service";
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";

@Component({
  selector: 'app-update-tenant',
  templateUrl: './update-tenant.component.html'
})
export class UpdateTenantComponent implements OnInit {
  public tenantId!: string;
  public tenant?: TenantBusinessModel;
  public isLoading = false;
  public backRoute?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tenantService: TenantService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.tenantId = this.activatedRoute.snapshot.params['id_locataire'];
    this.tenantService.getTenant(this.tenantId).subscribe({
      next: (tenantModel: TenantBusinessModel) => {
        this.isLoading = false;
        this.tenant = tenantModel;
        this.backRoute = `/locataires/${tenantModel.id}`
      },
      error: () => {
        // TODO handle error
      }
    });
  }

  public onSubmit($event: TenantBusinessModel): void {
    this.isLoading = true;
    this.tenantService.putTenant($event, this.tenantId).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl('/locataires')
      },
      error: () => {
        // TODO handle error
      }
    });
  }
}
