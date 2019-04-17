import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
    selector: 'app-mine',
    templateUrl: './mine.component.html',
    styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

    constructor(private _service: CoinService) { }
    seq
    input
    expect
    c: object;
    ledger;

    ngOnInit() {
        this.seq = Math.floor(Math.random() * 100);
        this.expect = this.fibonacci(this.seq);
        this.input = ""
        console.log("Expects " + this.expect);
        this.getCoin();
        this.getLedger();
    }

    fibonacci(num) {
        var a = 1, b = 0, temp;

        while (num >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }

        return b;
    }
    getLedger() {
        this.ledger = this._service.shareLedger();
    }
    getCoin() {
        this.c = this._service.shareCoin();
    }

    mineCoin() {
        console.log("Big Chungus");
        
        if (parseInt(this.input) == this.expect) {
            var line = { 'id': this.ledger.length, 'action': "Mined", 'amount': 1, 'value': this.c['value'] }
            this.ledger.push(line);
            console.log(this.ledger);
            this.c['wallet'] += 1;
            this.c['value'] += 1;
        }
        this.seq = Math.floor(Math.random() * 100);
        this.expect = this.fibonacci(this.seq);
        this.input = ""
        console.log("Expects " + this.expect);
    }

}
