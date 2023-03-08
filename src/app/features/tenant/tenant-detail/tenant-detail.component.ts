import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TenantService} from "../services/tenant.service";
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.scss']
})
export class TenantDetailComponent implements OnInit {
  public tenant?: TenantBusinessModel;
  public tenantID!: string;
  public isLoading = false;
  public subtitle = "Locataire";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tenantService: TenantService,
  ) {
  }

  ngOnInit(): void {
    this.tenantID = this.activatedRoute.snapshot.params['id_tenant'];
    this.getTenant();
  }

  private getTenant(): void {
    this.tenantService.getTenant(this.tenantID).subscribe({
      next: (tenant: TenantBusinessModel) => {
        this.tenant = tenant;
      },
      error: () => {
        // TODO handle error
      }
    });
  }

  public delete(): void {
    this.isLoading = true;
    this.tenantService.deleteTenant(this.tenantID).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(["/locataires"]);
      },
      error: () => {
        // TODO add toast
      }
    })
  }
}
