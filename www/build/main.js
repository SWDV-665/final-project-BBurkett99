webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\brdbu\Desktop\Maryville\SWDV_665 ADV TOPICS\Notes\Week_08\health\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Blood Sugar" tabIcon="water"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Blood Pressure" tabIcon="pulse"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Information/Contact" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\brdbu\Desktop\Maryville\SWDV_665 ADV TOPICS\Notes\Week_08\health\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    AboutPage.prototype.btnClicked = function () {
        //Calculate average blood pressure
        var systolic = (+this.systolicInput1 + +this.systolicInput2 + +this.systolicInput3 + +this.systolicInput4) / 4;
        var diastolic = (+this.diastolicInput1 + +this.diastolicInput2 + +this.diastolicInput3 + +this.diastolicInput4) / 4;
        var alert = this.alertCtrl.create({
            title: 'Blood Pressure',
            message: "Average Systolic reading for the month - " + systolic +
                "<br/>Average diastolic for the month - " + diastolic,
            buttons: ['Ok'],
        });
        alert.present();
        //Warning for high blood Pressure
        if (systolic > 130 || diastolic > 90) {
            var alert_1 = this.alertCtrl.create({
                title: 'Warning',
                message: "Your Average Blood Pressure Level is High " +
                    "<br/> Please disscuss this with your doctor",
                buttons: ['Ok'],
            });
            alert_1.present();
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\brdbu\Desktop\Maryville\SWDV_665 ADV TOPICS\Notes\Week_08\health\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div text-center>\n        Health Helper App <ion-icon name="heart"> </ion-icon>\n    </div>\n    </ion-title>\n  </ion-navbar>\n  <ion-list-header color="primary">Blood Pressure Inputs</ion-list-header>\n</ion-header>\n\n<!--Input screen for blood pressure-->\n<ion-content padding>\n  <ion-item>\n    <ion-label color="dark">Enter Systolic - week 1</ion-label>\n    <ion-input type="number" [(ngModel)]="systolicInput1"> </ion-input>\n\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Enter Diastolic - week 1</ion-label>\n    <ion-input type="number" [(ngModel)]="diastolicInput1"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark">Enter Systolic - week 2</ion-label>\n    <ion-input type="number" [(ngModel)]="systolicInput2"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Enter Diastolic - week 2</ion-label>\n    <ion-input type="number" [(ngModel)]="diastolicInput2"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark">Enter Systolic - week 3</ion-label>\n    <ion-input type="number" [(ngModel)]="systolicInput3"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Enter Diastolic - week 3</ion-label>\n    <ion-input type="number" [(ngModel)]="diastolicInput3"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark">Enter Systolic - week 4</ion-label>\n    <ion-input type="number" [(ngModel)]="systolicInput4"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Enter Diastolic - week 4</ion-label>\n    <ion-input type="number" [(ngModel)]="diastolicInput4"> </ion-input>\n  </ion-item>\n\n  <!--On click send to .ts-->\n  <div text-center>\n  <button ion-button (click)="btnClicked()">Average for the month</button>\n  </div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\brdbu\Desktop\Maryville\SWDV_665 ADV TOPICS\Notes\Week_08\health\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], AboutPage);
    return AboutPage;
    var _a, _b;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\brdbu\Desktop\Maryville\SWDV_665 ADV TOPICS\Notes\Week_08\health\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div text-center>\n      Information and Contact\n    </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header color="primary">Follow Ionic on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n  <!--Student information is displayed in the center of the page-->\n  <div text-center>\n    <h1>Student Name: Bradley Burkett<br>Student ID: 0935561</h1>\n  </div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\brdbu\Desktop\Maryville\SWDV_665 ADV TOPICS\Notes\Week_08\health\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.btnClicked = function () {
        //Calculate average blood sugar and weight
        var bSugar = (+this.bloodSugarInput1 + +this.bloodSugarInput2 + +this.bloodSugarInput3 + +this.bloodSugarInput4) / 4;
        var weight = (+this.weightInput1 + +this.weightInput2 + +this.weightInput3 + +this.weightInput4) / 4;
        var alert = this.alertCtrl.create({
            title: 'Blood Sugar/ weight',
            message: "Average Blood sugar reading for the month - " + bSugar +
                "<br/>Average weight for the month - " + weight,
            buttons: ['Ok'],
        });
        alert.present();
        //Warning for high blood sugar
        if (bSugar > 150) {
            var alert_1 = this.alertCtrl.create({
                title: 'Warning',
                message: "Your Average Blood Sugar Level is High " +
                    "<br/> Please disscuss this with your doctor",
                buttons: ['Ok'],
            });
            alert_1.present();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\brdbu\Desktop\Maryville\SWDV_665 ADV TOPICS\Notes\Week_08\health\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div text-center>\n        Health Helper App <ion-icon name="heart"> </ion-icon>\n      </div>\n    </ion-title>\n  </ion-navbar>\n  <ion-list-header color="primary">Blood Sugar and weight Inputs</ion-list-header>\n</ion-header>\n\n<!--Input screen for blood sugar and weight-->\n<ion-content padding>\n  <ion-item>\n    <ion-label color="primary">Enter blood sugar - week 1</ion-label>\n    <ion-input type="number" [(ngModel)]="bloodSugarInput1"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="secondary">Enter weight - week 1</ion-label>\n    <ion-input type="number" [(ngModel)]="weightInput1"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Enter blood sugar - week 2</ion-label>\n    <ion-input type="number" [(ngModel)]="bloodSugarInput2"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="secondary">Enter weight - week 2</ion-label>\n    <ion-input type="number" [(ngModel)]="weightInput2"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Enter blood sugar - week 3</ion-label>\n    <ion-input type="number" [(ngModel)]="bloodSugarInput3"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="secondary">Enter weight - week 3</ion-label>\n    <ion-input type="number" [(ngModel)]="weightInput3"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Enter blood sugar - week 4</ion-label>\n    <ion-input type="number" [(ngModel)]="bloodSugarInput4"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="secondary">Enter weight - week 4</ion-label>\n    <ion-input type="number" [(ngModel)]="weightInput4"> </ion-input>\n  </ion-item>\n\n  <!--On click send to .ts-->\n  <div text-center>\n  <button ion-button (click)="btnClicked()">Average for the month</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\brdbu\Desktop\Maryville\SWDV_665 ADV TOPICS\Notes\Week_08\health\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\brdbu\Desktop\Maryville\SWDV_665 ADV TOPICS\Notes\Week_08\health\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\brdbu\Desktop\Maryville\SWDV_665 ADV TOPICS\Notes\Week_08\health\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map