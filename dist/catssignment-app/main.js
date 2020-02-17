(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cats_cats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cats/cats.component */ "./src/app/cats/cats.component.ts");
/* harmony import */ var _cats_cats_list_cats_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cats/cats-list/cats-list.component */ "./src/app/cats/cats-list/cats-list.component.ts");
/* harmony import */ var _cats_cats_list_cats_details_cats_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cats/cats-list/cats-details/cats-details.component */ "./src/app/cats/cats-list/cats-details/cats-details.component.ts");








const appRoutes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: "browse",
        component: _cats_cats_component__WEBPACK_IMPORTED_MODULE_3__["CatsComponent"]
    },
    {
        path: "wikipedicat",
        component: _cats_cats_list_cats_list_component__WEBPACK_IMPORTED_MODULE_4__["CatsListComponent"]
    },
    {
        path: "wikipedicat/:breedId",
        component: _cats_cats_list_cats_details_cats_details_component__WEBPACK_IMPORTED_MODULE_5__["CatsDetailsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'catssignment-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "background"], [1, "box-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  color: rgb(7, 7, 7);\n}\nbody[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n.background[_ngcontent-%COMP%] {\n  height: 100vh;\n  background: -webkit-gradient(linear, left top, right top, from(#bb617a), to(#ffc85ae8));\n  background: linear-gradient(to right, #bb617a, #ffc85ae8);\n}\n.box-container[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 20px;\n  box-shadow: 0 0.5rem 7rem rgba(2, 2, 2, 0.39);\n  width: 80%;\n  background: rgb(255, 255, 255);\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qjs7Y0FFWTtFQUNaLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUZBQXlEO0VBQXpELHlEQUF5RDtBQUMzRDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLDZDQUE2QztFQUM3QyxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLFxuICAgIFwiVWJ1bnR1XCIsIFwiQ2FudGFyZWxsXCIsIFwiRmlyYSBTYW5zXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgY29sb3I6IHJnYig3LCA3LCA3KTtcbn1cbmJvZHkge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uYmFja2dyb3VuZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2JiNjE3YSwgI2ZmYzg1YWU4KTtcbn1cbi5ib3gtY29udGFpbmVyIHtcbiAgb3BhY2l0eTogMC45O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSA3cmVtIHJnYmEoMiwgMiwgMiwgMC4zOSk7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _cats_cats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cats/cats.component */ "./src/app/cats/cats.component.ts");
/* harmony import */ var _cats_cats_list_cats_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cats/cats-list/cats-list.component */ "./src/app/cats/cats-list/cats-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cats_cats_list_cats_details_cats_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cats/cats-list/cats-details/cats-details.component */ "./src/app/cats/cats-list/cats-details/cats-details.component.ts");
/* harmony import */ var _cats_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cats/auth-interceptor.service */ "./src/app/cats/auth-interceptor.service.ts");
/* harmony import */ var _cats_cats_list_cats_search_cats_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cats/cats-list/cats-search/cats-search.component */ "./src/app/cats/cats-list/cats-search/cats-search.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _cats_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], multi: true }
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
        _cats_cats_component__WEBPACK_IMPORTED_MODULE_6__["CatsComponent"],
        _cats_cats_list_cats_list_component__WEBPACK_IMPORTED_MODULE_7__["CatsListComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _cats_cats_list_cats_details_cats_details_component__WEBPACK_IMPORTED_MODULE_10__["CatsDetailsComponent"],
        _cats_cats_list_cats_search_cats_search_component__WEBPACK_IMPORTED_MODULE_12__["CatsSearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                    _cats_cats_component__WEBPACK_IMPORTED_MODULE_6__["CatsComponent"],
                    _cats_cats_list_cats_list_component__WEBPACK_IMPORTED_MODULE_7__["CatsListComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _cats_cats_list_cats_details_cats_details_component__WEBPACK_IMPORTED_MODULE_10__["CatsDetailsComponent"],
                    _cats_cats_list_cats_search_cats_search_component__WEBPACK_IMPORTED_MODULE_12__["CatsSearchComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _cats_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cats/auth-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/cats/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
class AuthInterceptor {
    intercept(request, next) {
        //add the required authentication to use API
        const modifiedRequest = request.clone({
            headers: request.headers.append("x-api-key", "516c291b-de24-4785-9578-3ae08088836b")
        });
        return next.handle(modifiedRequest);
    }
}


/***/ }),

/***/ "./src/app/cats/cats-list/cats-details/cats-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cats/cats-list/cats-details/cats-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: CatsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsDetailsComponent", function() { return CatsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CatsDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.loadBreed.name, "\n");
} }
function CatsDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hey, just curious...How would you describe yourself? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hmm...Sounds unreal...Where are you from?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Moi? ", ctx_r8.loadBreed.temperament, "!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.loadBreed.origin, ".");
} }
function CatsDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ok...I'm impressed...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Do not mean to brag but you might want to check out my ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wikipedia page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Believe it or not, this is what hoomans talk about me: \"", ctx_r9.loadBreed.description, "\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r9.loadBreed.wikipedia_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CatsDetailsComponent {
    constructor(actRoute, http) {
        this.actRoute = actRoute;
        this.http = http;
        this.baseUrl = "https://api.thecatapi.com/v1/breeds/";
        this.isFetching = false;
        //get the route params to fetch each breed
        this.breed_id = this.actRoute.snapshot.params.breedId;
    }
    ngOnInit() {
        this.feedBreed();
    }
    feedBreed() {
        this.isFetching = true;
        this.http.get(this.baseUrl + this.breed_id).subscribe(breed => {
            this.isFetching = false;
            this.loadBreed = breed;
        }, error => {
            console.log(error);
        });
    }
}
CatsDetailsComponent.ɵfac = function CatsDetailsComponent_Factory(t) { return new (t || CatsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CatsDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatsDetailsComponent, selectors: [["app-cats-details"]], decls: 4, vars: 3, consts: [["class", "name", 4, "ngIf"], [1, "frame"], ["class", "frame-left", 4, "ngIf"], ["class", "frame-right", 4, "ngIf"], [1, "name"], [1, "frame-left"], [1, "from-me"], [1, "from-them"], [1, "frame-right"], ["target", "_blank", 3, "href"]], template: function CatsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CatsDetailsComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CatsDetailsComponent_div_2_Template, 9, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CatsDetailsComponent_div_3_Template, 9, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadBreed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadBreed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadBreed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".name[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 300;\n  background: -webkit-gradient(linear, left top, right top, from(#d3959b), to(#9ff0d9));\n  background: linear-gradient(to right, #d3959b, #9ff0d9);\n  margin-top: 0.3rem;\n  color: white;\n}\n.frame[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20rem;\n  display: table;\n}\n.frame-left[_ngcontent-%COMP%] {\n  width: 50%;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 1rem;\n}\n.frame-right[_ngcontent-%COMP%] {\n  width: 50%;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 1rem;\n}\np[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  margin-bottom: 12px;\n  line-height: 24px;\n  position: relative;\n  padding: 10px 20px;\n  border-radius: 25px;\n}\np[_ngcontent-%COMP%]:before, p[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -2px;\n  height: 20px;\n}\n.from-me[_ngcontent-%COMP%] {\n  color: white;\n  background: #259ff7;\n  align-self: flex-end;\n}\n.from-me[_ngcontent-%COMP%]:before {\n  right: -7px;\n  border-right: 20px solid #259ff7;\n  border-bottom-left-radius: 16px 14px;\n  -webkit-transform: translate(0, -2px);\n          transform: translate(0, -2px);\n}\n.from-me[_ngcontent-%COMP%]:after {\n  right: -56px;\n  width: 26px;\n  background: white;\n  border-bottom-left-radius: 10px;\n  -webkit-transform: translate(-30px, -2px);\n          transform: translate(-30px, -2px);\n}\n.from-them[_ngcontent-%COMP%] {\n  background: #e5e5ea;\n  color: black;\n}\n.from-them[_ngcontent-%COMP%]:before {\n  left: -7px;\n  border-left: 20px solid #e5e5ea;\n  border-bottom-right-radius: 16px 14px;\n  -webkit-transform: translate(0, -2px);\n          transform: translate(0, -2px);\n}\n.from-them[_ngcontent-%COMP%]:after {\n  left: 4px;\n  width: 26px;\n  background: white;\n  border-bottom-right-radius: 10px;\n  -webkit-transform: translate(-30px, -2px);\n          transform: translate(-30px, -2px);\n}\na[_ngcontent-%COMP%] {\n  color: rgb(39, 156, 252);\n}\na[_ngcontent-%COMP%]:hover {\n  color: rgb(24, 102, 165);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0cy9jYXRzLWxpc3QvY2F0cy1kZXRhaWxzL2NhdHMtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFGQUF1RDtFQUF2RCx1REFBdUQ7RUFDdkQsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxxQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IseUNBQWlDO1VBQWpDLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixxQ0FBcUM7RUFDckMscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLHlDQUFpQztVQUFqQyxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY2F0cy9jYXRzLWxpc3QvY2F0cy1kZXRhaWxzL2NhdHMtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWUge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2QzOTU5YiwgIzlmZjBkOSk7XG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjByZW07XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLmZyYW1lLWxlZnQge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLmZyYW1lLXJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxucCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxucDpiZWZvcmUsXG5wOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0ycHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi5mcm9tLW1lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMjU5ZmY3O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5mcm9tLW1lOmJlZm9yZSB7XG4gIHJpZ2h0OiAtN3B4O1xuICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgIzI1OWZmNztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTZweCAxNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMnB4KTtcbn1cblxuLmZyb20tbWU6YWZ0ZXIge1xuICByaWdodDogLTU2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsIC0ycHgpO1xufVxuXG4uZnJvbS10aGVtIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlYTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmZyb20tdGhlbTpiZWZvcmUge1xuICBsZWZ0OiAtN3B4O1xuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjZTVlNWVhO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweCAxNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMnB4KTtcbn1cblxuLmZyb20tdGhlbTphZnRlciB7XG4gIGxlZnQ6IDRweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsIC0ycHgpO1xufVxuYSB7XG4gIGNvbG9yOiByZ2IoMzksIDE1NiwgMjUyKTtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogcmdiKDI0LCAxMDIsIDE2NSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatsDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-cats-details",
                templateUrl: "./cats-details.component.html",
                styleUrls: ["./cats-details.component.css"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cats/cats-list/cats-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/cats/cats-list/cats-list.component.ts ***!
  \*******************************************************/
/*! exports provided: CatsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsListComponent", function() { return CatsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _cats_search_cats_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cats-search/cats-search.component */ "./src/app/cats/cats-list/cats-search/cats-search.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function CatsListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CatsListComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breed_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", breed_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breed_r6.name);
} }
function CatsListComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatsListComponent_ul_6_li_1_Template, 3, 2, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.loadedBreeds);
} }
class CatsListComponent {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://api.thecatapi.com/v1/breeds/";
        this.loadedBreeds = [];
    }
    ngOnInit() {
        this.fetchBreeds();
    }
    fetchBreeds() {
        this.http.get(this.baseUrl).subscribe(breeds => {
            this.loadedBreeds = breeds;
        });
    }
}
CatsListComponent.ɵfac = function CatsListComponent_Factory(t) { return new (t || CatsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CatsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatsListComponent, selectors: [["app-cats-list"]], decls: 7, vars: 2, consts: [[1, "big-container"], [1, "side-left"], [1, "side-right"], ["class", "spinner", 4, "ngIf"], [1, "row"], [4, "ngIf"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"], ["class", "col-5", 4, "ngFor", "ngForOf"], [1, "col-5"], ["routerLinkActive", "active", 3, "routerLink"]], template: function CatsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cats-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CatsListComponent_div_4_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CatsListComponent_ul_6_Template, 2, 1, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadedBreeds && ctx.loadedBreeds.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadedBreeds && ctx.loadedBreeds.length >= 1);
    } }, directives: [_cats_search_cats_search_component__WEBPACK_IMPORTED_MODULE_2__["CatsSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: [".big-container[_ngcontent-%COMP%] {\n  background-image: -webkit-gradient(\n      linear,\n      left top, left bottom,\n      from(rgba(255, 255, 255, 0.7)),\n      to(rgba(255, 255, 255, 0.7))\n    ),\n    url('browse_background.jpg');\n  background-image: linear-gradient(\n      rgba(255, 255, 255, 0.7),\n      rgba(255, 255, 255, 0.7)\n    ),\n    url('browse_background.jpg');\n  overflow-y: scroll;\n  height: 75vh;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n}\na[_ngcontent-%COMP%] {\n  color: rgb(39, 156, 252);\n}\na[_ngcontent-%COMP%]:hover {\n  color: rgb(24, 102, 165);\n}\nli[_ngcontent-%COMP%] {\n  list-style: none;\n}\np[_ngcontent-%COMP%] {\n  color: rgb(37, 37, 37);\n}\n.side-left[_ngcontent-%COMP%] {\n  width: 40%;\n  background: -webkit-gradient(linear, left top, right top, from(#d3959b), to(#9ff0d9));\n  background: linear-gradient(to right, #d3959b, #9ff0d9);\n  height: 300%;\n  display: inline-block;\n  float: left;\n}\n.side-right[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 60%;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0cy9jYXRzLWxpc3QvY2F0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTs7Ozs7O2dDQUl5QztFQUp6Qzs7OztnQ0FJeUM7RUFDekMsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHFGQUF1RDtFQUF2RCx1REFBdUQ7RUFDdkQsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY2F0cy9jYXRzLWxpc3QvY2F0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlnLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KVxuICAgICksXG4gICAgdXJsKC4uLy4uL2ltYWdlcy9icm93c2VfYmFja2dyb3VuZC5qcGcpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogNzV2aDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiA2cHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5hIHtcbiAgY29sb3I6IHJnYigzOSwgMTU2LCAyNTIpO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMjQsIDEwMiwgMTY1KTtcbn1cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbnAge1xuICBjb2xvcjogcmdiKDM3LCAzNywgMzcpO1xufVxuLnNpZGUtbGVmdCB7XG4gIHdpZHRoOiA0MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2QzOTU5YiwgIzlmZjBkOSk7XG4gIGhlaWdodDogMzAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbn1cbi5zaWRlLXJpZ2h0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG4iXX0= */", ".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.row[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.row[_ngcontent-%COMP%]   [class^=\"col\"][_ngcontent-%COMP%] {\n  float: left;\n  margin: 0.5rem 2%;\n  min-height: 0.125rem;\n}\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%] {\n  width: 96%;\n}\n.col-1-sm[_ngcontent-%COMP%] {\n  width: 4.33%;\n}\n.col-2-sm[_ngcontent-%COMP%] {\n  width: 12.66%;\n}\n.col-3-sm[_ngcontent-%COMP%] {\n  width: 21%;\n}\n.col-4-sm[_ngcontent-%COMP%] {\n  width: 29.33%;\n}\n.col-5-sm[_ngcontent-%COMP%] {\n  width: 37.66%;\n}\n.col-6-sm[_ngcontent-%COMP%] {\n  width: 46%;\n}\n.col-7-sm[_ngcontent-%COMP%] {\n  width: 54.33%;\n}\n.col-8-sm[_ngcontent-%COMP%] {\n  width: 62.66%;\n}\n.col-9-sm[_ngcontent-%COMP%] {\n  width: 71%;\n}\n.col-10-sm[_ngcontent-%COMP%] {\n  width: 79.33%;\n}\n.col-11-sm[_ngcontent-%COMP%] {\n  width: 87.66%;\n}\n.col-12-sm[_ngcontent-%COMP%] {\n  width: 96%;\n}\n.row[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.hidden-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (min-width: 33.75em) {\n  \n  .container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media only screen and (min-width: 45em) {\n  \n  .col-1[_ngcontent-%COMP%] {\n    width: 4.33%;\n  }\n\n  .col-2[_ngcontent-%COMP%] {\n    width: 12.66%;\n  }\n\n  .col-3[_ngcontent-%COMP%] {\n    width: 21%;\n  }\n\n  .col-4[_ngcontent-%COMP%] {\n    width: 29.33%;\n  }\n\n  .col-5[_ngcontent-%COMP%] {\n    width: 37.66%;\n  }\n\n  .col-6[_ngcontent-%COMP%] {\n    width: 46%;\n  }\n\n  .col-7[_ngcontent-%COMP%] {\n    width: 54.33%;\n  }\n\n  .col-8[_ngcontent-%COMP%] {\n    width: 62.66%;\n  }\n\n  .col-9[_ngcontent-%COMP%] {\n    width: 71%;\n  }\n\n  .col-10[_ngcontent-%COMP%] {\n    width: 79.33%;\n  }\n\n  .col-11[_ngcontent-%COMP%] {\n    width: 87.66%;\n  }\n\n  .col-12[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n\n  .hidden-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 60em) {\n  \n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 60rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBOzs7Ozs7Ozs7Ozs7RUFZRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFVBQVU7RUFDVjtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRSxVQUFVO0VBQ1Y7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7QUFFQTtFQUNFLFVBQVU7RUFDVjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT0gR1JJRCBTWVNURU0gPT09PSAqL1xuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3cgW2NsYXNzXj1cImNvbFwiXSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAuNXJlbSAyJTtcbiAgbWluLWhlaWdodDogMC4xMjVyZW07XG59XG5cbi5jb2wtMSxcbi5jb2wtMixcbi5jb2wtMyxcbi5jb2wtNCxcbi5jb2wtNSxcbi5jb2wtNixcbi5jb2wtNyxcbi5jb2wtOCxcbi5jb2wtOSxcbi5jb2wtMTAsXG4uY29sLTExLFxuLmNvbC0xMiB7XG4gIHdpZHRoOiA5NiU7XG59XG5cbi5jb2wtMS1zbSB7XG4gIHdpZHRoOiA0LjMzJTtcbn1cblxuLmNvbC0yLXNtIHtcbiAgd2lkdGg6IDEyLjY2JTtcbn1cblxuLmNvbC0zLXNtIHtcbiAgd2lkdGg6IDIxJTtcbn1cblxuLmNvbC00LXNtIHtcbiAgd2lkdGg6IDI5LjMzJTtcbn1cblxuLmNvbC01LXNtIHtcbiAgd2lkdGg6IDM3LjY2JTtcbn1cblxuLmNvbC02LXNtIHtcbiAgd2lkdGg6IDQ2JTtcbn1cblxuLmNvbC03LXNtIHtcbiAgd2lkdGg6IDU0LjMzJTtcbn1cblxuLmNvbC04LXNtIHtcbiAgd2lkdGg6IDYyLjY2JTtcbn1cblxuLmNvbC05LXNtIHtcbiAgd2lkdGg6IDcxJTtcbn1cblxuLmNvbC0xMC1zbSB7XG4gIHdpZHRoOiA3OS4zMyU7XG59XG5cbi5jb2wtMTEtc20ge1xuICB3aWR0aDogODcuNjYlO1xufVxuXG4uY29sLTEyLXNtIHtcbiAgd2lkdGg6IDk2JTtcbn1cblxuLnJvdzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5oaWRkZW4tc20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMzLjc1ZW0pIHtcbiAgLyogNTQwcHggKi9cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1ZW0pIHtcbiAgLyogNzIwcHggKi9cbiAgLmNvbC0xIHtcbiAgICB3aWR0aDogNC4zMyU7XG4gIH1cblxuICAuY29sLTIge1xuICAgIHdpZHRoOiAxMi42NiU7XG4gIH1cblxuICAuY29sLTMge1xuICAgIHdpZHRoOiAyMSU7XG4gIH1cblxuICAuY29sLTQge1xuICAgIHdpZHRoOiAyOS4zMyU7XG4gIH1cblxuICAuY29sLTUge1xuICAgIHdpZHRoOiAzNy42NiU7XG4gIH1cblxuICAuY29sLTYge1xuICAgIHdpZHRoOiA0NiU7XG4gIH1cblxuICAuY29sLTcge1xuICAgIHdpZHRoOiA1NC4zMyU7XG4gIH1cblxuICAuY29sLTgge1xuICAgIHdpZHRoOiA2Mi42NiU7XG4gIH1cblxuICAuY29sLTkge1xuICAgIHdpZHRoOiA3MSU7XG4gIH1cblxuICAuY29sLTEwIHtcbiAgICB3aWR0aDogNzkuMzMlO1xuICB9XG5cbiAgLmNvbC0xMSB7XG4gICAgd2lkdGg6IDg3LjY2JTtcbiAgfVxuXG4gIC5jb2wtMTIge1xuICAgIHdpZHRoOiA5NiU7XG4gIH1cblxuICAuaGlkZGVuLXNtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwZW0pIHtcbiAgLyogOTYwcHggKi9cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MHJlbTtcbiAgfVxufVxuIl19 */", ".card[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  background: white;\n  border: 0.7px solid rgb(182, 182, 182);\n  box-shadow: 0.3rem 0.3rem rgb(240, 240, 240);\n  border-radius: 0.5rem;\n  width: 18rem;\n  height: 22rem;\n  overflow: hidden;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 18rem;\n  height: 18rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.description[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nh6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: grey !important;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  padding-left: 40%;\n  padding-top: 2rem;\n  margin-bottom: 5rem;\n}\n\n.rate[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 3px;\n  background: url('delete.png');\n  background-size: 1.6rem;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.rate[_ngcontent-%COMP%]:nth-child(3) {\n  margin-left: -4px;\n  background: url('heart.png');\n  background-size: 1.6rem;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.rate[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 70px;\n  border: 6px solid #e6e6e6;\n  float: left;\n}\n\n.rate[_ngcontent-%COMP%]:nth-child(1):hover, .rate[_ngcontent-%COMP%]:nth-child(3):hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n.info[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 40px;\n  background: #fff;\n  border: 5px solid #e6e6e6;\n  float: left;\n  box-shadow: 1px 1px 1px 0px #e9e9e9;\n  margin-top: 14px;\n  margin-left: -4px;\n  background: url('info.png');\n  background-size: 15px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n\n  position: relative;\n  margin: 100px auto;\n}\n\n.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #3dc49e;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n\n.double-bounce2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bounce {\n  0%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0cy9jYXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0Qyw0Q0FBNEM7RUFDNUMscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsNEJBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFDQTs7RUFFRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMkJBQW1DO0VBQ25DLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTzs7RUFFUCxvREFBb0Q7RUFDcEQsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFOztJQUVFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxtQkFBbUI7SUFDbkIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsMkJBQTJCO0VBQzdCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXRzL2NhdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMC43cHggc29saWQgcmdiKDE4MiwgMTgyLCAxODIpO1xuICBib3gtc2hhZG93OiAwLjNyZW0gMC4zcmVtIHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB3aWR0aDogMThyZW07XG4gIGhlaWdodDogMjJyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pbWcge1xuICB3aWR0aDogMThyZW07XG4gIGhlaWdodDogMThyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogNXB4IDhweDtcbn1cbmg1IHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbn1cbmg2IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbn1cbi5mb290ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLnJhdGU6bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9kZWxldGUucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxLjZyZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5yYXRlOm50aC1jaGlsZCgzKSB7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2hlYXJ0LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMS42cmVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5yYXRlIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNzBweDtcbiAgYm9yZGVyOiA2cHggc29saWQgI2U2ZTZlNjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucmF0ZTpudGgtY2hpbGQoMSk6aG92ZXIsXG4ucmF0ZTpudGgtY2hpbGQoMyk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG4uaW5mbyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNlNmU2ZTY7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggI2U5ZTllOTtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvaW5mby5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc3Bpbm5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG59XG5cbi5kb3VibGUtYm91bmNlMSxcbi5kb3VibGUtYm91bmNlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkYzQ5ZTtcbiAgb3BhY2l0eTogMC42O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcblxuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLWJvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmRvdWJsZS1ib3VuY2UyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-cats-list",
                templateUrl: "./cats-list.component.html",
                styleUrls: [
                    "./cats-list.component.css",
                    "../../grid.component.css",
                    "../cats.component.css"
                ]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cats/cats-list/cats-search/cats-search.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cats/cats-list/cats-search/cats-search.component.ts ***!
  \*********************************************************************/
/*! exports provided: CatsSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsSearchComponent", function() { return CatsSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cats_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cats-search.service */ "./src/app/cats/cats-list/cats-search/cats-search.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function CatsSearchComponent_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", result_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r12.name, " ");
} }
function CatsSearchComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatsSearchComponent_ul_8_li_1_Template, 3, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r10.results, 0, 10));
} }
class CatsSearchComponent {
    constructor(searchService) {
        this.searchService = searchService;
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchService
            .search(this.searchTerm$)
            .subscribe((results) => {
            this.results = results;
        });
    }
    ngOnInit() { }
}
CatsSearchComponent.ɵfac = function CatsSearchComponent_Factory(t) { return new (t || CatsSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cats_search_service__WEBPACK_IMPORTED_MODULE_1__["CatsSearchService"])); };
CatsSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatsSearchComponent, selectors: [["app-cats-search"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_cats_search_service__WEBPACK_IMPORTED_MODULE_1__["CatsSearchService"]])], decls: 9, vars: 1, consts: [[1, "search"], [1, "search-box"], ["type", "text", "name", "", 1, "search-txt", 3, "keyup"], [1, "search-btn"], [1, "icon", "ion-ios-search"], [1, "search-results"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink"]], template: function CatsSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search for breeds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CatsSearchComponent_Template_input_keyup_4_listener($event) { return ctx.searchTerm$.next($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CatsSearchComponent_ul_8_Template, 3, 5, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".search[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  -webkit-transform: translateX(30%);\n          transform: translateX(30%);\n}\n\n.search-box[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #fad69363;\n  height: 2.8rem;\n  border-radius: 1rem;\n  width: 150%;\n  margin-top: 1rem;\n  padding-top: 0.7rem;\n  padding-left: 1rem;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  float: right;\n  color: white;\n  padding-right: 1rem;\n}\n\n.search-btn[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.search-txt[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  outline: none;\n  float: left;\n  font-size: 1.2rem;\n  color: white;\n}\n\nh4[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 300;\n  font-size: 1.6rem;\n  margin: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-bottom: 1rem;\n}\n\n.search-results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  -webkit-transform: translateX(30%);\n          transform: translateX(30%);\n}\n\na[_ngcontent-%COMP%] {\n  color: rgb(39, 156, 252);\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: rgb(24, 102, 165);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0cy9jYXRzLWxpc3QvY2F0cy1zZWFyY2gvY2F0cy1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NhdHMvY2F0cy1saXN0L2NhdHMtc2VhcmNoL2NhdHMtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwJSk7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmFkNjkzNjM7XG4gIGhlaWdodDogMi44cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB3aWR0aDogMTUwJTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZy10b3A6IDAuN3JlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuXG4uc2VhcmNoLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG4uc2VhcmNoLWJ0biA+IGkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnNlYXJjaC10eHQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaDQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW46IDA7XG59XG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLnNlYXJjaC1yZXN1bHRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwJSk7XG59XG5hIHtcbiAgY29sb3I6IHJnYigzOSwgMTU2LCAyNTIpO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMjQsIDEwMiwgMTY1KTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatsSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-cats-search",
                templateUrl: "./cats-search.component.html",
                styleUrls: ["./cats-search.component.css"],
                providers: [_cats_search_service__WEBPACK_IMPORTED_MODULE_1__["CatsSearchService"]]
            }]
    }], function () { return [{ type: _cats_search_service__WEBPACK_IMPORTED_MODULE_1__["CatsSearchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cats/cats-list/cats-search/cats-search.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cats/cats-list/cats-search/cats-search.service.ts ***!
  \*******************************************************************/
/*! exports provided: CatsSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsSearchService", function() { return CatsSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CatsSearchService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://api.thecatapi.com/v1/breeds/";
        this.queryUrl = "search?q=";
    }
    search(terms) {
        return terms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(term => this.searchEntries(term)));
    }
    searchEntries(term) {
        return this.http.get(this.baseUrl + this.queryUrl + term);
    }
}
CatsSearchService.ɵfac = function CatsSearchService_Factory(t) { return new (t || CatsSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CatsSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CatsSearchService, factory: CatsSearchService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatsSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cats/cats.component.ts":
/*!****************************************!*\
  !*** ./src/app/cats/cats.component.ts ***!
  \****************************************/
/*! exports provided: CatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsComponent", function() { return CatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CatsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CatsComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.loadCat.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.loadCat.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CatsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Meoww!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hoomans are our best servants!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CatsComponent {
    constructor(http) {
        this.http = http;
        this.isFetching = false;
        this.baseUrl = "https://api.thecatapi.com/v1/";
        this.queryUrl1 = "images/search?limit=100";
        this.queryUrl2 = "votes";
    }
    ngOnInit() {
        this.fetchCats();
    }
    fetchCats() {
        this.isFetching = true;
        this.http.get(this.baseUrl + this.queryUrl1).subscribe((cats) => {
            this.isFetching = false;
            this.loadCats = cats;
            this.loadCat = cats[0];
        }, error => {
            console.log(error);
        });
    }
    vote(postData) {
        this.http.post(this.baseUrl + this.queryUrl2, postData).subscribe(response => {
            console.log("Did you vote?", response);
        }, error => {
            console.log(error);
        });
        //once users cast their vote, show another picture
        this.loadCat = this.loadCats[Math.floor(Math.random() * 101)];
    }
}
CatsComponent.ɵfac = function CatsComponent_Factory(t) { return new (t || CatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatsComponent, selectors: [["app-cats"]], decls: 8, vars: 3, consts: [[1, "card"], ["class", "spinner", 4, "ngIf"], [3, "src", "alt", 4, "ngIf"], ["class", "description", 4, "ngIf"], [1, "footer"], ["id", "swipe_dislike", 1, "rate", 3, "click"], [1, "info"], ["id", "swipe_like", 1, "rate", 3, "click"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"], [3, "src", "alt"], [1, "description"]], template: function CatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatsComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CatsComponent_img_2_Template, 1, 2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CatsComponent_div_3_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatsComponent_Template_button_click_5_listener($event) { return ctx.vote({ image_id: ctx.loadCat.id, value: 0 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatsComponent_Template_button_click_7_listener($event) { return ctx.vote({ image_id: ctx.loadCat.id, value: 1 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFetching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadCat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadCat);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  background: white;\n  border: 0.7px solid rgb(182, 182, 182);\n  box-shadow: 0.3rem 0.3rem rgb(240, 240, 240);\n  border-radius: 0.5rem;\n  width: 18rem;\n  height: 22rem;\n  overflow: hidden;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 18rem;\n  height: 18rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.description[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nh6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: grey !important;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  padding-left: 40%;\n  padding-top: 2rem;\n  margin-bottom: 5rem;\n}\n\n.rate[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 3px;\n  background: url('delete.png');\n  background-size: 1.6rem;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.rate[_ngcontent-%COMP%]:nth-child(3) {\n  margin-left: -4px;\n  background: url('heart.png');\n  background-size: 1.6rem;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.rate[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 70px;\n  border: 6px solid #e6e6e6;\n  float: left;\n}\n\n.rate[_ngcontent-%COMP%]:nth-child(1):hover, .rate[_ngcontent-%COMP%]:nth-child(3):hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n.info[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 40px;\n  background: #fff;\n  border: 5px solid #e6e6e6;\n  float: left;\n  box-shadow: 1px 1px 1px 0px #e9e9e9;\n  margin-top: 14px;\n  margin-left: -4px;\n  background: url('info.png');\n  background-size: 15px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n\n  position: relative;\n  margin: 100px auto;\n}\n\n.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #3dc49e;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n\n.double-bounce2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bounce {\n  0%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0cy9jYXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0Qyw0Q0FBNEM7RUFDNUMscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsNEJBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFDQTs7RUFFRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMkJBQW1DO0VBQ25DLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTzs7RUFFUCxvREFBb0Q7RUFDcEQsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFOztJQUVFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxtQkFBbUI7SUFDbkIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsMkJBQTJCO0VBQzdCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXRzL2NhdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMC43cHggc29saWQgcmdiKDE4MiwgMTgyLCAxODIpO1xuICBib3gtc2hhZG93OiAwLjNyZW0gMC4zcmVtIHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB3aWR0aDogMThyZW07XG4gIGhlaWdodDogMjJyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pbWcge1xuICB3aWR0aDogMThyZW07XG4gIGhlaWdodDogMThyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogNXB4IDhweDtcbn1cbmg1IHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbn1cbmg2IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbn1cbi5mb290ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLnJhdGU6bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9kZWxldGUucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxLjZyZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5yYXRlOm50aC1jaGlsZCgzKSB7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2hlYXJ0LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMS42cmVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5yYXRlIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNzBweDtcbiAgYm9yZGVyOiA2cHggc29saWQgI2U2ZTZlNjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucmF0ZTpudGgtY2hpbGQoMSk6aG92ZXIsXG4ucmF0ZTpudGgtY2hpbGQoMyk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG4uaW5mbyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNlNmU2ZTY7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggI2U5ZTllOTtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvaW5mby5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc3Bpbm5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG59XG5cbi5kb3VibGUtYm91bmNlMSxcbi5kb3VibGUtYm91bmNlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkYzQ5ZTtcbiAgb3BhY2l0eTogMC42O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcblxuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLWJvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmRvdWJsZS1ib3VuY2UyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-cats",
                templateUrl: "./cats.component.html",
                styleUrls: ["./cats.component.css"]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, consts: [[1, "box-main"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".box-main[_ngcontent-%COMP%] {\n  background-image: url('home_background.jpg');\n  background-position: top;\n  background-size: cover;\n  height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBb0Q7RUFDcEQsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtbWFpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvaG9tZV9iYWNrZ3JvdW5kLmpwZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/browse"]; };
const _c2 = function () { return ["/wikipedicat"]; };
class NavigationComponent {
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 11, vars: 6, consts: [[1, "navigation"], [1, "navigation-list"], [3, "routerLink"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Browse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Catinder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0;\n}\nli[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline-block;\n  padding: 1rem;\n}\na[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgb(255, 254, 254);\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: rgb(13, 72, 94);\n}\n.navigation[_ngcontent-%COMP%] {\n  background: #3dc49e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbWFyZ2luOiAwO1xufVxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5hIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogcmdiKDI1NSwgMjU0LCAyNTQpO1xufVxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJnYigxMywgNzIsIDk0KTtcbn1cbi5uYXZpZ2F0aW9uIHtcbiAgYmFja2dyb3VuZDogIzNkYzQ5ZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-navigation",
                templateUrl: "./navigation.component.html",
                styleUrls: ["./navigation.component.css"]
            }]
    }], null, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dungphan/Workspace/catssignment-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map