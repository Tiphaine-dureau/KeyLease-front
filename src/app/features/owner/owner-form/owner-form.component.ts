import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OwnerBusinessModel} from "../../../common/business-models/owner.business-model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/material/stepper";
import {BreakpointObserver} from "@angular/cdk/layout";
import {AddressBusinessModel} from "../../../common/business-models/address.business-model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html'
})
export class OwnerFormComponent {
  @Input() owner?: OwnerBusinessModel;
  @Output() onFormSubmit: EventEmitter<OwnerBusinessModel> = new EventEmitter<OwnerBusinessModel>();
  public identityFormGroup!: FormGroup;
  public postalAddressFormGroup!: FormGroup;
  public contactDetailsFormGroup!: FormGroup;
  public stepperOrientation!: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver,
    private datePipe: DatePipe,
  ) {
  }

  ngOnInit(): void {
    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
    this.identityFormGroup = this._formBuilder.group({
      firstName: [this.owner?.firstName, Validators.required],
      lastName: [this.owner?.lastName, Validators.required],
      birthday: [this.owner?.birthday],
    });
    this.postalAddressFormGroup = this._formBuilder.group({
      street: [this.owner?.address?.street, Validators.required],
      additionalAddress: [this.owner?.address?.additionalAddress],
      town: [this.owner?.address?.town, Validators.required],
      // Matches 5 numeric digits, such as a zip code :
      zipCode: [this.owner?.address?.zipCode, [Validators.pattern('^\\d{5}$')]],
    });
    this.contactDetailsFormGroup = this._formBuilder.group({
      // Matches 99.99% of e-mail addresses (excludes IP e-mails)
      email: [this.owner?.email, Validators.pattern('^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}$')],
      phone: [this.owner?.phoneNumber, Validators.pattern('^0[1-9][0-9]{8}')],
      iban: [this.owner?.iban]
    });
  }

  public onSubmit(): void {
    const identityFormData = this.identityFormGroup.value;
    const postalAddressFormData = this.postalAddressFormGroup.value;
    const contactDetailsFormData = this.contactDetailsFormGroup.value;
    const formattedBirthdate: string = this.datePipe.transform(this.identityFormGroup.value
      .birthday, 'YYYY-MM-dd', '', '') || "";

    const addressFormData = {
      street: postalAddressFormData.street,
      additionalAddress: postalAddressFormData.additionalAddress,
      zipCode: postalAddressFormData.zipCode,
      town: postalAddressFormData.town
    } as AddressBusinessModel;

    const ownerFormData = {
      firstName: identityFormData.firstName,
      lastName: identityFormData.lastName,
      birthday: new Date(formattedBirthdate),
      phoneNumber: contactDetailsFormData.phone,
      email: contactDetailsFormData.email,
      iban: contactDetailsFormData.iban,
      address: addressFormData
    } as OwnerBusinessModel;
    this.onFormSubmit.emit(ownerFormData);
  }
}
