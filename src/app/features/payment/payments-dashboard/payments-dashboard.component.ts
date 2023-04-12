import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PaymentBusinessModel} from "../../../common/business-models/payment.business-model";
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";
import {PaymentDataModel} from "./payment-data.model";
import {PaymentService} from "../services/payment.service";

@Component({
  selector: 'app-payments-dashboard',
  templateUrl: './payments-dashboard.component.html',
  styleUrls: ['./payments-dashboard.component.scss']
})
export class PaymentsDashboardComponent implements OnInit {
  @Input() data?: PaymentBusinessModel[];
  @Input() leaseContract!: LeaseContractBusinessModel;
  @Input() leaseContractId!: string;
  public displayedColumns = ['rentPaymentDate', 'paidRent', 'paymentLabel', 'actions']
  public dataSource!: MatTableDataSource<PaymentDataModel>;
  public isLoading = false;

  constructor(
    private paymentService: PaymentService,
  ) {
  }

  ngOnInit(): void {
    const models: PaymentDataModel[] | undefined = this.data?.map((businessModel: PaymentBusinessModel) => {
      return {
        id: businessModel.id,
        rentPaymentDate: businessModel.rentPaymentDate,
        paidRent: businessModel.paidRent,
        paymentState: this.leaseContract.rentAmount === businessModel.paidRent ? 'paid' : 'not-paid',
        paymentLabel: this.leaseContract.rentAmount === businessModel.paidRent ? 'Payé' : 'À régulariser'
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
}
