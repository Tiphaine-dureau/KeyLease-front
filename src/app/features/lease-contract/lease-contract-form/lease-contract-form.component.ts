import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TenantBusinessModel} from "../../../common/business-models/tenant.business-model";
import {PropertyBusinessModel} from "../../../common/business-models/property.business-model";
import {TenantService} from "../../tenant/services/tenant.service";
import {Observable} from "rxjs";
import {OwnerBusinessModel} from "../../../common/business-models/owner.business-model";
import {ActivatedRoute} from "@angular/router";
import {OwnerService} from "../../owner/services/owner.service";
import {PostLeaseContractModel} from "../services/post-lease-contract.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-lease-contract-form',
  templateUrl: './lease-contract-form.component.html'
})
export class LeaseContractFormComponent implements OnInit {
  @Input() leaseContract?: LeaseContractBusinessModel;
  @Input() owner?: OwnerBusinessModel;
  @Input() property?: PropertyBusinessModel;
  @Output() onFormSubmit: EventEmitter<PostLeaseContractModel> = new EventEmitter<PostLeaseContractModel>();
  public tenants$: Observable<TenantBusinessModel[]> = this.tenantService.getTenants();
  public owners$: Observable<OwnerBusinessModel[]> = this.ownerService.getOwners();
  public leaseContractFormGroup!: FormGroup;
  public propertyId!: string;
  public title = "Contrat de location";
  public subtitle = "Rappel du bien concerné"

  constructor(
    private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private tenantService: TenantService,
    private ownerService: OwnerService,
    private datePipe: DatePipe,
  ) {
  }

  ngOnInit(): void {
    if (this.leaseContract?.property) {
      // Modification
      this.propertyId = this.leaseContract.property.id;
    } else {
      // Creation
      this.propertyId = this.activatedRoute.snapshot.params['id_bien'];
    }
    this.leaseContractFormGroup = this._formBuilder.group({
      rentAmount: [this.leaseContract?.rentAmount, Validators.required],
      requiredDeposit: [this.leaseContract?.requiredDeposit, Validators.required],
      paidDeposit: [this.leaseContract?.paidDeposit, Validators.required],
      tenant: [this.leaseContract?.tenant.id, Validators.required],
      owner: [this.leaseContract?.owner.id, Validators.required],
      rentCharges: [this.leaseContract?.rentCharges, Validators.required],
      expectedAmountFromCafToOwner: [this.leaseContract?.expectedAmountFromCafToOwner],
      dateContractSignature: [this.leaseContract?.dateContractSignature],
    })
  }

  public onSubmit(): void {
    const formattedDate: string = this.datePipe.transform(this.leaseContractFormGroup.value.dateContractSignature, 'YYYY-MM-dd', '', '') || "";
    const contractFormData: PostLeaseContractModel = {
      tenantId: this.leaseContractFormGroup.value.tenant,
      ownerId: this.leaseContractFormGroup.value.owner,
      propertyId: this.propertyId,
      rentAmount: this.leaseContractFormGroup.value.rentAmount,
      rentCharges: this.leaseContractFormGroup.value.rentCharges,
      requiredDeposit: this.leaseContractFormGroup.value.requiredDeposit,
      paidDeposit: this.leaseContractFormGroup.value.paidDeposit,
      expectedAmountFromCafToOwner: this.leaseContractFormGroup.value.expectedAmountFromCafToOwner,
      dateContractSignature: new Date(formattedDate),
    } as PostLeaseContractModel;
    this.onFormSubmit.emit(contractFormData);
  }
}
