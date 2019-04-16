import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-frog',
    templateUrl: './frog.component.html',
    styleUrls: ['./frog.component.css']
})
export class FrogComponent implements OnInit {

    @Input() oneFrog: any;
    constructor() { }

    ngOnInit() {
    }

}
