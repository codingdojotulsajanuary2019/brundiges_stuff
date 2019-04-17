import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    path
    updateProduct: any
    constructor(private _service: HttpService,
        private _route: ActivatedRoute, ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            console.log(params['id'])
            this.path = params['id']
            this.getOneFromService(params['id'])
        });
    }

    getOneFromService(title: string) {
        console.log("Getting one task");

        let observable = this._service.getOne(title);
        observable.subscribe(data => {
            // console.log("Got a task with id " + title, data)
            this.updateProduct = data['product']
            console.log("Got a task with id " + title, this.updateProduct)
        });
    }

    onSubmit() {
        console.log("Updating task:", this.updateProduct);
        let observable = this._service.update(this.updateProduct['_id'], this.updateProduct);
        observable.subscribe(data => {
            console.log("Update request unerrant!", data)
        });
    }

}
