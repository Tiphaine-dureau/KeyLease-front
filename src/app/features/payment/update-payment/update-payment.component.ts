import {Component, OnInit} from '@angular/core';
import {PaymentBusinessModel} from "../../../common/business-models/payment.business-model";
import {ActivatedRoute, Router} from "@angular/router";
import {PaymentService} from "../services/payment.service";
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";
import {LeaseContractService} from "../../lease-contract/services/lease-contract.service";

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html'
})
export class UpdatePaymentComponent implements OnInit {
  public paymentId!: string;
  public contractId!: string;
  public payment?: PaymentBusinessModel;
  public contract?: LeaseContractBusinessModel;
  public isLoading = false;
  public backRoute?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentService,
    private router: Router,
    private leaseContractService: LeaseContractService
  ) {
  }

  ngOnInit(): void {
    this.paymentId = this.activatedRoute.snapshot.params['id_paiement'];
    this.contractId = this.activatedRoute.snapshot.params['id_contrat'];
    this.leaseContractService.getLeaseContract(this.contractId).subscribe({
      next: (model: LeaseContractBusinessModel) => {
        this.contract = model;
        this.backRoute = `/locataires/${model.tenant.id}`
      },
      error: () => {

      }
    });
    this.paymentService.getPayment(this.paymentId).subscribe({
      next: (payment: PaymentBusinessModel) => {
        this.payment = payment;
      }, error: () => {
        // TODO handle error
      }
    })
  }

  public onSubmit($event: PaymentBusinessModel): void {
    this.isLoading = true;
    this.paymentService.updatePayment($event, this.paymentId).subscribe({
      next: () => {
        this.isLoading = true;
        this.router.navigate(['locataires', this.contract?.tenant.id])
      }, error: () => {
        // TODO handle error
      }
    });

  }
}
