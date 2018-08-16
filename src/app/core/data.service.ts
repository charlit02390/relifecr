import { Injectable } from '@angular/core';
import {
    Headers,
    Http,
    RequestOptions,
    URLSearchParams,
    Response,
    ResponseContentType
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    constructor(
        public http: Http
    ) { }

    public search(url: string, element: any): Observable<any> {
        let options: RequestOptions;
        let params: URLSearchParams;

        params = new URLSearchParams();

        for (let key in element) {
            if (element.hasOwnProperty(key)) {
                params.set(key, element[key]);
            }
        }

        options = new RequestOptions({ search: params });
        return this.http.get(url, options)
            .map(response => response.json());
    }


    public post(url: string, element: any): Promise<any> {
        return this.http.post(url, element)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    public put(url: string, element: any): Promise<any> {
        return this.http.put(url, element)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    public postFile(url: string, element: any): Promise<any> {
        return this.http.post(url, element, { responseType: ResponseContentType.Blob })
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    public getAll(url: string): Promise<any[]> {
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as any[])
            .catch(this.handleError);
    }

    public get(url: string): Promise<any> {
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    public delete(url: string, element?: any): Promise<any> {
        if (element) {
            return this.http.delete(url, new RequestOptions({ body: element }))
                .toPromise()
                .then(response => response.json() as any)
                .catch(this.handleError);
        } else {
            return this.http.delete(url)
                .toPromise()
                .then(response => response.json() as any)
                .catch(this.handleError);
        }
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}