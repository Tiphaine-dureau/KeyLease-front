import {Injectable, NgZone} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AuthStateModel} from "./auth-state-model";
import {Login} from "./login";
import {catchError, tap} from "rxjs";
import {Logout} from "./logout";
import {Router} from "@angular/router";
import {LoginService} from "../../features/login/services/login.service";
import {LoginBusinessModel} from "../../features/login/login-form/login-business.model";
import {UserBusinessModel} from "../business-models/user.business-model";
import {UserService} from "../services/user.service";
import {FetchUser} from "./fetch-user";

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    token: null,
    username: null,
    isLoading: false,
    hasError: false,
  }
})
@Injectable()
export class AuthState {

  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static user(state: AuthStateModel): UserBusinessModel | null {
    return state.user;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.username || !!state.user;
  }

  @Selector()
  static hasToken(state: AuthStateModel): boolean {
    return !!state.token;
  }

  @Selector()
  static username(state: AuthStateModel): string | null {
    return state.username || (state.user !== null ? state.user.email : null);
  }

  @Selector()
  static isLoading(state: AuthStateModel): boolean {
    return state.isLoading;
  }

  @Selector()
  static hasError(state: AuthStateModel): boolean {
    return state.hasError;
  }

  constructor(
    private authService: LoginService,
    private userService: UserService,
    private router: Router,
    private ngZone: NgZone
  ) {
  }

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    ctx.patchState({
      isLoading: true,
      hasError: false
    })
    return this.authService.login(action.payload).pipe(
      tap((result: LoginBusinessModel) => {
        console.warn("patch state");
        ctx.patchState({
          token: result.token,
          username: action.payload.email,
          isLoading: true, // keep loading before routing to home
          hasError: false
        });
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
      }),
      catchError((err) => {
        ctx.patchState({
          user: null,
          token: null,
          username: null,
          isLoading: false,
          hasError: true
        })
        throw err;
      })
    );
  }

  @Action(FetchUser)
  fetchUser(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({
      isLoading: true
    });
    return this.userService.getMe().pipe(
      tap((user: UserBusinessModel) => {
        ctx.patchState({
          user,
          username: user.email,
          isLoading: false
        })
      }),
      catchError((err) => {
        ctx.setState({
          user: null,
          token: null,
          username: null,
          isLoading: false,
          hasError: true
        });
        throw err;
      })
    )
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    return this.authService.logout().pipe(
      tap(() => {
        ctx.setState({
          user: null,
          token: null,
          username: null,
          isLoading: false,
          hasError: false
        });
      })
    );
  }
}
