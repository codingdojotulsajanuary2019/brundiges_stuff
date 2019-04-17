import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

    constructor(private _service: CoinService) { }
    c: object;
    ledger;
    coins: string;

    ngOnInit() {
        this.getCoin();
        this.getLedger();
        this.coins = "1"
    }

    getLedger() {
        this.ledger = this._service.shareLedger();
    }
    getCoin() {
        this.c = this._service.shareCoin();
    }

    sellCoin() {
        if (this.c['wallet'] > 0) {
            var line = { 'id': this.ledger.length, 'action': "Sell", 'amount': this.coins, 'value': this.c['value'] }
            this.ledger.push(line);
            console.log(this.ledger);
            this.c['wallet'] -= parseInt(this.coins)
            this.c['value'] -= 1;
        }
    }

}
