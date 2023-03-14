import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/material/stepper";
import {BreakpointObserver} from "@angular/cdk/layout";
import {PropertyBusinessModel} from "../../../common/business-models/property.business-model";
import {AddressBusinessModel} from "../../../common/business-models/address.business-model";

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss']
})
export class PropertyFormComponent implements OnInit {
  @Input() property?: PropertyBusinessModel;
  @Output() onFormSubmit: EventEmitter<PropertyBusinessModel> = new EventEmitter<PropertyBusinessModel>();
  public descriptionFormGroup!: FormGroup;
  public postalAddressFormGroup!: FormGroup;
  public stepperOrientation!: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit(): void {
    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
    this.descriptionFormGroup = this._formBuilder.group({
      propertyType: [this.property?.type, Validators.required],
      area: [this.property?.area],
      roomsNumber: [this.property?.roomsNumber],
      description: [this.property?.description]
    });
    this.postalAddressFormGroup = this._formBuilder.group({
      street: [this.property?.address?.street, Validators.required],
      additionalAddress: [this.property?.address?.additionalAddress],
      town: [this.property?.address?.town, Validators.required],
      // Matches 5 numeric digits, such as a zip code :
      zipCode: [this.property?.address?.zipCode, [Validators.pattern('^\\d{5}$')]],
    });
  }

  public onSubmit(): void {
    const descriptionFormData = this.descriptionFormGroup.value;
    const postalAddressFormData = this.postalAddressFormGroup.value;

    const addressFormData = {
      street: postalAddressFormData.street,
      additionalAddress: postalAddressFormData.additionalAddress,
      zipCode: postalAddressFormData.zipCode,
      town: postalAddressFormData.town
    } as AddressBusinessModel;

    const propertyFormData = {
      type: descriptionFormData.propertyType,
      area: descriptionFormData.area,
      roomsNumber: descriptionFormData.roomsNumber,
      description: descriptionFormData.description,
      address: addressFormData
    } as PropertyBusinessModel;
    this.onFormSubmit.emit(propertyFormData);
  }
}
