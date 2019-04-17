import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

    constructor(private _service: HttpService) { }
    newProduct: any

    ngOnInit() {
        this.newProduct = { title: "", url: "", price: 1 }
    }
    onSubmit() {
        console.log("Submitting task:", this.newProduct);
        let observable = this._service.create(this.newProduct);
        observable.subscribe(data => {
            console.log("Created a new task!", data)
            this.newProduct = { title: "", url: "", price: 1 }
        });
    }

}
