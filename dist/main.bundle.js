webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main_frame{\n    width: 100%;\n    height:100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/bgImage.jpg") + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: fixed;\n}\n.title{\n    width:100%;\n    height:auto;\n    color: #ff471a;\n    font-size:50px;\n    font-family: 'Sedgwick Ave Display', cursive;\n    text-align: center;\n    padding-top:15%;\n} \n.description{\n    width:100%;\n    height:auto;\n    color:whitesmoke;\n    text-align: center;\n    font-size: 20px;\n    font-family: 'Slabo 27px', serif;\n    margin-top:5%;\n    padding-left:9%;\n    padding-right:9%;\n    padding-bottom:7.5%;\n}\n#downBtn{\n    border-radius:18px;\n    font-family:  'Josefin Sans', sans-serif;\n}\n#main_section{\n    width:100%;\n    height: 100%;\n    background-color: #21232A;\n    color:whitesmoke;\n    box-sizing: border-box;\n}\n#main_section .message{\n    width:100%;\n    height:15%;\n    font-size:30px;\n    font-family: 'Oswald', sans-serif;\n    padding-left:3%;\n    padding-top:5%;\n    text-decoration: underline;\n}\n#main_section .error_block{\n    width:80%;\n    padding-left:2%;\n    padding-right:2%;\n    margin-left:2%;\n    margin-right:2%;\n    margin-top:2%;\n}\nform{\n    padding-top:4%;\n    padding-bottom:4%;\n}\n.adjustWidth{\n    width:50%;\n}\n.adjustPadding{\n    padding-left:5%;\n}\n.row{\n    margin-top:2%;\n    width:100%;\n}\ninput[type=\"checkbox\"]{\n    margin-left:25%;\n}\nhr{\n    border: 1px solid #FFA500;\n    width:90%;\n    padding-left:0.5%;\n    padding-right:2%;\n}\n.checkbox{\n    width: 20px;\n    height: 20px;\n    \n}\ninput[type=\"submit\"]{\n    margin-left:7%;\n    margin-top:2%;\n    margin-bottom:2%;\n}\n\n/* Smartphones - both portrait and landscape */\n\n@media only screen and ( min-width: 320px ) and ( max-width: 720px ){\n\n    .title{\n        font-size:25px;\n    }\n    .description{\n        font-size:15px;\n    }\n    #main_section .message{\n        font-size:15px;\n    }\n    .adjustWidth{\n        width:90%;\n    }\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main_frame\">\n  <div class=\"title\">\n    PASSWORD GENERATOR\n  </div>\n  <div class=\"description\">\n    Secure your accounts with a password that cannot be cracked by simple brute force methods. Use the password generator below to generate secure passwords without wasting time.\n    Generate passwords by giving the required password length and choosing the desired level of encryption. <br /><br /><br /><br />\n    <a href=\"#main_section\" class=\"btn btn-outline-warning\" id=\"downBtn\">\n      <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n      Generate Password\n    </a>\n  </div>\n</div>\n<div id=\"main_section\">\n  <div class=\"message\">\n    Give the details asked below and click \"Generate Password\" to get your password! \n  </div>\n  <div class=\"alert alert-danger error_block\" *ngIf=\"ErrorOccurred\" role=\"alert\">\n    <b>Sorry! An error occurred during password generation. It might be due to one of the following reasons</b><br />\n    1. Password length might be less than 7 characters.<br />\n    2. Atleast one of digits or special characters must be included in your password.\n  </div>\n  <app-print-result *ngIf=\"passwordGenerated\" [generatedPassword] = \"reqdPassword\" (close)=\"closePwdDisplay()\" ></app-print-result>\n  <form #passwordGenerator=\"ngForm\" (ngSubmit)=\"generatePassword()\">\n    <div class=\"row\">\n      <label class=\"col-4 adjustPadding\" htmlFor=\"pwdLength\">Password Length</label>\n      <div class=\"col-8\">\n        <input type=\"number\" [(ngModel)]=\"Length\" name=\"pwdLength\" class=\"form-control adjustWidth\" placeholder=\"Total Length of password\" required >  \n      </div>  \n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <input type=\"checkbox\" name=\"uppercase\" class=\"checkbox\" [disabled]=\"UpperCase\" [(ngModel)]=\"UpperCase\" required>  \n      </div> \n      <label class=\"col-10\" htmlFor=\"uppercase\">Include Uppercase letters [A-Z]</label> \n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <input type=\"checkbox\" name=\"lowercase\" class=\"checkbox\" [disabled]=\"LowerCase\" [(ngModel)]=\"LowerCase\" required>  \n      </div> \n      <label class=\"col-10\" htmlFor=\"lowercase\">Include Lowercase letters [a-z]</label> \n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <input type=\"checkbox\" name=\"digits\" class=\"checkbox\" [(ngModel)]=\"Digits\" required>  \n      </div> \n      <label class=\"col-10\" htmlFor=\"digits\">Include Digits [0-9]</label> \n    </div>  \n    <hr />\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <input type=\"checkbox\" name=\"special\" class=\"checkbox\" [(ngModel)]=\"Special\" required>  \n      </div> \n      <label class=\"col-10\" htmlFor=\"special\">Include Special Characters [@,!,~,$,^,#]</label> \n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Generate Password\">\n      </div>\n    </div>\n  </form> \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.UpperCase = true;
        this.LowerCase = true;
        this.Digits = false;
        this.Special = false;
        this.ErrorOccurred = false;
        this.passwordGenerated = false;
    }
    AppComponent.prototype.generateUpperCaseString = function (count) {
        var charString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var index;
        var finalString = "";
        for (index = 1; index <= count; ++index) {
            var randomNumber = Math.floor(Math.random() * 26);
            finalString += charString.charAt(randomNumber);
        }
        return finalString;
    };
    AppComponent.prototype.generateLowerCaseString = function (count) {
        var charString = "abcdefghijklmnopqrstuvwxyz";
        var index;
        var finalString = "";
        for (index = 1; index <= count; ++index) {
            var randomNumber = Math.floor(Math.random() * 26);
            finalString += charString.charAt(randomNumber);
        }
        return finalString;
    };
    AppComponent.prototype.generateDigitsString = function (count) {
        var charString = "0123456789";
        var index;
        var finalString = "";
        for (index = 1; index <= count; ++index) {
            var randomNumber = Math.floor(Math.random() * 10);
            finalString += charString.charAt(randomNumber);
        }
        return finalString;
    };
    AppComponent.prototype.generateSpecialChars = function (count) {
        var charString = "@!~$^#";
        var index;
        var finalString = "";
        for (index = 1; index <= count; ++index) {
            var randomNumber = Math.floor(Math.random() * 6);
            finalString += charString.charAt(randomNumber);
        }
        return finalString;
    };
    AppComponent.prototype.closePwdDisplay = function () {
        this.passwordGenerated = false;
    };
    AppComponent.prototype.generatePassword = function () {
        this.ErrorOccurred = false;
        this.passwordGenerated = false;
        var count = 2;
        var finalString = "";
        if (this.Digits) {
            count++;
        }
        if (this.Special) {
            count++;
        }
        if (count > 2 && this.Length > 6) {
            var tempCount = this.Length;
            var LowerCaseCount = Math.floor(tempCount / 2);
            var LowerCaseString = this.generateLowerCaseString(LowerCaseCount);
            finalString += LowerCaseString;
            tempCount -= LowerCaseString.length;
            var UpperCaseCount = Math.floor(Math.random() * (tempCount - 2) + 1);
            var UpperCaseString = this.generateUpperCaseString(UpperCaseCount);
            finalString += UpperCaseString;
            tempCount -= UpperCaseString.length;
            if (this.Digits && this.Special) {
                var DigitsCount = Math.floor(Math.random() * (tempCount - 1) + 1);
                var DigitsString = this.generateDigitsString(DigitsCount);
                finalString += DigitsString;
                tempCount -= DigitsString.length;
                var SpecialCharsCount = tempCount;
                var SpecialCharsString = this.generateSpecialChars(SpecialCharsCount);
                finalString += SpecialCharsString;
                tempCount -= SpecialCharsString.length;
            }
            else if (this.Digits) {
                var DigitsCount = tempCount;
                var DigitsString = this.generateDigitsString(DigitsCount);
                finalString += DigitsString;
                tempCount -= DigitsString.length;
            }
            else if (this.Special) {
                var SpecialCharsCount = tempCount;
                var SpecialCharsString = this.generateSpecialChars(SpecialCharsCount);
                finalString += SpecialCharsString;
                tempCount -= SpecialCharsString.length;
            }
            var stringArray = finalString.split("");
            var index = void 0;
            for (index = 0; index < stringArray.length; ++index) {
                var index1 = Math.floor(Math.random() * stringArray.length);
                var temp = stringArray[index];
                stringArray[index] = stringArray[index1];
                stringArray[index1] = temp;
            }
            finalString = stringArray.join("");
            this.reqdPassword = finalString;
            this.ErrorOccurred = false;
            this.passwordGenerated = true;
            this.Digits = false;
            this.Special = false;
            this.Length = null;
            window.location.href = "#main_frame";
        }
        else {
            this.ErrorOccurred = true;
        }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('passwordGenerator'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], AppComponent.prototype, "pwdGenerator", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__print_result_print_result_component__ = __webpack_require__("../../../../../src/app/print-result/print-result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__print_result_print_result_component__["a" /* PrintResultComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/print-result/print-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#print_result{\n    width:50%;\n    height:40%;\n    padding-left:4%;\n    padding-right:2%;\n    padding-top:8%;\n    font-size:125%;\n    position:absolute;\n    left:0;\n    right:0;\n    top:0;\n    bottom:0;\n    margin:auto;\n    z-index: 3;\n    background-color: #21232A;\n    color:whitesmoke;\n    border-radius:4px;\n    border:1px solid #FFA500;\n    font-family: 'Josefin Sans', sans-serif;\n\n}\n#closeBtn{\n    position:absolute;\n    right:3%;\n    bottom:3%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/print-result/print-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"print_result\">\n  Your secure random password is : {{ generatedPassword }}.\n  <button class=\"btn btn-warning\" type=\"button\" id=\"closeBtn\" (click)=\"hidePwdDisplay()\" >Close</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/print-result/print-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintResultComponent; });
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

var PrintResultComponent = (function () {
    function PrintResultComponent() {
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    PrintResultComponent.prototype.ngOnInit = function () {
    };
    PrintResultComponent.prototype.hidePwdDisplay = function () {
        this.close.emit();
    };
    return PrintResultComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], PrintResultComponent.prototype, "generatedPassword", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], PrintResultComponent.prototype, "close", void 0);
PrintResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-print-result',
        template: __webpack_require__("../../../../../src/app/print-result/print-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/print-result/print-result.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrintResultComponent);

//# sourceMappingURL=print-result.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/bgImage.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bgImage.0534ae1c3385743f89da.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
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