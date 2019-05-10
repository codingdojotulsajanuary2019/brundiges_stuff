import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EntityService {
    name: string
    character: any
    player: any
    spot: any
    entityOnSpot: any
    gold: number
    hp: number

    constructor() { }
    construct(name, character, player, spot, gold, hp) {
        this.name = name;
        this.character = character;
        this.player = player;
        this.spot = spot;
        spot.entityOnSpot = this;
        this.gold = gold
        this.hp = hp;

    }

    greet() {
        var greet = "At " + this.spot.XCoord + "-" + this.spot.YCoord + ": ";
        if (this.player) {
            greet += "It's " + this.name + " the player character!";
        } else {
            greet += "A " + this.name;
        }
        return greet;
    }

    move(dir, map) {
        var oldSpot = this.spot;
        var x = this.spot.XCoord;
        var y = this.spot.YCoord
        // console.log("Moving in direction " + dir);
        switch (dir) {
            case 0:
                if (map[y - 1][x].entityOnSpot != null) {
                    this.attack(map[y - 1][x].entityOnSpot);
                }
                else if (map[y - 1][x].fill == 0) {
                    // console.log("Moving north");
                    // Assigns player location to map
                    map[y - 1][x].entityOnSpot = this;
                    // Assigns new location to player
                    this.spot = map[y - 1][x]
                    // Destroys previous spot
                    oldSpot.entityOnSpot = null;
                } else {
                    // console.log("Cannot go north");
                }
                break;
            case 1:
                if (map[y + 1][x].entityOnSpot != null) {
                    this.attack(map[y + 1][x].entityOnSpot);
                } else if (map[y + 1][x].fill == 0) {
                    // console.log("Moving south");
                    map[y + 1][x].entityOnSpot = this;
                    this.spot = map[y + 1][x]
                    oldSpot.entityOnSpot = null;
                } else {
                    // console.log("Cannot go south");
                }
                break;
            case 2:
                if (map[y][x + 1].entityOnSpot != null) {
                    this.attack(map[y][x + 1].entityOnSpot);
                } else if (map[y][x + 1].fill == 0) {
                    // console.log("Moving east");
                    map[y][x + 1].entityOnSpot = this;
                    this.spot = map[y][x + 1]
                    oldSpot.entityOnSpot = null;
                } else {
                    // console.log("Cannot go east");
                }
                break;
            case 3:
                if (map[y][x - 1].entityOnSpot != null) {
                    this.attack(map[y][x - 1].entityOnSpot);
                } else if (map[y][x - 1].fill == 0) {
                    // console.log("Moving west");
                    map[y][x - 1].entityOnSpot = this;
                    this.spot = map[y][x - 1];
                    oldSpot.entityOnSpot = null;
                } else {
                    // console.log("Cannot go west");
                }
                break;

            default:
                // console.log("Errant input!");

                break;
        }
    }
    // Informs surrounding area of player location so enemies can move towards
    scan(map, turn) {
        // console.log("Scanning");
        let entity = {
            'player': this.player,
            'dir': -1,
            'prim': true,
            'turn': turn
        }
        this.spot.entityInZone = entity;
        this.scanRow(map, this.spot.XCoord, this.spot.YCoord + 1, 0, turn, true);
        this.scanRow(map, this.spot.XCoord, this.spot.YCoord - 1, 1, turn, true);
        this.scanRow(map, this.spot.XCoord - 1, this.spot.YCoord, 2, turn, true);
        this.scanRow(map, this.spot.XCoord + 1, this.spot.YCoord, 3, turn, true);
        // console.log("Scan complete");
    }
    // Recursive scan of the surrounding area. 
    // Moves in opp direction of param dir - this is direction mob moves to find player
    // Prim represents whether row in direct line with player 
    scanRow(map, x, y, dir, turn, prim) {
        // If spot is open
        if (map[y][x].fill == 0) {
            let entity = {
                'player': this.player,
                'dir': dir,
                'prim': prim,
                'turn': turn
            }
            map[y][x].entityInZone = entity;

            switch (dir) {
                case 0:
                    // Move south
                    if (prim) {
                        // Sending out secondary scanners east and west
                        this.scanRow(map, x - 1, y, 2, turn, false);
                        this.scanRow(map, x + 1, y, 3, turn, false);
                    }
                    return this.scanRow(map, x, y + 1, dir, turn, prim);
                case 1:
                    // Move north
                    // Sending out secondary scanners east and west
                    if (prim) {
                        // Sending out secondary scanners east and west
                        this.scanRow(map, x - 1, y, 2, turn, false);
                        this.scanRow(map, x + 1, y, 3, turn, false);
                    }
                    return this.scanRow(map, x, y - 1, dir, turn, prim);
                case 2:
                    // Move west
                    if (prim) {
                        // Sending out secondary scanners north and south
                        this.scanRow(map, x, y + 1, 0, turn, false);
                        this.scanRow(map, x, y - 1, 1, turn, false);
                    }
                    return this.scanRow(map, x - 1, y, dir, turn, prim);
                case 3:
                    // Move east
                    if (prim) {
                        // Sending out secondary scanners north and south
                        this.scanRow(map, x, y + 1, 0, turn, false);
                        this.scanRow(map, x, y - 1, 1, turn, false);
                    }
                    return this.scanRow(map, x + 1, y, dir, turn, prim);

                default:
                    break;
            }
        } else {
            // console.log("Done recursing.");
            return true;
        }
    }
    // Used by monsters to move towards the player
    track(map) {
        if (map[this.spot.YCoord][this.spot.XCoord].entityInZone != null) {
            let dir = map[this.spot.YCoord][this.spot.XCoord].entityInZone.dir;
            return dir;
            // this.move(dir, map);
        } else {
            // console.log("Player not found!");
            return -1
        }
    }

    attack(target) {
        if (target.player == 2) {
            if(target.gold > 0){
                console.log("Opening: " + target.name);
                this.gold += target.gold;
                target.gold = 0;
                target.character = 'c '
            } else {
                console.log("Chest already open!");
            }
        } else {
            console.log("Attacking: " + target.name);

            target.hp -= 10;
            if (target.hp <= 0) {
                this.gold += target.gold;
                target.spot.entityOnSpot = null;
                target.spot = null;
                console.log("Destroyed target and took its gold");
            } else {
                console.log("Target hp is now: " + target.hp);
            }
        }
    }

}
