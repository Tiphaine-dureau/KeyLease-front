export interface PostLeaseContractModel {
  tenantId: string;
  ownerId: string;
  propertyId: string;
  rentAmount: number;
  rentCharges: number;
  requiredDeposit: number;
  paidDeposit: number;
  dateContractSignature: Date;
}
