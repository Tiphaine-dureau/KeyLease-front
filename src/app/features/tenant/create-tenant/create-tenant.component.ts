import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/material/stepper";
import {TenantService} from "../services/tenant.service";
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html'
})
export class CreateTenantComponent implements OnInit {
  public isLoading = false;
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private tenantService: TenantService,
    private router: Router,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
  }

  public onSubmit($event: TenantBusinessModel): void {
    this.isLoading = true;
    this.tenantService.postTenant($event).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl('/locataires')
      },
      error: () => {
        // Todo handle error
      }
    });
  }
}
