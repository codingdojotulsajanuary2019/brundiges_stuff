import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Big Restful Task API';
    tasks = [];
    task;
    newTask: any
    updateTask: any
    update = false

    constructor(private _service: HttpService) { }

    ngOnInit() {
        console.log("Component initialized");

        this.newTask = { title: "", description: "", completed: false }
        this.updateTask = { _id: "", title: "", description: "", completed: false }
        this.getTasksFromService();
    }

    getTasksFromService() {
        console.log("Getting all tasks");
        let observable = this._service.getAll();
        observable.subscribe(data => {
            console.log("Got our tasks!", data)
            this.tasks = data['tasks']
        });
    }

    getOneFromService(title: string) {
        console.log("Getting one task");

        let observable = this._service.getOne(title);
        observable.subscribe(data => {
            console.log("Got a task with id " + title, data)
            this.task = data['task']
        });
    }

    onSubmit() {
        console.log("Submitting task:", this.newTask);
        let observable = this._service.create(this.newTask);
        observable.subscribe(data => {
            console.log("Created a new task!", data)
            this.newTask = { title: "", description: "", completed: false }
            this.getTasksFromService()
        });
    }

    onDelete(id: string) {
        console.log("Deleting task:", id);
        let observable = this._service.delete(id);
        observable.subscribe(data => {
            console.log("Created a new task!", data)
            this.newTask = { title: "", description: "", completed: false }
            this.getTasksFromService()
        });
    }

    showEditWindow(id: string, title: string, description: string) {
        console.log("Opening edit window for id " + id);
        this.update = true;
        this.updateTask = { _id: id, title: title, description: description, completed: false }
    }

    onUpdate() {
        console.log("Updating task:", this.updateTask);
        let observable = this._service.update(this.updateTask['_id'], this.updateTask);
        observable.subscribe(data => {
            console.log("Update request unerrant!", data)
            this.updateTask = { _id: "", title: "", description: "", completed: false }
            this.getTasksFromService()
        });
    }
}
