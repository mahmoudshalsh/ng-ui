import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Product } from '../_models';

@Injectable()
export class ProductService {

    private url = 'http://localhost/Naj/Api/Product';

    constructor(private http: HttpClient) { }

    getAll(): Promise<Product[]> {
        return this.http
            .get(`${this.url}`)
            .toPromise()
            .then(Response => Response as Product[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
