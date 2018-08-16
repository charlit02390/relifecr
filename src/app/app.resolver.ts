import { Injectable } from '@angular/core';
import { DataService } from './core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, Resolve } from '@angular/router';
import { RequestOptions } from '@angular/http';
import { CacheService } from 'ng2-cache';
import { Subject } from 'rxjs/Subject';
 

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CsrfResolver implements Resolve<any> {

    public csrfObservable = new Subject<boolean>();

    constructor(
        private requestOptions: RequestOptions,
        private dataService: DataService,
        private cacheService: CacheService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        return this.dataService.get('token')
            .then(response => {
                this.setToken(response.csrfToken);
                return response;
            });
    }

    private setToken(token) {
        this.cacheService.set('csrfToken', token);
        this.requestOptions.headers.set('x-csrf-token', token);
        this.csrfObservable.next(true);
    }
}