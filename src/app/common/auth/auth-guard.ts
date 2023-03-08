import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {AuthState} from "./auth-state";
import {catchError, map, Observable, of} from "rxjs";
import {FetchUser} from "./fetch-user";
import {AuthStateModel} from "./auth-state-model";
import {Logout} from "./logout";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router,
  ) {
  }

  public canActivate(): Observable<boolean> {
    const isAuthenticated = this.store.selectSnapshot(AuthState.hasToken);
    if (!isAuthenticated) {
      this.router.navigateByUrl('/login');
      return of(false);
    } else {
      return this.store.dispatch(FetchUser).pipe(
        map((state: { auth: AuthStateModel | null }) => true),
        catchError((err) => {
          this.router.navigateByUrl('/login');
          this.store.dispatch(Logout);
          throw err;
        })
      );
    }
  }
}
