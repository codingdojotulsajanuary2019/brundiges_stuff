import { Component, OnInit } from '@angular/core';
import { CoinService } from './coin.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ledger = []
    ngOnInit() {
        this.ledger = this._service.shareLedger()
    }

    constructor(private _service: CoinService) { }
}
