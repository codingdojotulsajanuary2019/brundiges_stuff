import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    path: number
    ledger = [];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _service: CoinService,
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            console.log(params['id'])
            this.path = params['id']
        });
        this.getLedger()
    }
    getLedger() {
        this.ledger = this._service.shareLedger();
    }


}
