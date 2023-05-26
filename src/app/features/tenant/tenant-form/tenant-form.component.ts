import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/material/stepper";
import {BreakpointObserver} from "@angular/cdk/layout";
import {AddressBusinessModel} from "../../../common/business-models/address.business-model";
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html'
})
export class TenantFormComponent implements OnInit {
  @Input() tenant?: TenantBusinessModel;
  @Output() onFormSubmit: EventEmitter<TenantBusinessModel> = new EventEmitter<TenantBusinessModel>();
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
      firstName: [this.tenant?.firstName, Validators.required],
      lastName: [this.tenant?.lastName, Validators.required],
      birthday: [this.tenant?.birthday],
    });
    this.postalAddressFormGroup = this._formBuilder.group({
      street: [this.tenant?.address?.street, Validators.required],
      additionalAddress: [this.tenant?.address?.additionalAddress],
      town: [this.tenant?.address?.town, Validators.required],
      // Matches 5 numeric digits, such as a zip code :
      zipCode: [this.tenant?.address?.zipCode, [Validators.pattern('^\\d{5}$')]],
    });
    this.contactDetailsFormGroup = this._formBuilder.group({
      // Matches 99.99% of e-mail addresses (excludes IP e-mails)
      email: [this.tenant?.email, Validators.pattern('^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}$')],
      phone: [this.tenant?.phoneNumber, Validators.pattern('^0[1-9][0-9]{8}')],
      partnerLastName: [this.tenant?.partnerLastName],
      partnerFirstName: [this.tenant?.partnerFirstName],
      partnerPhone: [this.tenant?.partnerPhoneNumber, Validators.pattern('^0[1-9][0-9]{8}')],
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

    const tenantFormData = {
      firstName: identityFormData.firstName,
      lastName: identityFormData.lastName,
      birthday: new Date(formattedBirthdate),
      phoneNumber: contactDetailsFormData.phone,
      email: contactDetailsFormData.email,
      partnerFirstName: contactDetailsFormData.partnerFirstName,
      partnerLastName: contactDetailsFormData.partnerLastName,
      partnerPhoneNumber: contactDetailsFormData.partnerPhone,
      address: addressFormData
    } as TenantBusinessModel;
    this.onFormSubmit.emit(tenantFormData);
  }
}
