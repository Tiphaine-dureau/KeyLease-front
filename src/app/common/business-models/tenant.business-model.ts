import {ClientBusinessModel} from "./client.business-model";

export interface TenantBusinessModel extends ClientBusinessModel {
  partnerLastName: string;
  partnerFirstName: string;
  partnerPhoneNumber: string;

}
