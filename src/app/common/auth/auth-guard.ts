import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {AuthState} from "./auth-state";
import {catchError, map, Observable, of} from "rxjs";
import {FetchUserAction} from "../user/fetch-user-action";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router,
  ) {
  }

  public canActivate(): Observable<boolean> {
    const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);
    if (!isAuthenticated) {
      this.router.navigateByUrl('/login');
      return of(false);
    } else {
      return this.store.dispatch(FetchUserAction).pipe(
        map(() => true),
        catchError((err) => {
          this.router.navigateByUrl('/login');
          throw err;
        })
      );
    }
  }
}
