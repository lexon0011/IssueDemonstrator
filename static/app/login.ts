import { Component } from "angular2/core";
import { Router } from "angular2/router";

@Component({
    selector: "login",
    template: `
        <div>
            <p *ngIf="loginIsProcessing">Login is processing</p>
        </div>
    `
})
export class Login {
    private loginIsProcessing = false;

    constructor(private router: Router) {
        this.simulateSomeAsync().then((value) => {
            this.router.navigate(["Site1", {}]);
        });
    }

    simulateSomeAsync(): Promise<string> {
        return new Promise((resolve: any, reject: any) => {
            setTimeout(function () {
                resolve("SimulateSomeAsync");
            }, 1000);
        });
    }
}