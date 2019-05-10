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
        return this._http.get('/api/notes');
    }

    getOne(id: string) {
        return this._http.get(`/api/notes/${id}`);
    }

    create(body: JSON) {
        return this._http.post(`/api/notes/`, body);
    }

    update(title: string, body: JSON) {
        return this._http.put(`/api/notes/${title}`, body);
    }

    delete(title: string) {
        return this._http.delete(`/api/notes/${title}`);
    }
}
