import {HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {AuthState} from "../auth/auth-state";

export const SKIP_AUTH_BEARER = new HttpContextToken(() => false);

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store) {
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = this.store.selectSnapshot(AuthState.token);
    if (req.context.get(SKIP_AUTH_BEARER) || !idToken) {
      return next.handle(req);
    }
    // Clone the request and replace the original headers with cloned headers, updated with the authorization
    const cloned = req.clone({
      headers: req.headers.set('Authorization',
        'Bearer ' + idToken)
    });
    // Send cloned request with header to the next handler
    return next.handle(cloned);
  }
}
