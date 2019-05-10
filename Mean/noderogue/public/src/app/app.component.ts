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
    screenSize: number
    turn: number
    player: any
    skeletons: any
    xMargin: any
    yMargin: any

    constructor() { }

    ngOnInit() {
        console.log("Component initialized");
        this.map = this.generateOutline()
        // console.log(this.map);

        this.compileMap(this.map)
        this.screenSize = 12;

        var one = this.map[5][5];
        var two = this.map[1][1];
        var thr = this.map[14][14];
        var four = this.map[3][12];

        this.player = new EntityService();
        this.player.construct("Chungus", '@ ', 0, one, 0, 100);
        var skeleton1 = new EntityService();
        skeleton1.construct("Gnarly Skeleton", 'S ', 1, two, 25, 10);
        var skeleton2 = new EntityService();
        skeleton2.construct("Crooked Skeleton", 'S ', 1, thr, 25, 10);
        var chest = new EntityService();
        chest.construct("Stone Chest", 'C ', 2, four, 250, 1);

        this.skeletons = [];
        this.skeletons.push(skeleton1);
        this.skeletons.push(skeleton2);

        this.turn = null;
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
        for (let y = this.yMargin; y < this.yMargin + this.screenSize; y++) {
            let row = map[y];
            var str = ""
            for (let x = this.xMargin; x < this.xMargin + this.screenSize; x++) {
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
            // console.log("Moving");
            this.player.move(dir, this.map)
        }
        
        this.skeletons.forEach(skeleton => {
            if(skeleton.hp > 0){
                skeleton.move(skeleton.track(this.map), this.map)
            }
        });
        
        if (this.player.spot.XCoord > this.xMargin + 5) {
            this.xMargin += 1
        }
        if (this.player.spot.YCoord > this.yMargin + 5) {
            this.yMargin += 1
        }
        if (this.player.spot.XCoord < this.xMargin + 4) {
            this.xMargin = this.player.spot.XCoord - 2
            if (this.xMargin < 0) {
                this.xMargin = 0;
            }

        }
        if (this.player.spot.YCoord < this.yMargin + 3) {
            this.yMargin = this.player.spot.YCoord - 2
            this.yMargin -= 1;
            // console.log("Setting yMargin to: " + (this.yMargin));

            if (this.yMargin < 0) {
                this.yMargin = 0;
            }
        }

        if (this.xMargin + this.screenSize >= this.map[0].length - 1) {
            // console.log("Map too far right!");
            this.xMargin = this.map[0].length - this.screenSize;
        }
        if (this.yMargin + this.screenSize >= this.map.length - 1) {
            this.yMargin = this.map.length - this.screenSize;
        }

        this.player.scan(this.map, this.turn)
        this.screen = this.renderMap(this.map)
        this.turn += 1;
        // console.log("Turn: " + this.turn + " | xMargin: " + this.xMargin + " | yMargin: " + this.yMargin);

    }

}

