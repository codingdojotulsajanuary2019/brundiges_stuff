import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    constructor(private _service: HttpService, private _CoinService: CoinService, private _router: Router ) { }

    players = [];

    ngOnInit() {
        console.log("List Component Initialized");
        this.getAllFromService();
    }

    getAllFromService() {
        console.log("Getting all products");
        let observable = this._service.getAll();
        observable.subscribe(data => {
            console.log("Got our products!", data)
            this.players = data['products']
        });
    }

    editProduct(id: string) {
        var url = '/product/new/' + id
        this._router.navigate([url]);
    }

    deleteProduct(id: string) {
        console.log("Deleting task:", id);
        let observable = this._service.delete(id);
        observable.subscribe(data => {
            console.log("Deleted a product!", data)
            this.getAllFromService()
        });
    }

}
