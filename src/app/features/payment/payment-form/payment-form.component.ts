import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaymentBusinessModel} from "../../../common/business-models/payment.business-model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  @Input() payment?: PaymentBusinessModel;
  @Input() expectedAmountFromCafToOwner?: number;
  @Output() onFormSubmit: EventEmitter<PaymentBusinessModel> = new EventEmitter<PaymentBusinessModel>();
  public paymentFormGroup!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private datePipe: DatePipe,
  ) {
  }

  ngOnInit(): void {
    this.paymentFormGroup = this._formBuilder.group({
      rentPaymentDate: [this.payment?.rentPaymentDate, Validators.required],
      paidRent: [this.payment?.paidRent, Validators.required],
      amountPaidFromCafToOwner: [this.payment?.amountPaidFromCafToOwner || this.expectedAmountFromCafToOwner],
      leaseContractId: [this.payment?.leaseContractId, Validators.required],
    })
  }

  public onSubmit(): void {
    const formattedDate: string = this.datePipe.transform(this.paymentFormGroup.value.rentPaymentDate, 'YYYY-MM-dd', '', '') || "";
    const paymentFormData: PaymentBusinessModel = {
      rentPaymentDate: new Date(formattedDate),
      paidRent: this.paymentFormGroup.value.paidRent,
      amountPaidFromCafToOwner: this.paymentFormGroup.value.amountPaidFromCafToOwner,
      leaseContractId: this.paymentFormGroup.value.leaseContractId,
    } as PaymentBusinessModel;
    this.onFormSubmit.emit(paymentFormData);
  }
}
