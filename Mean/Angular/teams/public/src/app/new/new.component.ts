import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

    constructor(private _service: HttpService, private _router: Router) { }
    newFrog: any
    valid: string

    ngOnInit() {
        this.newFrog = { name: "", position: "", games: [0, 0, 0] }
        this.valid = ""
    }

    onSubmit() {
        console.log("Submitting task:", this.newFrog);
        let observable = this._service.create(this.newFrog);
        observable.subscribe(data => {
            if(data['message'] == true){
                console.log("Created a new task!", data)
                this._router.navigate(['/players/list']);
                // this.newFrog = { name: "", position: "", games: [0, 0, 0] }
            } else {
                console.log("Task not created!", data)
                this.valid = data['error']['message']
            }
        });
    }

}
