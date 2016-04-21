import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()
export class PermissionService {

    constructor(private http: Http) {
        console.info("Permission service was created.");
    }

    public GetPermissionsForUser(userId: string) {
        console.log("Get Permissions from webservice  ...");

        var requestUrl = "";
        return new Promise((resolve, reject) => {
            this.http
                .request(requestUrl, {
                    method: "get"
                }).map<any>(response => {
                    return response.json();
                }).subscribe(
                data => resolve(data),
                error => reject(error)
                );
        });
    }
}