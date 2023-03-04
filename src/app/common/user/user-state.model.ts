import {UserBusinessModel} from "../business-models/user.business-model";

export interface UserStateModel {
  user: UserBusinessModel | null;
}
