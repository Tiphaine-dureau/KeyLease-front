import {LoginFormModel} from "../../features/login/login-form/login-form.model";

export class Login {
  static readonly type = '[Auth] Login';

  constructor(
    public payload: LoginFormModel
  ) {
  }
}
