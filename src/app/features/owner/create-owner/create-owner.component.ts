import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/material/stepper";
import {BreakpointObserver} from "@angular/cdk/layout";
import {OwnerService} from "../services/owner.service";
import {OwnerBusinessModel} from "../../../common/business-models/owner.business-model";

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss']
})
export class CreateOwnerComponent implements OnInit {
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
    iban: ['']
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    private ownerService: OwnerService,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
  }

  public onSubmit($event: OwnerBusinessModel): void {
    this.ownerService.postOwner($event).subscribe();
  }
}
