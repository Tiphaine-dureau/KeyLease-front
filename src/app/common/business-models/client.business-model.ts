import {AddressBusinessModel} from "./address.business-model";

export interface ClientBusinessModel {
  id: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  phoneNumber: string;
  email: string;
  address: AddressBusinessModel;
}
