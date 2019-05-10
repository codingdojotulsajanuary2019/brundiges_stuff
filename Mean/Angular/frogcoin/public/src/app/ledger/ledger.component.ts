import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ledger',
    templateUrl: './ledger.component.html',
    styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

    constructor(private _service: CoinService, private _router: Router) { }
    ledger = [];
    getLedger() {
        this.ledger = this._service.shareLedger();
    }

    ngOnInit() {
        this.getLedger();
    }
    goHome(param: string) {
        var url = '/ledger/' + param
        this._router.navigate([url]);
    }

}
