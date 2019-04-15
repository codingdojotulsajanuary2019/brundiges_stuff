import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient) {
        console.log("Initializing HTTP Service");
        
        // this.getAll();
        // this.getOne("");
        // this.create();
        // this.update("");
        // this.delete("");
    }

    getAll() {
        //   let tempObservable = this._http.get('/tasks');
        //   tempObservable.subscribe(data => console.log("Got all tasks!", data));
        return this._http.get('/tasks');
    }

    getOne(title: string) {
        return this._http.get(`/tasks/${title}`);
    }

    create(body: JSON) {
        return this._http.post(`/tasks/`, body);
    }

    update(title: string, body: JSON) {
        return this._http.put(`/tasks/${title}`, body);
    }

    delete(title: string) {
        return this._http.delete(`/tasks/${title}`);
    }
}
