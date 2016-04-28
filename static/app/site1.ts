import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from "angular2/core";

@Component({
    selector: "site1",
    template: `
        <div>
            <p>Welcome to Site 2</p>
        </div>
    `
})
export class Site1 implements OnInit, OnDestroy {
    constructor() {
        console.log("Site1 - constructor called");
    }

    ngOnInit() {
        console.log("Site1 - ngOnInit called");
    }

    ngOnDestroy() {
        console.log("Site1 - ngOnDestroy called");
    }
}