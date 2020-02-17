import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    //add the required authentication to use API
    const modifiedRequest = request.clone({
      headers: request.headers.append(
        "x-api-key",
        "516c291b-de24-4785-9578-3ae08088836b"
      )
    });
    return next.handle(modifiedRequest);
  }
}
