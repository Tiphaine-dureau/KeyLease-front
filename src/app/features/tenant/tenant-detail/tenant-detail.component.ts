import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TenantService} from "../services/tenant.service";

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.scss']
})
export class TenantDetailComponent implements OnInit {

  public tenantID!: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private tenantService: TenantService) {
  }

  ngOnInit(): void {
    this.tenantID = this.activatedRoute.snapshot.params['id_tenant'];
  }

  public delete(): void {
    this.tenantService.deleteTenant(this.tenantID).subscribe({
      next: () => {
        this.router.navigate(["/locataires"]);
      },
      error: () => {
        // TODO add toast
      }
    })
  }
}
