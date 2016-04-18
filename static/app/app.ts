import { Component, provide } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";
import { HTTP_PROVIDERS, RequestOptions, Http, XHRBackend  } from 'angular2/http';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, ROUTER_BINDINGS, APP_BASE_HREF } from "angular2/router";

import { Site1 } from './site1';
import { PermissionService } from './permissionService';

@Component({
    selector: "issue-demonstrator",
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div>
            <h1>Welcome to the issue demonstrator</h1>
            <button (click)="navigateToSite1()">Site 1</button>
            <!-- Routed views go here -->
            <router-outlet></router-outlet>
        </div>
    `
})
@RouteConfig([
    { path: '/site1', name: 'Site1', component: Site1 }
])
export class App {
    constructor(private router: Router) {
        console.log("App started");
        setTimeout(() => router.navigate(["Site1"]), 1000);
    }

    navigateToSite1() {
        this.router.navigate(["Site1", {}]);
    }
}

bootstrap(App, [
    HTTP_PROVIDERS,
    ROUTER_BINDINGS,
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/static' }),
    provide(PermissionService, { useClass: PermissionService })
]);