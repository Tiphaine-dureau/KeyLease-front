import {AddressBusinessModel} from "./address.business-model";

export interface PropertyBusinessModel {
  id: string;
  area: string;
  roomsNumber: string;
  description: string;
  type: string;
  address: AddressBusinessModel;
  leaseContractId: string;
  fixtureInventoryId: string;
}
