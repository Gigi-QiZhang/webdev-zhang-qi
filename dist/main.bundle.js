webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--<a routerLink=\"/login\">Login</a>-->\n<!--<a routerLink=\"/register\">Register</a>-->\n<!--<a routerLink=\"/profile\">Profile</a>-->\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/**
 * Created by Qi on 10/07/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
// import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
// import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
// import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
// import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
// import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
// import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            // WidgetEditComponent,
            // WidgetChooserComponent,
            // WidgetHeaderComponent,
            // WidgetImageComponent,
            // WidgetYoutubeComponent,
            // WidgetHtmlComponent,
            // WidgetTextComponent,
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_test_test_component__["a" /* TestComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* Routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_7__services_widget_service_client__["a" /* WidgetService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/**
 * Created by Qi on 10/07/17.
 */











// import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
// import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';


// import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
// import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
// import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
// import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
// import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_12__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphiconblack {\n  color: black;\n}\nli.borderless {\n  border: 0 none;\n}\n\nli.lightblue {\n  color: #337ab7\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <div class=\"navbar-text pull-left\">\n          <span routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\" class=\"glyphicon glyphicon-chevron-left glyphiconblack\"></span>\n      </div>\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >\n          <b>Pages</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-plus glyphiconblack\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"hidden-lg visible-xs\">\n        <div class=\"navbar-text pull-left\">\n          <a class=\"glyphiconblack\">\n            <span class=\"glyphicon glyphicon-chevron-left hidden-lg visible-xs\"></span>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"navbar-header margin\">\n        <a class=\"navbar-brand\">\n          <b>Edit Page</b>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right\">\n        <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\"  class=\"glyphiconblack\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"row container-fluid\">\n  <div class=\"col-sm-4 hidden-xs websites-col-sm-4\">\n    <div *ngFor = \"let page of pages\" class=\"container-fluid padding-top\">\n      <ul routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}\" class=\"list-group\">\n        <li class=\"list-group-item borderless lightblue\">{{ page.name }}\n          <a class=\"pull-right\" routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <!--<ul class=\"list-group\">-->\n      <!--<li class=\"list-group-item borderless lightblue\">Blog Post-->\n        <!--<a class=\"pull-right\" routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/:pid\" >-->\n          <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n        <!--</a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item borderless lightblue\">Blogs-->\n        <!--<a class=\"pull-right\" routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/:pid\">-->\n          <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n        <!--</a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item borderless lightblue\">Home-->\n        <!--<a class=\"pull-right\" routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/:pid\">-->\n          <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n        <!--</a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item borderless lightblue\">About-->\n        <!--<a class=\"pull-right\" routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/:pid\">-->\n          <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n        <!--</a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item borderless lightblue\">Contact Us-->\n        <!--<a class=\"pull-right\" routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/:pid\">-->\n          <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n        <!--</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n  </div>\n</div>\n\n<div class=\"col-xs-12 col-sm-8 pull-right\">\n  <div class=\"container-fluid\">\n\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Page Name\">\n      </div>\n\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"pagetitle\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"pagetitle\" placeholder=\"Page Title\">\n      </div>\n    </form>\n\n    <form>\n      <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\" class=\"btn btn-block btn-danger\">Delete</a>\n    </form>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ uid }}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEditComponent = (function () {
    function PageEditComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PageEditComponent.prototype.edit = function (name, description) {
        var _this = this;
        this.name = this.editForm.value.name;
        this.description = this.editForm.value.description;
        var editedPage = {
            pid: this.page.pid,
            name: this.name,
            wid: this.wid,
            description: this.description,
        };
        if (name === '') {
            this.errorFlag = true;
            this.errorMsg = 'Invalid new page name';
        }
        else {
            this.pageService.updatePage(this.pid, editedPage)
                .subscribe(function (page) {
                _this.page = editedPage;
                _this.name = name;
                _this.description = description;
            });
        }
    };
    PageEditComponent.prototype.remove = function (PageId) {
        var _this = this;
        this.pageService.deletePage(this.pid)
            .subscribe(function (page) {
            _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page']);
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        this.pageService.findAllPagesForWebsiteId(this.wid)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
        this.pageService.findPageById(this.pid)
            .subscribe(function (page) {
            _this.page = page;
            _this.name = _this.page['name'];
            _this.description = _this.page['description'];
        });
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "editForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], PageEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphiconblack {\n  color: black;\n}\nli.borderless {\n  border: 0 none;\n}\n\nli.lightblue {\n  color: #337ab7\n}\n.glyphiconlightblue {\ncolor: #337ab7;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n        <span routerLink=\"/profile/{{ uid }}/website\" class=\"glyphicon glyphicon-chevron-left glyphiconblack\"></span>\n    </p>\n\n    <p routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}/widget\" class=\"navbar-header navbar-brand pull-left\">\n        <b>Pages</b>\n    </p>\n\n    <p class=\"navbar-text pull-right glyphiconblack\">\n        <span routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/new\" class=\"glyphicon glyphicon-plus\"></span>\n    </p>\n  </div>\n</nav>\n\n<div *ngFor = \"let page of pages\" class=\"container-fluid padding-top\">\n  <ul class=\"list-group\" routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}\">\n    <li\n        class=\"list-group-item borderless lightblue\">{{ page.name }}\n      <a class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"\n              routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid}}\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n        <span routerLink=\"/profile/{{ uid }}\" class=\"glyphicon glyphicon-user glyphiconlightblue\"></span>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageListComponent = (function () {
    function PageListComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // page: Page;
        // pages: Page[];
        this.page = {};
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            // this.pid = params['pid'];
        });
        this.pageService.findAllPagesForWebsiteId(this.wid)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    return PageListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageListComponent.prototype, "editForm", void 0);
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], PageListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphiconblack {\n  color: black;\n}\nli.borderless {\n  border: 0 none;\n}\n\nli.lightblue {\n  color: #337ab7\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <div class=\"navbar-text pull-left\">\n        <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\" class=\"glyphiconblack\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header navbar-brand\">\n          <b>Pages</b>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"pull-right glyphiconblack\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"hidden-lg visible-xs\">\n        <div class=\"navbar-text pull-left\">\n          <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\" class=\"glyphiconblack\">\n            <span class=\"glyphicon glyphicon-chevron-left hidden-lg visible-xs\"></span>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"navbar-text pull-right\">\n        <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\" class=\"glyphiconblack\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header margin\">\n        <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/new\" class=\"navbar-brand\">\n          <b>New Page</b>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid padding-top\">\n  <div class=\"col-sm-4 hidden-xs websites-col-sm-4\">\n\n    <div *ngFor = \"let page of pages\" class=\"container-fluid padding-top\">\n      <ul routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}\" class=\"list-group\">\n        <li class=\"list-group-item borderless lightblue\">{{ page.name }}\n          <a class=\"pull-right\" routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n<div class=\"col-xs-12 col-sm-8 pull-right padding-top\">\n  <div class=\"container-fluid\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Page Name\">\n      </div>\n    </form>\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"pagetitle\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"pagetitle\" placeholder=\"Page Title\">\n      </div>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid \">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ uid }}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageNewComponent = (function () {
    function PageNewComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PageNewComponent.prototype.create = function (name, description) {
        var _this = this;
        if (name === '' || description === '') {
            this.errorFlag = true;
            this.errorMsg = 'Must input valid name or description';
        }
        else {
            return this.pageService.createPage(this.wid, new __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__["a" /* Page */]('', name, this.wid, description))
                .subscribe(function (page) {
                _this.router.navigate(['/user/', _this.uid, '/website', _this.wid, '/page']);
            });
        }
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
        // alert('userId: ' + this.uid);
        this.pageService.findAllPagesForWebsiteId(this.wid)
            .subscribe(function (pages) {
            _this.pages = pages;
            _this.name = _this.page['name'];
            _this.description = _this.page['description'];
        });
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "pageNewForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], PageNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n    <input ngModel\n           placeholder=\"username\"\n           name=\"username\"\n           class=\"form-control\"\n           type=\"text\"\n           required\n           #username = \"ngModel\"/>\n    <br/>\n\n    <input ngModel\n           placeholder=\"password\"\n           name=\"password\"\n           class=\"form-control\"\n           type=\"password\"\n           required\n           #password=\"ngModel\"/>\n    <br/>\n\n    <button class=\"btn btn-primary btn-block form-control\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\"\n            >Login</button>\n    <!--(click)=\"login()\"-->\n    <br/>\n\n    <button class=\"btn btn-success btn-block form-control\"\n            routerLink=\"/register\">Register</button>\n\n  </form>\n\n</div>\n<!--<span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">-->\n<!--Please enter username!-->\n<!--</span>-->\n\n<!--<h1> {{title}} </h1>-->\n<!--<button [disabled] =\"disabledFlag\">Submit</button>-->\n<!--<button (click) =\"buttonClicked($event)\">Submit</button>-->\n<!--<input type=\"text\" [(ngModel)] =\"inputTxt\">-->\n<!--{{inputTxt}}-->\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                _this.router.navigate(['/user/', user.uid]);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../../../services/user.service.client';
// import { User } from '../../../models/user.model.client';
// import { NgForm } from '@angular/forms';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   @ViewChild('f') loginForm: NgForm;
//   errorFlag: boolean;
//   errorMsg: string;
//   username: string;
//   password: string;
//   title: string;
//   disabledFlag: boolean;
//
//   constructor(private userService: UserService,
//               private router: Router) {
//   }
//
//
//   login() {
//     // console.log('login' + username);
//     // console.log(password);
//     this.username = this.loginForm.value.username;
//     this.password = this.loginForm.value.password;
//     const user: User = this.userService.findUserByCredentials(this.username, this.password);
//     if (user) {
//       // alert(user._id);
//       this.router.navigate(['/profile', user.uid]);
//     } else {
//       this.errorFlag = true;
//       this.errorMsg = 'Error';
//       // alert('wrong username or password');
//     }
//   }
//
//   ngOnInit() {
//     this.title = 'This is Login Page';
//     this.disabledFlag = true;
//   }
//
//   buttonClicked(event: any) {
//     console.log(event); // your custom code on button click
//   }
// }
//   // if (username === 'alice' && password === 'alice') {
//   //   this.router.navigate(['/profile']);
//   //   // alert('username: ' + this.username);
//   // }
//   // this.router.navigate(['/profile/123']);
//   // }
//
//
//
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-lightblue{\n  background-color: #337ab7;\n}\n.glyphiconwhite {\n  color: white;\n}\nb.whitetitle {\n  color: white;\n}\n/*button.white {*/\n  /*color: white;*/\n/*}*/\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-lightblue\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class=\"whitetitle\">Profile</b>\n      </a>\n    </p>\n\n    <button form=\"updateForm\"  class=\"navbar-text pull-right\">\n      <a type=\"submit\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok glyphiconwhite\"></span>\n      </a>\n    </button>\n\n\n  </div>\n</nav>\n\n<form id=\"updateForm\" (ngSubmit) = \"update()\" #f=\"ngForm\">\n  <div class=\"container-fluid\">\n\n  <label>Username</label><br/>\n  <input [(ngModel)]=\"username\"\n       placeholder=\"username\"\n       class=\"form-control\"\n       name=\"username\"\n       type=\"text\"\n       required/>\n  <br/>\n\n  <label>Email</label><br/>\n  <input [(ngModel)]=\"email\"\n         placeholder=\"jannunzi@gmail.com\"\n         class=\"form-control\"\n         name=\"email\"\n         type=\"text\"\n         required/>\n  <br/>\n  <label>First Name</label><br/>\n  <input [(ngModel)]=\"firstName\"\n         placeholder=\"Jose\"\n         class=\"form-control\"\n         name=\"firstName\"\n         type=\"text\"/>\n  <br/>\n  <label>Last Name</label><br/>\n  <input [(ngModel)]=\"lastName\"\n         placeholder=\"Annunziato\"\n         class=\"form-control\"\n         name=\"lastName\"\n         type=\"text\"/>\n  <br/>\n  <button routerLink=\"/profile/{{ uid }}/website\" class=\"btn btn-primary form-control\">Website</button>\n    <br/>\n    <br/>\n  <button class=\"btn btn-danger form-control btn btn-block\" routerLink=\"/login\">Logout</button>\n\n  </div>\n</form>\n  <nav class=\"navbar navbar-default navbar-fixed-bottom navbar-lightblue\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a routerLink=\"/profile/{{ uid }}/\">\n          <span class=\"glyphicon glyphicon-user glyphiconwhite\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // user: User;
        this.user = {
            uid: this.uid,
            username: this.username,
            password: '',
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName
        };
    }
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.username = this.profileForm.value.username;
        this.email = this.profileForm.value.email;
        this.firstName = this.profileForm.value.firstName;
        this.lastName = this.profileForm.value.lastName;
        if (this.aUser && this.username !== this.preUsername) {
            this.usernameOccupied = true;
        }
        else {
            var updatedUser = {
                uid: this.uid,
                username: this.username,
                password: this.user.password,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email
            };
            this.userService.updateUser(this.uid, updatedUser)
                .subscribe(function (Nuser) {
                _this.user = Nuser;
            });
            this.preUsername = this.username;
        }
    };
    ProfileComponent.prototype.findWebsite = function () {
        this.router.navigate(['/user/', this.uid, '/website']);
    };
    ProfileComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(this.uid)
            .subscribe(function (user) {
            _this.router.navigate(['login/']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.userService.findUserById(_this.uid)
                .subscribe(function (user) {
                _this.user = user;
                console.log(_this.user);
                _this.username = _this.user['username'];
                _this.firstName = _this.user['firstName'];
                _this.lastName = _this.user['lastName'];
                _this.email = _this.user['email'];
                // this.preUsername = this.user['username'];
            });
        });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf='errorFlag'\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n  <br/>\n\n  <!--<form id=\"registerForm\" (ngSubmit) = \"register()\" #f=\"ngForm\">-->\n  <div class=\"form-group\">\n  <!--<label>Username</label><br/>-->\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"\n         name=\"username\"\n         id=\"username\"\n         type=\"text\"\n         required/>\n  <br/>\n  </div>\n\n  <div class=\"form-group\">\n  <!--<label>Password</label><br/>-->\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"\n         name=\"password\"\n         id=\"password\"\n         type=\"password\"\n         required/>\n  <br/>\n  </div>\n\n  <div class=\"form-group\">\n  <!--<label>Verify Password</label><br/>-->\n  <input [(ngModel)]=\"verifyPassword\"\n         placeholder=\"verify password\"\n         class=\"form-control\"\n         name=\"verifypassword\"\n         id=\"verifypassword\"\n         type=\"password\"\n         required/>\n  <br/>\n  </div>\n\n  <a (click) = \"Register(username, password, verifyPassword)\" class=\"btn btn-primary btn-block\">Register\n  </a>\n  <a [routerLink] = \"['/login']\" class=\"btn btn-danger btn-block\">Cancel\n  </a>\n  <!--<button class=\"btn btn-primary btn-block form-control\">Register</button>-->\n  <!--<br/>-->\n  <!--<button class=\"btn btn-danger btn-block form-control\" routerLink=\"/login\">Cancel</button>-->\n  <!---->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {};
    }
    // register() {
    //   this.username = this.registerForm.value.username;
    //   this.password = this.registerForm.value.password;
    //   this.verifyPassword = this.registerForm.value.verifyPassword;
    //
    //   if (this.password !== this.verifyPassword) {
    //     this.passwordError = true;
    //   } else {
    //     this.userService.findUserByUsername(this.username)
    //       .subscribe((user: User) => {
    //           this.user = user;
    //           if (!this.user) {
    //             const newUser: User = {
    //               uid: '',
    //               username: this.username,
    //               password: this.password,
    //               firstName: '',
    //               lastName: '',
    //               email: ''
    //             };
    //             this.userService.createUser(newUser)
    //               .subscribe((nUser: User) => {
    //                 this.router.navigate(['user', nUser.uid]);
    //               }, (error: any) => {
    //                 this.usernameError = true;
    //               });
    //           } else { this.usernameError = true; }
    //         }
    //       );
    //   }
    // }
    RegisterComponent.prototype.Register = function (username, password, verifyPassword) {
        var _this = this;
        /*    const userNew = {'_id': '123', 'username': username, 'email': '', 'password': password, 'firstname': '', 'lastname': ''};
            console.log(userNew);
            this.userService.createUser(userNew);
            this.router.navigate(['/user', userNew._id]);
          }*/
        if (username === '' || password === '' || password !== verifyPassword) {
            this.errorFlag = true;
            this.errorMsg = 'Invalid username/password or password not the same!';
        }
        else {
            // asking the server to navigate at a time when it is convenient, while returning its own thing from client at the same time
            return this.userService.createUser(new __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__["a" /* User */]('', username, password, '', ''))
                .subscribe(function (user) {
                _this.router.navigate(['user/', user.uid]);
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
// alert(this.username);
// if (this.username.length === 0 || this.password.length === 0 || this.verifyPassword.length === 0) {
//   alert('please input information');
// } else if (!(this.password === this.verifyPassword)) {
//   alert('password not matched');
// } else if (this.user = this.userService.findUserByUsername(this.username)) {
//   alert('user exists');
// }
//
// const newUser: User = {
//   uid: this.userService.newUserId(),
//   username: this.username,
//   password: this.password,
//   firstName: '',
//   lastName: '',
//   email: ''
// };
// this.userService.createUser(newUser);
// this.router.navigate(['/login']);
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../../../services/user.service.client';
// import { User } from '../../../models/user.model.client';
// import { NgForm } from '@angular/forms';
//
//
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   @ViewChild('f') registerForm: NgForm;
//   username: String;
//   password: string;
//   user: User;
//   verifypassword: String;
//
//   constructor(private userService: UserService,
//               private router: Router) { }
//   register(username: String, password: String, verifypassword: String) {
//     // alert(this.username);
//     if (this.username.length === 0 || this.password.length === 0 || this.verifypassword.length === 0) {
//       alert('please input information');
//     } else if (!(this.password === this.verifypassword)) {
//       alert('password not matched');
//     } else if (this.user = this.userService.findUserByUsername(this.username)) {
//       alert('user exists');
//     }
//
//     const newUser: User = {
//       uid: this.userService.newUserId(),
//       username: this.username,
//       password: this.password,
//       firstName: '',
//       lastName: '',
//       email: ''
//     };
//     this.userService.createUser(newUser);
//     this.router.navigate(['/login']);
//   }
//   ngOnInit() {
//   }
//
// }
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-lightblue{\n  background-color: #337ab7;\n}\n.glyphiconwhite {\n  color: white;\n}\nb.whitetitle {\n  color: white;\n}\nli.borderless {\n  border: 0 none;\n}\n\nli.lightblue {\n  color: #337ab7\n}\n.glyphiconblack {\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-lightblue\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <div routerLink=\"/profile/{{ uid }}/website\" class=\"navbar-text pull-left glyphiconwhite\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </div>\n\n      <div class=\"navbar-header hidden-xs navbar-brand glyphiconwhite\">\n          <b>Websites</b>\n      </div>\n\n      <div class=\"navbar-text pull-right hidden-xs glyphiconwhite\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n      </div>\n    </div>\n\n\n    <div class=\"col-sm-8\">\n      <div class=\"hidden-lg visible-xs\">\n        <div routerLink=\"/profile/{{ uid }}/website\" class=\"navbar-text pull-left glyphiconwhite\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </div>\n      </div>\n\n\n      <div routerLink=\"/profile/{{ uid }}/website\" class=\"navbar-text pull-right glyphiconwhite\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n      </div>\n\n      <div class=\"navbar-header navbar-brand glyphiconwhite pull-left margin\">\n          <b>Edit Website</b>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid padding-top\">\n  <div class=\"col-sm-4 hidden-xs websites-col-sm-4\">\n\n    <div *ngFor = \"let website of websites\" class=\"container-fluid padding-top\">\n      <ul class=\"list-group\">\n        <li routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}\"\n            class=\"list-group-item borderless lightblue\">{{ website.name }}\n          <a class=\"pull-right\">\n            <span routerLink=\"/profile/{{ uid }}/website/{{ wid }}\" class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n<form id=\"updateForm\" (ngSubmit) = \"edit()\" #f=\"ngForm\">\n<div class=\"col-xs-12 col-sm-8 pull-right\">\n  <div class=\"container-fluid\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"websitename\">Website Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"websitename\" placeholder=\"Blogger\">\n      </div>\n    </form>\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"description\">Website Description</label>\n        <textarea class=\"form-control\" id=\"description\" placeholder=\"Bolgger is a blog-publishing service that allows\n          multi-user blogs with time-stamped entries. It was developed by Pyra Labs, which was bought by Google in 2003.\n          Generally, the blogs are hosted by Google at a susdomain of blogspot.com. Blogs can also be hosted in the\n          registered custon domain of the blogger (like www.example.com).[4] A user can have up to 100 blogs per\n          account.\" rows=\"5\"></textarea>\n      </div>\n    </form>\n    <form>\n      <a routerLink=\"/profile/{{ uid }}/website\" class=\"btn btn-block btn-danger\">Delete</a>\n    </form>\n  </div>\n</div>\n</form>\n\n<nav class=\"navbar navbar-lightblue navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ uid }}\" class=\"glyphiconwhite\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteEditComponent.prototype.edit = function (name, description) {
        var _this = this;
        this.name = this.editForm.value.name;
        this.description = this.editForm.value.description;
        var editedWebsite = {
            wid: this.website.wid,
            name: this.name,
            developerId: this.uid,
            description: this.description
        };
        if (name === '') {
            this.errorFlag = true;
            this.errorMsg = 'Must input valid website name';
        }
        // console.log(editedWebsite);
        this.websiteService.updateWebsite(this.wid, editedWebsite)
            .subscribe(function (website) {
            _this.website = editedWebsite;
            _this.name = name;
            _this.description = description;
        });
    };
    WebsiteEditComponent.prototype.remove = function (websiteId) {
        var _this = this;
        this.websiteService.deleteWebsite(this.wid)
            .subscribe(function (website) {
            _this.router.navigate(['/user/', _this.uid, '/website']);
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
        // alert('userId: ' + this.uid);
        this.websiteService.findWebsiteById(this.uid, this.wid)
            .subscribe(function (website) {
            // this.website = website;
            _this.name = _this.website['name'];
            _this.description = _this.website['description'];
        });
        this.websiteService.findAllWebsitesForUser(this.uid)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "editForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-lightblue{\n  background-color: #337ab7;\n}\n.glyphiconwhite {\n  color: white;\n}\nb.whitetitle {\n  color: white;\n}\nli.borderless {\n  border: 0 none;\n}\n\nli.lightblue {\n  color: #337ab7\n}\n.glyphiconblack {\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-lightblue navbar-lightblue\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{ uid }}\" class=\"glyphiconwhite\">\n        <span class=\"glyphicon glyphicon-chevron-left glyphiconwhite\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\" class=\"navbar-brand\">\n        <b class=\"whitetitle\">Websites</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ uid }}/website/new\" class=\"glyphiconwhite\">\n        <span class=\"glyphicon glyphicon-plus glyphiconwhite\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div *ngFor = \"let website of websites\" class=\"container-fluid padding-top\">\n  <ul routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\" class=\"list-group\">\n    <li routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\"\n        class=\"list-group-item borderless lightblue\">{{ website.name }}\n      <a class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\" routerLink=\"/profile/{{ uid }}/website/{{ wid }}\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n\n<nav class=\"navbar navbar-lightblue navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ uid }}\" class=\"glyphiconwhite\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteListComponent = (function () {
    function WebsiteListComponent(websiteService, router, activatedRoute) {
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    // newWebsite() {
    //   this.router.navigate(['/user/', this.uid, '/website', '/new']);
    // }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
        this.websiteService.findAllWebsitesForUser(this.uid)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    return WebsiteListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteListComponent.prototype, "websiteForm", void 0);
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WebsiteListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-lightblue{\n  background-color: #337ab7;\n}\n.glyphiconwhite {\n  color: white;\n}\nb.whitetitle {\n  color: white;\n}\n\n.glyphiconblack {\n  color: black;\n}\nli.borderless {\n  border: 0 none;\n}\n\nli.lightblue {\n  color: #337ab7\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-lightblue\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <div routerLink=\"/profile/{{ uid }}/website\" class=\"navbar-text pull-left glyphiconwhite\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </div>\n\n\n      <div class=\"navbar-header hidden-xs navbar-brand glyphiconwhite\">\n          <b>Websites</b>\n      </div>\n\n      <div routerLink=\"/profile/{{ uid }}/website/new\" class=\"navbar-text pull-right hidden-xs glyphiconwhite\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n      </div>\n    </div>\n\n\n    <div class=\"col-sm-8\">\n      <div class=\"hidden-lg visible-xs\">\n        <div class=\"navbar-text pull-left\">\n          <a routerLink=\"/profile/{{ uid }}\" class=\"glyphiconwhite\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </div>\n      </div>\n\n      <div routerLink=\"/profile/{{ uid }}/website\" class=\"navbar-text pull-right glyphiconwhite\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n      </div>\n\n      <div class=\"navbar-header pull-left navbar-brand glyphiconwhite margin\">\n          <b>New Website</b>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"row container-fluid\">\n  <div class=\"col-sm-4 hidden-xs websites-col-sm-4\">\n\n    <div *ngFor = \"let website of websites\" class=\"container-fluid padding-top\">\n      <ul routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\" class=\"list-group\">\n        <li routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\"\n            class=\"list-group-item borderless lightblue\">{{ website.name }}\n          <a class=\"pull-right\" routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-xs-12 col-sm-8 pull-right padding-top\">\n  <div class=\"container\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\">\n      </div>\n    </form>\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <textarea class=\"form-control\" id=\"description\" placeholder=\"Description\" rows=\"5\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-lightblue navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ uid }}\" class=\"glyphiconwhite\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = {};
    }
    WebsiteNewComponent.prototype.createWebsite = function (name, description) {
        var _this = this;
        if (name === '' || description === '') {
            this.errorFlag = true;
            this.errorMsg = 'Must input valid name or description';
        }
        else {
            return this.websiteService.createWebsite(this.uid, new __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__["a" /* Website */]('', name, '', description))
                .subscribe(function (website) {
                _this.router.navigate(['/user/', _this.uid, '/website']);
            });
        }
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
        // alert('userId: ' + this.uid);
        this.websiteService.findAllWebsitesForUser(this.uid)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteNewForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page\" class=\"glyphiconblack\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Widgets</b>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}/widget/new\" class=\"glyphiconblack\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n  <div *ngFor = \"let widget of widgets\">\n    <div [ngSwitch]=\"widget.type\">\n    <div>\n      <a><span class=\"glyphicon glyphicon-menu-hamburger pull-right glyphiconblack\"></span></a>\n      <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}/widget/{{ wgid }}\" >\n        <span class=\"glyphicon glyphicon-cog pull-right glyphiconlightblue\"></span>\n      </a>\n      <h2>Lorem Pixels</h2>\n    </div>\n    <div>\n      <span class=\"glyphicon glyphicon-menu-hamburger pull-right glyphiconblack\"></span>\n      <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}/widget/{{ wgid }}\">\n        <span class=\"glyphicon glyphicon-cog pull-right glyphiconlightblue\"></span>\n      </a>\n      <h3>Placeholder Images</h3>\n    </div>\n    <div>\n      <span class=\"glyphicon glyphicon-menu-hamburger pull-right glyphiconblack\"></span>\n      <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}/widget/{{ wgid }}\">\n        <span class=\"glyphicon glyphicon-cog pull-right glyphiconlightblue\" href=\"widget-image.html\"></span>\n      </a>\n      <img class=\"content\" src=\"http://lorempixel.com/400/200/\">\n    </div>\n    <div>\n      <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}/widget/{{ wgid }}\">\n      <span class=\"glyphicon glyphicon-menu-hamburger pull-right glyphiconblack\"></span>\n      <span class=\"glyphicon glyphicon-cog pull-right glyphiconlightblue\"></span>\n      </a>\n      <p class=\"justify\">Placeholder Images for every case. Webdesign or Print. It's simple and absolutely free!\n        Just put the custom url in your code to get your FPO / dummy image.</p>\n    </div>\n  </div>\n\n\n  <div>\n    <div>\n      <span class=\"glyphicon glyphicon-menu-hamburger pull-right glyphiconblack\"></span>\n      <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}/widget/{{ wgid }}\">\n        <span class=\"glyphicon glyphicon-cog pull-right glyphiconlightblue\" ></span>\n      </a>\n      <h2>Tom and Jerry Episode 104</h2>\n    </div>\n    <div>\n      <span class=\"glyphicon glyphicon-menu-hamburger pull-right glyphiconblack\"></span>\n      <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}/widget/{{ wgid }}\">\n        <span class=\"glyphicon glyphicon-cog pull-right glyphiconlightblue\"></span>\n      </a>\n      <iframe class=\"content\" src=\"https://www.youtube.com/embed/er8RzbAoW_g\" allowfullscreen></iframe>\n    </div>\n    <div>\n      <a routerLink=\"/profile/{{ uid }}/website/{{ wid }}/page/{{ pid }}/widget/{{ wgid }}\">\n      <span class=\"glyphicon glyphicon-menu-hamburger pull-right glyphiconblack\"></span>\n      <span class=\"glyphicon glyphicon-cog pull-right glyphiconlightblue\"></span>\n      </a>\n      <p class=\"justify\">Tom and Jerry is an American animated series of short films created in 1940, by William Hanna and Joseph\n        Barbera. It centers on a rivalry between its two title characters, Tom and Jerry, and many recurring\n        characters, based around slapstick comedy.\n        In its original run, Hanna and Barbera produced 114 Tom and Jerry shorts for Metro-Goldwyn-Mayer from 1940\n        to 1958. During this time, they won seven Academy Awards for Animated Short Film, tying for first place with\n        Walt Disney's Silly Symphonies with the most awards in the category. After the MGM cartoon studio closed in\n        1958, MGM revived the series with Gene Deitch directing an additional 13 Tom and Jerry shorts for Rembrandt\n        Films from 1961 to 1962. Tom and Jerry then became the highest-grossing animated short film series of that\n        time, overtaking Looney Tunes. Chuck Jones then produced another 34 shorts with Sib-Tower 12 Productions\n        between 1963 and 1967. Three more shorts were produced, The Mansion Cat in 2001, The Karate Guard in 2005,\n        and \"A Fundraising Adventure\" in 2014, making a total of 164 shorts. Various shorts have been released for\n        home media since the 1990s.\n      </p>\n    </div>\n  </div>\n\n\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text \">\n        <a class=\"glyphiconblack\">\n          <span class=\"glyphicon glyphicon-play pull-left\"></span>\n          <span class=\"glyphicon glyphicon-eye-open pull-left margin\"></span>\n        </a>\n      </p>\n\n      <p class=\"navbar-text pull-right\">\n        <a routerLink=\"/profile\">\n          <span class=\"glyphicon glyphicon-user pull-right\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetListComponent = (function () {
    // widgetType: String;
    // size: number;
    // text: String;
    function WidgetListComponent(widgetService, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.getYoutubeEmbedUrl = function (link) {
        var embedUrl = 'https://www.youtube.com/embed/';
        var parsedLink = link.split('/');
        embedUrl += parsedLink[parsedLink.length - 1];
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    };
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findAllWidgetsForPageId(_this.pid)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        });
    };
    return WidgetListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WidgetListComponent.prototype, "widgetForm", void 0);
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page(pid, name, wid, description) {
        this.pid = pid;
        this.name = name;
        this.wid = wid;
        this.description = description;
    }
    return Page;
}());

//# sourceMappingURL=page.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(uid, username, password, firstName, lastName) {
        this.uid = uid;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(wid, name, developerId, description) {
        this.wid = wid;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createPage': this.createPage,
            'findAllPagesForWebsiteId': this.findAllPagesForWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page.pid = Math.random().toString();
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findAllPagesForWebsiteId = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, editedPage) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.put(url, editedPage)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        user.uid = (Math.random()).toString();
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { WEBSITES } from './website.mock.client';




var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWebsite': this.createWebsite,
            'findAllWebsitesForUser': this.findAllWebsitesForUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website.wid = (new Date()).getTime().toString();
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findAllWebsitesForUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (userId, websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, newWebsite) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.put(url, newWebsite)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Widget } from '../models/widget.model.client';




var WidgetService = (function () {
    // 'http://localhost:3100'
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWidget': this.createWidget,
            'findAllWidgetsForPageId': this.findAllWidgetsForPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget.wgid = Math.random().toString();
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findAllWidgetsForPageId = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, editedWidget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.put(url, editedWidget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map