import {Component, OnInit} from '@angular/core';
import {PaymentBusinessModel} from "../../../common/business-models/payment.business-model";
import {PaymentService} from "../services/payment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LeaseContractService} from "../../lease-contract/services/lease-contract.service";
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";


@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html'
})
export class CreatePaymentComponent implements OnInit {
  public isLoading = false;
  public contract?: LeaseContractBusinessModel;
  public contractId!: string;
  public backRoute?: string;

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private leaseContractService: LeaseContractService
  ) {
  }

  ngOnInit(): void {
    this.contractId = this.activatedRoute.snapshot.params['id_contrat'];
    this.leaseContractService.getLeaseContract(this.contractId).subscribe({
      next: (model: LeaseContractBusinessModel) => {
        this.contract = model;
        this.backRoute = `/locataires/${model.tenant.id}`
      },
      error: () => {
      }
    });
  }

  public onSubmit($event: PaymentBusinessModel): void {
    $event.leaseContractId = this.contractId;
    this.isLoading = true;
    this.paymentService.postPayment($event).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['locataires', this.contract?.tenant.id])
      }, error: () => {
        // TODO handle error
      }
    })
  }
}
