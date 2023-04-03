import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TenantService} from "../services/tenant.service";
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";
import {PaymentBusinessModel} from "../../../common/business-models/payment.business-model";
import {PaymentService} from "../../payment/services/payment.service";
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";
import {LeaseContractService} from "../../lease-contract/services/lease-contract.service";

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
  public paymentSections?: { contract: LeaseContractBusinessModel, payments: PaymentBusinessModel[] }[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tenantService: TenantService,
    private paymentService: PaymentService,
    private leaseContractService: LeaseContractService,
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
        this.paymentSections = [];
        this.tenant.leaseContractIdList.forEach((contractId: string) => {
          this.leaseContractService.getLeaseContract(contractId).subscribe((leaseContractBusinessModel: LeaseContractBusinessModel) => {
            this.paymentService.getPaymentsByLeaseContractId(contractId).subscribe((payments: PaymentBusinessModel[]) => {
              const paymentSection: { contract: LeaseContractBusinessModel, payments: PaymentBusinessModel[] } = {
                contract: leaseContractBusinessModel,
                payments: payments
              };
              this.paymentSections?.push(paymentSection);
            });
          })
        })
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
