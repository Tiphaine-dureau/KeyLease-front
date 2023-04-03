import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PaymentBusinessModel} from "../../../common/business-models/payment.business-model";
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";
import {PaymentDataModel} from "./payment-data.model";

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

  ngOnInit(): void {
    const models: PaymentDataModel[] | undefined = this.data?.map((businessModel: PaymentBusinessModel) => {
      return {
        rentPaymentDate: businessModel.rentPaymentDate,
        paidRent: businessModel.paidRent,
        paymentState: this.leaseContract.rentAmount === businessModel.paidRent ? 'paid' : 'not-paid',
        paymentLabel: this.leaseContract.rentAmount === businessModel.paidRent ? 'Payé' : 'À régulariser'
      } as PaymentDataModel
    })
    this.dataSource = new MatTableDataSource(models);
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}
