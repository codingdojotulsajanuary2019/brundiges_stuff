import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpotService {

    fill: any
    entityOnSpot = null;
    entityInZone = null;
    XCoord: any
    YCoord: any

    constructor() {
        // console.log("I am.");
    }

    construct(fill,x,y){
        // Whether the spot is a wall or open. O-open, 1-wall
        this.fill = fill
        this.entityOnSpot = null;
        this.entityInZone = {
            'player': null,
            'dir': 9,
            'turn': -1,
            'prim': false
        };
        this.XCoord = x
        this.YCoord = y
    }
    texture(turn){
        if (this.fill == 1) {
            return '■ ';
        } else if(this.entityInZone.turn != turn) {
            return '_ ';
        } else if (this.entityOnSpot != null) {
            return this.entityOnSpot.character;
        } else {
            // return '  ';
            return '  ';
        } 
    }

}
