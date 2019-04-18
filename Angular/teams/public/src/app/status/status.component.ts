import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

    path
    players: ['']
    game

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _service: HttpService,
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            console.log(params['id'])
            this.path = parseInt(params['id']) - 1
            if (this.path > 2) {
                this._router.navigate(['players/game/1']);
            }
            this.game = ['secondary', 'secondary', 'secondary']
            this.game[this.path] = 'primary'
        });
        this.getAllFromService()
    }
    getAllFromService() {
        console.log("Getting all products");
        let observable = this._service.getAll();
        observable.subscribe(data => {
            console.log("Got our products!", data)
            this.players = data['products']
        });
    }

    onUpdate(player, status){
        console.log("Updating player " + player.name + " to status " + status);
        player.games[this.path] = status
        console.log(player);

        let observable = this._service.update(player._id, player);
        observable.subscribe(data => {
            console.log("Updated player!", data)
            this.getAllFromService()
        });
        
    }

}
