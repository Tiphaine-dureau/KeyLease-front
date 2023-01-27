import {HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TOKEN_KEY} from "../../features/login/services/login-form.service";

export const SKIP_AUTH_BEARER = new HttpContextToken(() => false);

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the token from the local storage
    const idToken = localStorage.getItem(TOKEN_KEY);
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
