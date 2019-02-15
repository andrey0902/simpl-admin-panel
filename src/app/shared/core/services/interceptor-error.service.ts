
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { AuthCoreService } from './auth-core.service';
import { Observable ,  of } from 'rxjs';
import { catchError } from 'rxjs/operators';
export class InterceptorErrorService implements HttpInterceptor {
  constructor(public auth: AuthCoreService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request) .pipe(catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401 || error.status === 0) {
          // redirect to the login route
          // or show a modal
        }
      }
      return of(error);
    }));

  }
}
