import {Component} from '@angular/core';
import {AuthState} from "../../../common/auth/auth-state";
import {Observable} from "rxjs";
import {Select} from "@ngxs/store";
import {UserBusinessModel} from "../../../common/business-models/user.business-model";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {
  @Select(AuthState.user) user$!: Observable<UserBusinessModel>;
}
