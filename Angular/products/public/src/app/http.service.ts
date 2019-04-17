import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient) {
        console.log("Initializing HTTP Service");
    }

    getAll() {
        return this._http.get('/api/products');
    }

    getOne(id: string) {
        return this._http.get(`/api/products/${id}`);
    }

    create(body: JSON) {
        return this._http.post(`/api/products/`, body);
    }

    update(title: string, body: JSON) {
        return this._http.put(`/api/products/${title}`, body);
    }

    delete(title: string) {
        return this._http.delete(`/api/products/${title}`);
    }
}
