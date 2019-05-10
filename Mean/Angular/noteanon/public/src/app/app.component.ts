import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    newNote: any
    notes: any
    ngOnInit() {
        this.newNote = { note: "" }
        this.getNotesFromService();
    }
    constructor(private _service: HttpService) { }

    onSubmit() {
        console.log("Creating Frog:", this.newNote);
        let observable = this._service.create(this.newNote);
        observable.subscribe(data => {
            console.log("Created a new message!", data)
            this.newNote = { note: "" }
            this.getNotesFromService()
        });
    }

    getNotesFromService() {
        console.log("Getting all notes");
        let observable = this._service.getAll();
        observable.subscribe(data => {
            this.notes = data['products']
            console.log("Got our notes!", this.notes)

            function compare(a, b) {
                if (a.createdAt > b.createdAt) return -1;
                if (b.createdAt < a.createdAt) return 1;
                return 0;
            }
            this.notes.sort(compare)

        });
    }

}
