(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n\tbackground-color: #ebebeb;\r\n}\r\n*{\r\n    font-family: roboto;\r\n}\r\n.container{\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 25px;\r\n\talign-content: center;\r\n    vertical-align: bottom;\r\n    /* padding: 20px; */\r\n\twidth: 480px;\r\n\tmin-height: 480px;\r\n\tbackground-color: white;\r\n}\r\n.app{\r\n    border: magenta 1px dotted \r\n}\r\np{\r\n\tmargin-bottom: 8px;\r\n}\r\nimg{\r\n    max-width:500px;\r\n}\r\na{\r\ntext-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0NBQ0MsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixxQkFBcUI7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtDQUN0QixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLHVCQUF1QjtBQUN4QjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxufVxyXG4qe1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG5cdHdpZHRoOiA0ODBweDtcclxuXHRtaW4taGVpZ2h0OiA0ODBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFwcHtcclxuICAgIGJvcmRlcjogbWFnZW50YSAxcHggZG90dGVkIFxyXG59XHJcblxyXG5we1xyXG5cdG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5pbWd7XHJcbiAgICBtYXgtd2lkdGg6NTAwcHg7XHJcbn1cclxuYXtcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container app\">\r\n    <!--The content below is only a placeholder and can be replaced.-->\r\n    <h2>Welcome to {{ title }}!</h2>\r\n    <button class=\"btn btn-primary\" (click)=\"getTasksFromService()\">Get Tasks</button>\r\n\r\n    <form (submit)=\"onSubmit()\">\r\n        <label for=\"newTask.title\">Title</label>\r\n        <input type=\"text\" name=\"newTask.title\" [(ngModel)]=\"newTask.title\" />\r\n        <label for=\"newTask.description\">Description</label>\r\n        <input type=\"text\" name=\"newTask.description\" [(ngModel)]=\"newTask.description\" />\r\n        <input type=\"submit\" value=\"Create Task\" />\r\n    </form>\r\n\r\n    <h3>All Tasks:</h3>\r\n    <div *ngFor=\"let task of tasks\">\r\n        <p>Name: {{task.title}} | Desc: {{task.description}}</p>\r\n        <button (click)=\"showEditWindow(task._id, task.title, task.description)\">Edit Task</button>\r\n        <button (click)=\"onDelete(task._id)\">Delete Task</button>\r\n        <button (click)=\"getOneFromService(task._id)\">Show Task</button>\r\n    </div>\r\n    <form *ngIf=\"update\" (submit)=\"onUpdate()\">\r\n        <h3>Update Task:</h3>\r\n        <label for=\"updateTask.title\">Title</label>\r\n        <input type=\"text\" name=\"updateTask.title\" [(ngModel)]=\"updateTask.title\" />\r\n        <label for=\"updateTask.description\">Description</label>\r\n        <input type=\"text\" name=\"updateTask.description\" [(ngModel)]=\"updateTask.description\" />\r\n        <input type=\"hidden\" name=\"newTask._id\" [(ngModel)]=\"newTask._id\" />\r\n        <input type=\"submit\" value=\"Update Task\" />\r\n    </form>\r\n    <app-task *ngIf=\"task\" [task]=\"task\"></app-task>\r\n    <!-- <p *ngIf=\"task\">Title: {{task.title}}</p> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_service) {
        this._service = _service;
        this.title = 'Big Restful Task API';
        this.tasks = [];
        this.update = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("Component initialized");
        this.newTask = { title: "", description: "", completed: false };
        this.updateTask = { _id: "", title: "", description: "", completed: false };
        // this.getTasksFromService();
    };
    AppComponent.prototype.getTasksFromService = function () {
        var _this = this;
        console.log("Getting all tasks");
        var observable = this._service.getAll();
        observable.subscribe(function (data) {
            console.log("Got our tasks!", data);
            _this.tasks = data['tasks'];
        });
    };
    AppComponent.prototype.getOneFromService = function (title) {
        var _this = this;
        console.log("Getting one task");
        var observable = this._service.getOne(title);
        observable.subscribe(function (data) {
            _this.task = data['task'];
            console.log("Got a task with id " + title, _this.task);
        });
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Submitting task:", this.newTask);
        var observable = this._service.create(this.newTask);
        observable.subscribe(function (data) {
            console.log("Created a new task!", data);
            _this.newTask = { title: "", description: "", completed: false };
            _this.getTasksFromService();
        });
    };
    AppComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log("Deleting task:", id);
        var observable = this._service.delete(id);
        observable.subscribe(function (data) {
            console.log("Created a new task!", data);
            _this.newTask = { title: "", description: "", completed: false };
            _this.getTasksFromService();
        });
    };
    AppComponent.prototype.showEditWindow = function (id, title, description) {
        console.log("Opening edit window for id " + id);
        this.update = true;
        this.updateTask = { _id: id, title: title, description: description, completed: false };
    };
    AppComponent.prototype.onUpdate = function () {
        var _this = this;
        console.log("Updating task:", this.updateTask);
        var observable = this._service.update(this.updateTask['_id'], this.updateTask);
        observable.subscribe(function (data) {
            console.log("Update request unerrant!", data);
            _this.updateTask = { _id: "", title: "", description: "", completed: false };
            _this.getTasksFromService();
            _this.update = false;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        console.log("Initializing HTTP Service");
        // this.getAll();
        // this.getOne("");
        // this.create();
        // this.update("");
        // this.delete("");
    }
    HttpService.prototype.getAll = function () {
        //   let tempObservable = this._http.get('/tasks');
        //   tempObservable.subscribe(data => console.log("Got all tasks!", data));
        return this._http.get('/tasks');
    };
    HttpService.prototype.getOne = function (title) {
        return this._http.get("/tasks/" + title);
    };
    HttpService.prototype.create = function (body) {
        return this._http.post("/tasks/", body);
    };
    HttpService.prototype.update = function (title, body) {
        return this._http.put("/tasks/" + title, body);
    };
    HttpService.prototype.delete = function (title) {
        return this._http.delete("/tasks/" + title);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task{\r\n    border: lime 1px dotted;\r\n    margin: 2px;\r\n}\r\n\r\nimg {\r\n    max-width: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFza3tcclxuICAgIGJvcmRlcjogbGltZSAxcHggZG90dGVkO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"task\">\n\n    <h3>Featured Task:</h3>\n    <p>Name: {{task.title}} | Desc: {{task.description}}</p>\n</div>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "task", void 0);
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Geoff\Documents\GitHub\03 - MEAN\brundiges_stuff\Angular\task_api\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map