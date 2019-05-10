import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    frogs = [];
    task;
    newFrog: any
    oneFrog: any
    newRating: any
    update = false

    constructor(private _service: HttpService) { }

    ngOnInit() {
        console.log("Component initialized");
        this.newFrog = { name: "", url: "" }
        this.oneFrog = { name: "", url: "" }
        this.newRating = { review: "", rating: "5" }
        this.getFrogsFromService();
    }

    getFrogsFromService() {
        console.log("Getting all frogs");
        let observable = this._service.getAll();
        observable.subscribe(data => {
            console.log("Got our frogs!", data)
            this.frogs = data['frogs']
            // this.oneFrog = data['frogs'][0];
        });
    }

    createFrog() {
        console.log("Creating Frog:", this.newFrog);
        let observable = this._service.create(this.newFrog);
        observable.subscribe(data => {
            console.log("Created a new task!", data)
            this.newFrog = { title: "", description: "", completed: false }
            this.getFrogsFromService()
        });
    }

    rateFrog(_id: string) {
        console.log('Creating new review for frog ' + _id, this.newRating);
        let observable = this._service.review(_id, this.newRating);
        observable.subscribe(data => {
            console.log("Created a new review!", data)
            this.selectFrog(_id)
            this.newRating = { review: "", rating: "5" }
        });
    }
    selectFrog(name: any) {
        console.log("Getting one frog");
        let observable = this._service.getOne(name);
        observable.subscribe(data => {
            this.oneFrog = data['frog']
            console.log("Got a frog with id " + name, this.oneFrog)
            if (this.oneFrog.reviews.length == 0) {
                this.oneFrog['stars'] = "No reviews"
            } else {
                var sum = 0
                for (let x = 0; x < this.oneFrog.reviews.length; x++) {
                    sum += this.oneFrog.reviews[x].rating
                }
                // console.log("Average rating: " + sum);
                sum = (sum / this.oneFrog.reviews.length)
                sum = Math.floor(sum * 4) / 4
                this.oneFrog['stars'] = sum
            }
        });
    }

    onDelete(id: string) {
        console.log("Deleting task:", id);
        let observable = this._service.delete(id);
        observable.subscribe(data => {
            console.log("Deleted a frog!", data)
            this.newFrog = { title: "", description: "", completed: false }
            this.getFrogsFromService()
        });
    }
}

