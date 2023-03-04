import {Action, Selector, State, StateContext} from "@ngxs/store";
import {UserStateModel} from "./user-state.model";
import {Injectable} from "@angular/core";
import {UserBusinessModel} from "../business-models/user.business-model";
import {UserService} from "../services/user.service";
import {FetchUserAction} from "./fetch-user-action";
import {catchError, tap} from "rxjs";

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null,
  }
})
@Injectable()
export class UserState {

  @Selector()
  static user(state: UserStateModel): UserBusinessModel | null {
    return state.user;
  }

  constructor(private userService: UserService) {
  }

  @Action(FetchUserAction)
  fetchUser(ctx: StateContext<UserStateModel>) {
    return this.userService.getMe().pipe(
      tap((user: UserBusinessModel) => {
        ctx.patchState({
          user
        })
      }),
      catchError((err) => {
        throw err;
      })
    )
  }
}