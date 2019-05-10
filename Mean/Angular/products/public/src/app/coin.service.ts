import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CoinService {

    ledger;
    coin: object;

    shareLedger() {
        return this.ledger;
    }
    shareCoin() {
        return this.coin;
    }

    constructor() {
        console.log("Initializing CoinService");
        this.ledger = []
        this.coin = {'wallet': 0, 'value': 1};
    }
}
