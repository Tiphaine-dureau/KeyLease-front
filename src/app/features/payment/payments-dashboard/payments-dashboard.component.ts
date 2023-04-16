import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PaymentBusinessModel} from "../../../common/business-models/payment.business-model";
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";
import {PaymentDataModel} from "./payment-data.model";
import {PaymentService} from "../services/payment.service";
import {saveAs} from "file-saver";

@Component({
  selector: 'app-payments-dashboard',
  templateUrl: './payments-dashboard.component.html',
  styleUrls: ['./payments-dashboard.component.scss']
})
export class PaymentsDashboardComponent implements OnInit {
  @Input() data?: PaymentBusinessModel[];
  @Input() leaseContract!: LeaseContractBusinessModel;
  @Input() leaseContractId!: string;
  public displayedColumns = ['rentPaymentDate', 'paidRent', 'paymentLabel', 'actions', 'rentReceipt']
  public dataSource!: MatTableDataSource<PaymentDataModel>;
  public isLoading = false;

  constructor(
    private paymentService: PaymentService,
  ) {
  }

  ngOnInit(): void {
    const models: PaymentDataModel[] | undefined = this.data?.map((paymentBusinessModel: PaymentBusinessModel) => {
      return {
        id: paymentBusinessModel.id,
        rentPaymentDate: paymentBusinessModel.rentPaymentDate,
        paidRent: paymentBusinessModel.paidRent,
        paymentState: this.leaseContract.rentAmount === paymentBusinessModel.paidRent + paymentBusinessModel.amountPaidFromCafToOwner ? 'paid' : 'not-paid',
        paymentLabel: this.leaseContract.rentAmount === paymentBusinessModel.paidRent + paymentBusinessModel.amountPaidFromCafToOwner ? 'Payé' : 'À régulariser'
      } as PaymentDataModel
    })
    this.dataSource = new MatTableDataSource(models);
  }

  public deletePayment(id: string): void {
    this.isLoading = true;
    this.paymentService.deletePayment(id).subscribe({
      next: () => {
        this.isLoading = false;
        window.location.reload();
      }, error: () => {
        // TODO handle error
      }
    })
  }

  public getRentReceipt(leaseContractId: string, paymentId: string): void {
    this.paymentService.getRentReceipt(leaseContractId, paymentId).subscribe((data: any) => {
      const blob = new Blob([data.body], {type: 'application/pdf'});
      saveAs(blob, 'quittance.pdf')
    });
  }
}
