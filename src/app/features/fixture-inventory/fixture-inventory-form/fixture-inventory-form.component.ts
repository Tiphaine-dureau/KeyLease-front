import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FixtureInventoryBusinessModel} from "../../../common/business-models/fixture-inventory.business-model";
import {PropertyBusinessModel} from "../../../common/business-models/property.business-model";
import {PostFixtureInventoryModel} from "../services/post-fixture-inventory.model";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-fixture-inventory-form',
  templateUrl: './fixture-inventory-form.component.html',
})
export class FixtureInventoryFormComponent implements OnInit {
  @Input() fixtureInventory?: FixtureInventoryBusinessModel;
  @Input() property?: PropertyBusinessModel;
  @Output() onFormSubmit: EventEmitter<PostFixtureInventoryModel> = new EventEmitter<PostFixtureInventoryModel>();
  public propertyId!: string;
  public title = "Création de l'état des lieux";
  public subtitle = "Rappel du bien concerné";
  public fixtureInventoryFormGroup!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private datePipe: DatePipe,
  ) {
  }

  ngOnInit(): void {
    if (this.fixtureInventory?.property) {
      // Modification
      this.propertyId = this.fixtureInventory.property.id;
    } else {
      // Creation
      this.propertyId = this.activatedRoute.snapshot.params['id_bien'];
    }
    this.fixtureInventoryFormGroup = this._formBuilder.group({
      arrivalFixtureInventoryDate: [this.fixtureInventory?.arrivalFixtureInventoryDate],
      arrivalComments: [this.fixtureInventory?.arrivalComments],
      exitFixtureInventoryDate: [this.fixtureInventory?.exitFixtureInventoryDate],
      exitComments: [this.fixtureInventory?.exitComments]
    })
  }

  public onSubmit(): void {
    const formattedArrivalDate: string = this.datePipe.transform(this.fixtureInventoryFormGroup.value
      .arrivalFixtureInventoryDate, 'YYYY-MM-dd', '', '') || "";
    const formattedExitDate: string = this.datePipe.transform(this.fixtureInventoryFormGroup
      .value.exitFixtureInventoryDate, 'YYYY-MM-dd', '', '') || "";
    const fixtureInventoryFormData: PostFixtureInventoryModel = {
      arrivalFixtureInventoryDate: new Date(formattedArrivalDate),
      arrivalComments: this.fixtureInventoryFormGroup.value.arrivalComments,
      exitFixtureInventoryDate: new Date(formattedExitDate),
      exitComments: this.fixtureInventoryFormGroup.value.exitComments,
      propertyId: this.propertyId,
    } as PostFixtureInventoryModel;
    this.onFormSubmit.emit(fixtureInventoryFormData);
  }
}
