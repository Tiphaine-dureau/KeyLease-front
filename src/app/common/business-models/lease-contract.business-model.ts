import {OwnerBusinessModel} from "./owner.business-model";
import {TenantBusinessModel} from "./tenant.business-model";
import {PropertyBusinessModel} from "./property.business-model";

export interface LeaseContractBusinessModel {
  id: string;
  rentAmount: number;
  rentCharges: number;
  requiredDeposit: number;
  paidDeposit: number;
  dateContractSignature: Date;
  expectedAmountFromCafToOwner: number;
  owner: OwnerBusinessModel;
  tenant: TenantBusinessModel;
  property: PropertyBusinessModel;
  payments: PropertyBusinessModel[];
}
