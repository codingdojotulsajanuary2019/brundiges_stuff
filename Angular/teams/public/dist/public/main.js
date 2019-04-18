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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    { path: 'players/list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"] },
    { path: 'players/add', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
    { path: 'players/game/:id', component: _status_status_component__WEBPACK_IMPORTED_MODULE_3__["StatusComponent"] },
    // use a colon and parameter name to include a parameter in the url
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: 'players/list' },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', redirectTo: 'players/list' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    font-family: roboto;\r\n}\r\n\r\nh1,h2,h3,h4,h5,h6{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nimg {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    width:200px;\r\n    height:200px;\r\n    border-radius: 10px;\r\n    border: #256c8d 4px solid;\r\n  }\r\n\r\n.container{\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 25px;\r\n\talign-content: center;\r\n\tvertical-align: bottom;\r\n\twidth: 960px;\r\n\tmin-height: 480px;\r\n    background-color: #f0f0f0;\r\n    /* background-color: magenta; */\r\n\tborder-radius: 0px 0px 30px 30px;\r\n\tborder: #256c8d 4px solid;\r\n}\r\n\r\n.allFrogs{\r\n    max-height: 490px;\r\n    overflow: auto;\r\n}\r\n\r\np{\r\n\tmargin-bottom: 8px;\r\n}\r\n\r\nimg{\r\n    max-width:500px;\r\n}\r\n\r\na{\r\ntext-align: right;\r\n}\r\n\r\n.top{\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tpadding-left: 10px;\r\n\tbackground-color: #256c8d;\r\n\tcolor: white;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.longboi{\r\n    width: 500px;\r\n}\r\n\r\n.failure{\r\n    color: #c42f1a;\r\n    border-color: #c42f1a;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #256c8d;\r\n    border-color: #256c8d\r\n}\r\n\r\n.btn-primary:hover{\r\n    background-color: #18485e;\r\n    border-color: #18485e\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7O0FBRUY7Q0FDQyxjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGlCQUFpQjtJQUNkLHlCQUF5QjtJQUN6QiwrQkFBK0I7Q0FDbEMsZ0NBQWdDO0NBQ2hDLHlCQUF5QjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osbUJBQW1CO0FBQ3BCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekI7QUFDSjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxufVxyXG5cclxuaDEsaDIsaDMsaDQsaDUsaDZ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogIzI1NmM4ZCA0cHggc29saWQ7XHJcbiAgfVxyXG5cclxuLmNvbnRhaW5lcntcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG5cdHdpZHRoOiA5NjBweDtcclxuXHRtaW4taGVpZ2h0OiA0ODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhOyAqL1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweCAwcHggMzBweCAzMHB4O1xyXG5cdGJvcmRlcjogIzI1NmM4ZCA0cHggc29saWQ7XHJcbn1cclxuXHJcbi5hbGxGcm9nc3tcclxuICAgIG1heC1oZWlnaHQ6IDQ5MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnB7XHJcblx0bWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcbmltZ3tcclxuICAgIG1heC13aWR0aDo1MDBweDtcclxufVxyXG5he1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udG9we1xyXG5cdHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2YzhkO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5sb25nYm9pe1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uZmFpbHVyZXtcclxuICAgIGNvbG9yOiAjYzQyZjFhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYzQyZjFhO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2YzhkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjU2YzhkXHJcbn1cclxuLmJ0bi1wcmltYXJ5OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NDg1ZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzE4NDg1ZVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"top row\">\n        <h1>Team Manager</h1>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm\">\n            <button class=\"btn btn-primary\" [routerLink]=\"['/players/list']\">Manage Players</button>\n        </div>\n        <div class=\"col col-sm\">\n            <button class=\"btn btn-primary\" [routerLink]=\"['/players/game/1']\">Manage Statuses</button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <hr class=\"my-h5\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin.service */ "./src/app/coin.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(_service, _httpService) {
        this._service = _service;
        this.ledger = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.ledger = this._service.shareLedger();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_coin_service__WEBPACK_IMPORTED_MODULE_2__["CoinService"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _coin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coin.service */ "./src/app/coin.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_10__["StatusComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_coin_service__WEBPACK_IMPORTED_MODULE_11__["CoinService"], _http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/coin.service.ts":
/*!*********************************!*\
  !*** ./src/app/coin.service.ts ***!
  \*********************************/
/*! exports provided: CoinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinService", function() { return CoinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoinService = /** @class */ (function () {
    function CoinService() {
        console.log("Initializing CoinService");
        this.ledger = [];
        this.coin = { 'wallet': 0, 'value': 1 };
    }
    CoinService.prototype.shareLedger = function () {
        return this.ledger;
    };
    CoinService.prototype.shareCoin = function () {
        return this.coin;
    };
    CoinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoinService);
    return CoinService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Home Page</h3>\n<p>Build a product manager app in which a user may view a home page, the product list page, product creation page (with validations), and product edit page (with validations). Reference the wireframe below for details: REMINDER: When building applications which include forms and http requests, be sure to import the 'FormsModule' and 'HttpClientModule' in your AppModule file</p>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        console.log("Initializing HTTP Service");
    }
    HttpService.prototype.getAll = function () {
        return this._http.get('/api/players');
    };
    HttpService.prototype.getOne = function (id) {
        return this._http.get("/api/players/" + id);
    };
    HttpService.prototype.create = function (body) {
        return this._http.post("/api/players/", body);
    };
    HttpService.prototype.update = function (title, body) {
        return this._http.put("/api/players/" + title, body);
    };
    HttpService.prototype.delete = function (title) {
        return this._http.delete("/api/players/" + title);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .btn-primary{\r\n    background-color: #256c8d;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NmM4ZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-secondary mb-4\">List</button>\n<button class=\"btn btn-primary mb-4\" [routerLink]=\"['/players/add']\">Add Players</button>\n\n<div class=\"row mb-4\">\n    <div class=\"col\">\n        <h3 class=\"mb-3\">All Players</h3>\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Name</th>\n                    <th scope=\"col\">Position</th>\n                    <th scope=\"col\">Actions</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let player of players\">\n                    <td>{{player.name}}</td>\n                    <td>{{player.position}}</td>\n                    <td>\n                        <form (submit)=\"delete(player.id)\">\n                            <input type=\"submit\" value=\"Delete\" class=\"btn btn-danger\" />\n                        </form>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coin.service */ "./src/app/coin.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ListComponent = /** @class */ (function () {
    function ListComponent(_service, _CoinService, _router) {
        this._service = _service;
        this._CoinService = _CoinService;
        this._router = _router;
        this.players = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        console.log("List Component Initialized");
        this.getAllFromService();
    };
    ListComponent.prototype.getAllFromService = function () {
        var _this = this;
        console.log("Getting all products");
        var observable = this._service.getAll();
        observable.subscribe(function (data) {
            console.log("Got our products!", data);
            _this.players = data['products'];
        });
    };
    ListComponent.prototype.editProduct = function (id) {
        var url = '/product/new/' + id;
        this._router.navigate([url]);
    };
    ListComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        console.log("Deleting task:", id);
        var observable = this._service.delete(id);
        observable.subscribe(function (data) {
            console.log("Deleted a product!", data);
            _this.getAllFromService();
        });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _coin_service__WEBPACK_IMPORTED_MODULE_2__["CoinService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary{\r\n    background-color: #256c8d;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NmM4ZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col col-sm\">\n        <button class=\"btn btn-primary mb-4\" [routerLink]=\"['/players/list']\">List</button>\n    </div>\n    <div class=\"col col-sm\">\n        <button class=\"btn btn-secondary mb-4\">Add Players</button>\n    </div>\n</div>\n\n<div class=\"row mb-4\">\n    <div class=\"col col-md-5\">\n        <h3 class=\"mb-3\">Add Player</h3>\n        <p *ngIf=\"valid != ''\">{{valid}}</p>\n        <form (submit)=\"onSubmit()\">\n            <div class=\"input-group mb-3\">\n                <div class=\"col\">\n                    <input name=\"newFrog.name\" class=\"form-control mb-3\" placeholder=\"Name\" type=\"text\"\n                        [(ngModel)]=\"newFrog.name\" />\n                    <input name=\"newFrog.position\" class=\"form-control mb-3\" placeholder=\"Position\" type=\"text\"\n                        [(ngModel)]=\"newFrog.position\" />\n                    <input type=\"submit\" value=\"Create Frog\" class=\"btn btn-primary\" />\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewComponent = /** @class */ (function () {
    function NewComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newFrog = { name: "", position: "", games: [0, 0, 0] };
        this.valid = "";
    };
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Submitting task:", this.newFrog);
        var observable = this._service.create(this.newFrog);
        observable.subscribe(function (data) {
            if (data['message'] == true) {
                console.log("Created a new task!", data);
                _this._router.navigate(['/players/list']);
                // this.newFrog = { name: "", position: "", games: [0, 0, 0] }
            }
            else {
                console.log("Task not created!", data);
                _this.valid = data['error']['message'];
            }
        });
    };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/status/status.component.css":
/*!*********************************************!*\
  !*** ./src/app/status/status.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary{\r\n    background-color: #256c8d;\r\n    border-color: #256c8d\r\n}\r\n.btn-primary:hover{\r\n    color: white;\r\n    background-color: #18485e;\r\n    border-color: #18485e\r\n}\r\n.btn-danger{\r\n    color: white;\r\n\tbackground-color: #c42f1a;\r\n}\r\n.btn-danger:hover{\r\n    color: white;\r\n\tbackground-color: #942314;\r\n}\r\n.btn-warning{\r\n    color: white;\r\n\tbackground-color: #e7b53b;\r\n}\r\n.btn-warning:hover{\r\n    color: white;\r\n\tbackground-color: #b99333;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekI7QUFDSjtBQUVBO0lBQ0ksWUFBWTtDQUNmLHlCQUF5QjtBQUMxQjtBQUVBO0lBQ0ksWUFBWTtDQUNmLHlCQUF5QjtBQUMxQjtBQUVBO0lBQ0ksWUFBWTtDQUNmLHlCQUF5QjtBQUMxQjtBQUVBO0lBQ0ksWUFBWTtDQUNmLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTZjOGQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNTZjOGRcclxufVxyXG4uYnRuLXByaW1hcnk6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg0ODVlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTg0ODVlXHJcbn1cclxuXHJcbi5idG4tZGFuZ2Vye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjNDJmMWE7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM5NDIzMTQ7XHJcbn1cclxuXHJcbi5idG4td2FybmluZ3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTdiNTNiO1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmc6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2I5OTMzMztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Player Status - Game {{path+1}}</h3>\n\n<div class=\"row\">\n    <div class=\"col col-sm\">\n        <button class=\"btn btn-{{game[0]}} mb-4\" [routerLink]=\"['/players/game/1']\">Game One</button>\n    </div>\n    <div class=\"col col-sm\">\n        <button class=\"btn btn-{{game[1]}} mb-4\" [routerLink]=\"['/players/game/2']\">Game Two</button>\n    </div>\n    <div class=\"col col-sm\">\n        <button class=\"btn btn-{{game[2]}} mb-4\" [routerLink]=\"['/players/game/3']\">Game Three</button>\n    </div>\n</div>\n\n<div class=\"row mb-4\">\n    <div class=\"col\">\n        <h3 class=\"mb-3\">All Players</h3>\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Name</th>\n                    <th scope=\"col\">Position</th>\n                    <th scope=\"col\">Actions</th>\n                    <th scope=\"col\"></th>\n                    <th scope=\"col\"></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let player of players\">\n                    <td>{{player.name}}</td>\n                    <td>{{player.position}}</td>\n                    <td>\n                        <button *ngIf=\"player.games[path]==0\" type=\"submit\" class=\"btn btn-primary\">Playing</button>\n                        <button *ngIf=\"player.games[path]!=0\" (click)=\"onUpdate(player, 0)\" type=\"submit\" value=\"Playing\"\n                            class=\"btn btn-light\">Playing</button>\n                    </td>\n                    <td>\n                        <button *ngIf=\"player.games[path]==1\" type=\"submit\" class=\"btn btn-danger\">Not Playing</button>\n                        <button *ngIf=\"player.games[path]!=1\" (click)=\"onUpdate(player, 1)\" type=\"submit\" value=\"Playing\"\n                            class=\"btn btn-light\">Not\n                            Playing</button>\n                    </td>\n                    <td>\n                        <button *ngIf=\"player.games[path]==2\" type=\"submit\" class=\"btn btn-warning\">Undecided</button>\n                        <button *ngIf=\"player.games[path]!=2\" (click)=\"onUpdate(player, 2)\" type=\"submit\" value=\"Playing\"\n                            class=\"btn btn-light\">Undecided</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var StatusComponent = /** @class */ (function () {
    function StatusComponent(_route, _router, _service) {
        this._route = _route;
        this._router = _router;
        this._service = _service;
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.path = parseInt(params['id']) - 1;
            if (_this.path > 2) {
                _this._router.navigate(['players/game/1']);
            }
            _this.game = ['secondary', 'secondary', 'secondary'];
            _this.game[_this.path] = 'primary';
        });
        this.getAllFromService();
    };
    StatusComponent.prototype.getAllFromService = function () {
        var _this = this;
        console.log("Getting all products");
        var observable = this._service.getAll();
        observable.subscribe(function (data) {
            console.log("Got our products!", data);
            _this.players = data['products'];
        });
    };
    StatusComponent.prototype.onUpdate = function (player, status) {
        var _this = this;
        console.log("Updating player " + player.name + " to status " + status);
        player.games[this.path] = status;
        console.log(player);
        var observable = this._service.update(player._id, player);
        observable.subscribe(function (data) {
            console.log("Updated player!", data);
            _this.getAllFromService();
        });
    };
    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/status/status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], StatusComponent);
    return StatusComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Geoff\Documents\GitHub\03 - MEAN\brundiges_stuff\Angular\teams\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map