import { Component, provide } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";
import { HTTP_PROVIDERS, RequestOptions, Http, XHRBackend  } from "angular2/http";
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, ROUTER_BINDINGS } from "angular2/router";
import { APP_BASE_HREF } from "angular2/platform/common"

import { Login } from "./login";
import { Site1 } from "./site1";

import { PermissionService } from "./permissionService";
import { HttpInterceptor } from "./httpInterceptor";

@Component({
    selector: "issue-demonstrator",
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div>
            <h3>Welcome to the issue demonstrator</h3>
            <button (click)="showSite1()">Show Site 1</button>
            <button (click)="createRequest()">Create Request</button><br />
            <!-- Routed views go here -->
            <hr />
            <router-outlet></router-outlet>
        </div>
    `
})
@RouteConfig([
    { path: "/login", name: "Login", component: Login },
    { path: "/sites/site1", name: "Site1", component: Site1 }
])
export class App {
    constructor(private router: Router, private http: Http) {
        console.log("App started");
    }

    showSite1() {
        this.router.navigate(["Login", {}]);
    }

    createRequest() {
        this.http
            .request("http://google.com", {
                method: "get"
            });
    }
}

bootstrap(App, [
    HTTP_PROVIDERS,
    ROUTER_BINDINGS,
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: "/static" }),
    provide(PermissionService, { useClass: PermissionService }),
    provide(Http, {
        useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions) => new HttpInterceptor(xhrBackend, requestOptions),
        deps: [XHRBackend, RequestOptions]
    })
]);