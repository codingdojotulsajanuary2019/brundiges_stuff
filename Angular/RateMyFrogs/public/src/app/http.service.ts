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
        //   let tempObservable = this._http.get('/frogs');
        //   tempObservable.subscribe(data => console.log("Got all frogs!", data));
        return this._http.get('/frogs');
    }

    getOne(title: string) {
        return this._http.get(`/frogs/${title}`);
    }

    create(body: JSON) {
        return this._http.post(`/frogs/`, body);
    }

    update(title: string, body: JSON) {
        return this._http.put(`/frogs/${title}`, body);
    }

    delete(title: string) {
        return this._http.delete(`/frogs/${title}`);
    }

    review(title: string, body: JSON) {
        return this._http.put(`/reviews/${title}`, body);
    }
}
