import { Component, OnInit } from '@angular/core';
import { SpotService } from './spot.service';
import { EntityService } from './entity.service';
import { generate } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    map: any
    screen: any
    turn: number
    player: any
    skeleton1: any
    skeleton2: any
    xMargin: any
    yMargin: any

    constructor() { }

    ngOnInit() {
        console.log("Component initialized");
        this.map = this.generateOutline()
        // console.log(this.map);

        this.compileMap(this.map)

        var one = this.map[4][2];
        var two = this.map[4][6];
        var thr = this.map[2][8];

        this.player = new EntityService();
        this.player.construct("Chungus", '@ ', 0, one);
        // this.skeleton1 = new EntityService();
        // this.skeleton1.construct("Gnarly Skeleton", 'S ', 1, two);
        // this.skeleton2 = new EntityService();
        // this.skeleton2.construct("Crooked Skeleton", 'S ', 1, thr);

        this.player.scan(this.map)
        this.xMargin = 0;
        this.yMargin = 0;
        this.screen = this.renderMap(this.map)
        this.turn = 0;
    }

    generateOutline() {
        return [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
            [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];

    }
    compileMap(map) {
        console.log("Compiling Map");

        for (let i = 0; i < map.length; i++) {
            const row = map[i];
            for (let j = 0; j < row.length; j++) {
                var spot = new SpotService();
                spot.construct(row[j], j, i);
                row[j] = spot;
            }
        }
    }
    renderMap(map) {
        var world = [];
        // world.push("________________")
        for (let y = this.yMargin; y < this.yMargin + 8; y++) {
            let row = map[y];
            var str = ""
            for (let x = this.xMargin; x < this.xMargin + 8; x++) {
                let spot = row[x]
                str += spot.texture(this.turn);

                // str += spot.YCoord
            }
            // str += "| "
            world.push(str)
            // console.log(str);
        }
        // world.push("----------------")
        return world;
    }

    move(dir) {
        if (dir > -1) {
            console.log("Moving");
            this.player.move(dir, this.map)
        }
        // this.skeleton1.move(this.skeleton1.track(this.map), this.map)
        // this.skeleton2.move(this.skeleton2.track(this.map), this.map)

        if(this.player.spot.XCoord > this.xMargin + 5){
            this.xMargin += 1
        }
        if(this.player.spot.YCoord > this.yMargin + 5){
            this.yMargin += 1
        }

        this.player.scan(this.map, this.turn)
        this.screen = this.renderMap(this.map)
        this.turn += 1;
    }

}

