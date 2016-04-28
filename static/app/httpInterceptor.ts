import { Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend } from "angular2/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/empty";

export class HttpInterceptor extends Http {

    constructor(connectionBackend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(connectionBackend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url, options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, options));
    }

    intercept(observable: Observable<Response>): Observable<Response> {

         return observable.catch((err, source) => {
         if (err.status  === 401) {
                console.error("401 error");
                // this.navigator.navigateToLogin({ redirectPath: "sections" });
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        });
    }
}