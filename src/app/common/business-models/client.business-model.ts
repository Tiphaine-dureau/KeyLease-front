import {AddressBusinessModel} from "./address.business-model";

export interface ClientBusinessModel {
  firstName: string;
  lastName: string;
  birthday: Date;
  phoneNumber: string;
  email: string;
  address: AddressBusinessModel;
}
