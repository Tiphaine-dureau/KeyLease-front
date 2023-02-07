import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {BreakpointObserver} from "@angular/cdk/layout";
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/material/stepper";
import * as moment from 'moment';

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.scss']
})
export class CreateTenantComponent implements OnInit {
  identityFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    date: [''],
  });
  postalAddressFormGroup = this._formBuilder.group({
    road: [''],
    additionalAddress: [''],
    town: [''],
    // Matches 5 numeric digits, such as a zip code :
    zip: ['', [Validators.pattern('^\\d{5}$')]],
  });
  contactDetailsFormGroup = this._formBuilder.group({
    // Matches 99.99% of e-mail addresses (excludes IP e-mails)
    email: ['', Validators.pattern('^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}$')],
    phone: ['', Validators.required]
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }


  ngOnInit(): void {
  }

  public submit(): void {
    const identityFormData = this.identityFormGroup.value;
    const postalAddressFormData = this.postalAddressFormGroup.value;
    const contactDetailsFormData = this.contactDetailsFormGroup.value;
    const birthday = identityFormData['date'];
    console.warn(moment(birthday).format('YYYY-MM-DD'));
  }
}
