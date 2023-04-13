export interface PaymentBusinessModel {
  id: string;
  paidRent: number;
  rentPaymentDate: Date,
  amountPaidFromCafToOwner: number;
  leaseContractId: string;
}
