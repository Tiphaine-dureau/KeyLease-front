import {ClientBusinessModel} from "./client.business-model";

export interface OwnerBusinessModel extends ClientBusinessModel {
  iban: string;
  expectedRentAmount: number;
  balance: number;
}
