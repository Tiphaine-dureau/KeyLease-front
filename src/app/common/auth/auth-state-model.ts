import {UserBusinessModel} from "../business-models/user.business-model";

export interface AuthStateModel {
  user: UserBusinessModel | null;
  token: string | null;
  username: string | null;
  isLoading: boolean;
  hasError: boolean;
}
