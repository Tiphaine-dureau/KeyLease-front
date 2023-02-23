import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {BreakpointObserver} from "@angular/cdk/layout";
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/material/stepper";
import {TenantService} from "../services/tenant.service";
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";
import {AddressBusinessModel} from "../../../common/business-models/address.business-model";

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.scss']
})
export class CreateTenantComponent implements OnInit {
  identityFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: [''],
  });
  postalAddressFormGroup = this._formBuilder.group({
    street: ['', Validators.required],
    additionalAddress: [''],
    town: ['', Validators.required],
    // Matches 5 numeric digits, such as a zip code :
    zipCode: ['', [Validators.pattern('^\\d{5}$')]],
  });
  contactDetailsFormGroup = this._formBuilder.group({
    // Matches 99.99% of e-mail addresses (excludes IP e-mails)
    email: ['', Validators.pattern('^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}$')],
    phone: ['', Validators.required],
    partnerLastName: [''],
    partnerFirstName: [''],
    partnerPhone: ['']
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    private tenantService: TenantService,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }


  ngOnInit(): void {
  }

  public onSubmit(): void {
    const identityFormData = this.identityFormGroup.value;
    const postalAddressFormData = this.postalAddressFormGroup.value;
    const contactDetailsFormData = this.contactDetailsFormGroup.value;
    const formBirthdate: string = this.identityFormGroup.value['birthday'] || "";
    const birthdate: Date = new Date(formBirthdate);


    const addressFormData = {
      street: postalAddressFormData.street,
      additionalAddress: postalAddressFormData.additionalAddress,
      zipCode: postalAddressFormData.zipCode,
      town: postalAddressFormData.town
    } as AddressBusinessModel;

    const tenantFormData = {
      firstName: identityFormData.firstName,
      lastName: identityFormData.lastName,
      birthday: birthdate,
      phoneNumber: contactDetailsFormData.phone,
      email: contactDetailsFormData.email,
      partnerFirstName: contactDetailsFormData.partnerFirstName,
      partnerLastName: contactDetailsFormData.partnerLastName,
      partnerPhoneNumber: contactDetailsFormData.partnerPhone,
      address: addressFormData
    } as TenantBusinessModel;

    this.tenantService.postTenant(tenantFormData).subscribe()
  }
}
