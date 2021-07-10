(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\saurab.sen\Desktop\Projects\thedezzin\src\main.ts */"zUnb");


/***/ }),

/***/ "0sl/":
/*!********************************************************************************!*\
  !*** ./src/app/Design/all-resource/content-design/content-design.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContentDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentDesignComponent", function() { return ContentDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ContentDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class ContentDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getContent().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
ContentDesignComponent.ɵfac = function ContentDesignComponent_Factory(t) { return new (t || ContentDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
ContentDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentDesignComponent, selectors: [["app-content-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function ContentDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContentDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["a[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGVudC1kZXNpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUVHLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFBSCIsImZpbGUiOiJjb250ZW50LWRlc2lnbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlclxyXG57XHJcbiAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "1GOB":
/*!*************************************************************!*\
  !*** ./src/app/Design/main-design/main-design.component.ts ***!
  \*************************************************************/
/*! exports provided: MainDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDesignComponent", function() { return MainDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _landing_banner_landing_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../landing-banner/landing-banner.component */ "6u+b");
/* harmony import */ var _ad_design_ad_design_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ad-design/ad-design.component */ "hrfc");
/* harmony import */ var _side_navbar_design_side_navbar_design_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../side-navbar-design/side-navbar-design.component */ "TWAQ");
/* harmony import */ var _resource_design_resource_design_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resource-design/resource-design.component */ "sPlL");





class MainDesignComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainDesignComponent.ɵfac = function MainDesignComponent_Factory(t) { return new (t || MainDesignComponent)(); };
MainDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainDesignComponent, selectors: [["app-main-design"]], decls: 11, vars: 0, consts: [[1, "container-fluid", "pt-3"], [1, "row"], [1, "col-md-9"], [1, "col-md-3"], [1, "row", "mt-3", "pt-5", 2, "background", "#F2F8Fc"]], template: function MainDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-landing-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-ad-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-side-navbar-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-resource-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_landing_banner_landing_banner_component__WEBPACK_IMPORTED_MODULE_1__["LandingBannerComponent"], _ad_design_ad_design_component__WEBPACK_IMPORTED_MODULE_2__["AdDesignComponent"], _side_navbar_design_side_navbar_design_component__WEBPACK_IMPORTED_MODULE_3__["SideNavbarDesignComponent"], _resource_design_resource_design_component__WEBPACK_IMPORTED_MODULE_4__["ResourceDesignComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWRlc2lnbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "5pr1":
/*!**************************************************!*\
  !*** ./src/app/Design/service/design.service.ts ***!
  \**************************************************/
/*! exports provided: DesignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignService", function() { return DesignService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DesignService {
    constructor(http) {
        this.http = http;
    }
    getAccessibility() {
        return this.http.get("../../../assets/Json-files/accessibility.json");
    }
    getAnimation() {
        return this.http.get("../../../assets/Json-files/animation.json");
    }
    getBooks() {
        return this.http.get("../../../assets/Json-files/books.json");
    }
    getColor() {
        return this.http.get("../../../assets/Json-files/color.json");
    }
    getContent() {
        return this.http.get("../../../assets/Json-files/content.json");
    }
    getDesignSystem() {
        return this.http.get("../../../assets/Json-files/design-system.json");
    }
    getGradient() {
        return this.http.get("../../../assets/Json-files/gradient.json");
    }
    getIcon() {
        return this.http.get("../../../assets/Json-files/icon.json");
    }
    getIllustration() {
        return this.http.get("../../../assets/Json-files/illustration.json");
    }
    getMockup() {
        return this.http.get("../../../assets/Json-files/mockup.json");
    }
    getInspiration() {
        return this.http.get("../../../assets/Json-files/inspiration.json");
    }
    getPatternAndAbstract() {
        return this.http.get("../../../assets/Json-files/pattern-and-abstract.json");
    }
    getImage() {
        return this.http.get("../../../assets/Json-files/stock-image.json");
    }
    getVideo() {
        return this.http.get("../../../assets/Json-files/video-image.json");
    }
    getTypography() {
        return this.http.get("../../../assets/Json-files/typography.json");
    }
}
DesignService.ɵfac = function DesignService_Factory(t) { return new (t || DesignService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DesignService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DesignService, factory: DesignService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6u+b":
/*!*******************************************************************!*\
  !*** ./src/app/Design/landing-banner/landing-banner.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingBannerComponent", function() { return LandingBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LandingBannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingBannerComponent.ɵfac = function LandingBannerComponent_Factory(t) { return new (t || LandingBannerComponent)(); };
LandingBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingBannerComponent, selectors: [["app-landing-banner"]], decls: 8, vars: 0, consts: [[1, "", 2, "display", "flex"], [1, "lp-header"], [1, "align-middle"], [2, "font-size", "1.5em"], [1, "bg-image", 2, "height", "13em", "width", "100%"]], template: function LandingBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is One-Stop solution for all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Design Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg-image[_ngcontent-%COMP%] {\n  background: url('dancing.png') center no-repeat;\n  background-size: 18em;\n  animation: mymove 5s infinite;\n  height: 100%;\n  position: relative;\n  animation-direction: alternate;\n}\n\n@keyframes mymove {\n  from {\n    bottom: 0px;\n  }\n  to {\n    bottom: 30px;\n  }\n}\n\n.lp-header[_ngcontent-%COMP%] {\n  width: 160em;\n  margin-top: 2em;\n  margin-left: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYW5kaW5nLWJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUFNLFdBQUE7RUFDTjtFQUFBO0lBQUksWUFBQTtFQUdKO0FBQ0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0YiLCJmaWxlIjoibGFuZGluZy1iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9kZXNpZ24taW1nL2RhbmNpbmcucG5nXCIpIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxOGVtO1xyXG4gIGFuaW1hdGlvbjogbXltb3ZlIDVzIGluZmluaXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy9hbmltYXRpb246IG15bW92ZSA1cyAyO1xyXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBteW1vdmUge1xyXG4gIGZyb20ge2JvdHRvbTogMHB4O31cclxuICB0byB7Ym90dG9tOiAzMHB4O31cclxufVxyXG5cclxuLmxwLWhlYWRlciB7XHJcbiAgd2lkdGg6IDE2MGVtO1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AGR0":
/*!**************************************************************************************!*\
  !*** ./src/app/Design/all-resource/typography-design/typography-design.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TypographyDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyDesignComponent", function() { return TypographyDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TypographyDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class TypographyDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getTypography().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
TypographyDesignComponent.ɵfac = function TypographyDesignComponent_Factory(t) { return new (t || TypographyDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
TypographyDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypographyDesignComponent, selectors: [["app-typography-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function TypographyDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TypographyDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".logo-style[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  background: #f7f7f7;\n  padding: 10px;\n  border-radius: 48px;\n  display: flex;\n  justify-content: center;\n  vertical-align: middle;\n  margin-bottom: 15px;\n}\n\n.logo-style[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdHlwb2dyYXBoeS1kZXNpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFFRyxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUgiLCJmaWxlIjoidHlwb2dyYXBoeS1kZXNpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1zdHlsZSB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0OHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubG9nby1zdHlsZSBpbWcge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyXHJcbntcclxuICAgY29sb3I6IzAwMDAwMDtcclxuICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
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

/***/ "BVHh":
/*!****************************************************************************!*\
  !*** ./src/app/Design/all-resource/image-design/image-design.component.ts ***!
  \****************************************************************************/
/*! exports provided: ImageDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDesignComponent", function() { return ImageDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ImageDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class ImageDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getImage().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
ImageDesignComponent.ɵfac = function ImageDesignComponent_Factory(t) { return new (t || ImageDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
ImageDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageDesignComponent, selectors: [["app-image-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function ImageDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Stock Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImageDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".logo-style[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  background: #f7f7f7;\n  padding: 10px;\n  border-radius: 48px;\n  display: flex;\n  justify-content: center;\n  vertical-align: middle;\n  margin-bottom: 15px;\n}\n\n.logo-style[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW1hZ2UtZGVzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBRUcsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFIIiwiZmlsZSI6ImltYWdlLWRlc2lnbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLXN0eWxlIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5sb2dvLXN0eWxlIGltZyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXJcclxue1xyXG4gICBjb2xvcjojMDAwMDAwO1xyXG4gICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "HXHz":
/*!****************************************************************************************!*\
  !*** ./src/app/Design/all-resource/inspiration-design/inspiration-design.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InspirationDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspirationDesignComponent", function() { return InspirationDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function InspirationDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class InspirationDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getInspiration().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
InspirationDesignComponent.ɵfac = function InspirationDesignComponent_Factory(t) { return new (t || InspirationDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
InspirationDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InspirationDesignComponent, selectors: [["app-inspiration-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function InspirationDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Inspiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InspirationDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".logo-style[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  background: #f7f7f7;\n  padding: 10px;\n  border-radius: 48px;\n  display: flex;\n  justify-content: center;\n  vertical-align: middle;\n  margin-bottom: 15px;\n}\n\n.logo-style[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5zcGlyYXRpb24tZGVzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBRUcsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFIIiwiZmlsZSI6Imluc3BpcmF0aW9uLWRlc2lnbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLXN0eWxlIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5sb2dvLXN0eWxlIGltZyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXJcclxue1xyXG4gICBjb2xvcjojMDAwMDAwO1xyXG4gICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "K0ZJ":
/*!**********************************************************************************!*\
  !*** ./src/app/Design/all-resource/gradient-design/gradient-design.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GradientDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientDesignComponent", function() { return GradientDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function GradientDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class GradientDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getGradient().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
GradientDesignComponent.ɵfac = function GradientDesignComponent_Factory(t) { return new (t || GradientDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
GradientDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradientDesignComponent, selectors: [["app-gradient-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function GradientDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GradientDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["a[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3JhZGllbnQtZGVzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFFRyxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUgiLCJmaWxlIjoiZ3JhZGllbnQtZGVzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyXHJcbntcclxuICAgY29sb3I6IzAwMDAwMDtcclxuICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "QEnZ":
/*!****************************************************************************!*\
  !*** ./src/app/Design/all-resource/video-design/video-design.component.ts ***!
  \****************************************************************************/
/*! exports provided: VideoDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDesignComponent", function() { return VideoDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function VideoDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class VideoDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getTypography().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
VideoDesignComponent.ɵfac = function VideoDesignComponent_Factory(t) { return new (t || VideoDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
VideoDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoDesignComponent, selectors: [["app-video-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function VideoDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Stock Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VideoDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".logo-style[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  background: #f7f7f7;\n  padding: 10px;\n  border-radius: 48px;\n  display: flex;\n  justify-content: center;\n  vertical-align: middle;\n  margin-bottom: 15px;\n}\n\n.logo-style[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlkZW8tZGVzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBRUcsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFIIiwiZmlsZSI6InZpZGVvLWRlc2lnbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLXN0eWxlIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5sb2dvLXN0eWxlIGltZyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXJcclxue1xyXG4gICBjb2xvcjojMDAwMDAwO1xyXG4gICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "QeCE":
/*!**********************************************************************!*\
  !*** ./src/app/Design/all-resource/animation/animation.component.ts ***!
  \**********************************************************************/
/*! exports provided: AnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationComponent", function() { return AnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AnimationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class AnimationComponent {
    constructor(designService) {
        this.designService = designService;
        this.animationItem = [];
    }
    ngOnInit() {
        this.designService.getAnimation().subscribe(data => {
            this.animationItem = data;
            console.log(data);
        });
    }
}
AnimationComponent.ɵfac = function AnimationComponent_Factory(t) { return new (t || AnimationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
AnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimationComponent, selectors: [["app-animation"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function AnimationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnimationComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.animationItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["a[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYW5pbWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBREY7O0FBSUE7RUFFRyxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRkgiLCJmaWxlIjoiYW5pbWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5hIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXJcclxue1xyXG4gICBjb2xvcjojMDAwMDAwO1xyXG4gICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Navigation_topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation/topnavbar/topnavbar.component */ "bc4U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'thedezzin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topnavbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_Navigation_topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_1__["TopnavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TWAQ":
/*!***************************************************************************!*\
  !*** ./src/app/Design/side-navbar-design/side-navbar-design.component.ts ***!
  \***************************************************************************/
/*! exports provided: SideNavbarDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavbarDesignComponent", function() { return SideNavbarDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a1) { return { "mat-elevation-z5": true, "sticky": a1 }; };
const _c1 = function () { return ["/design/all-resource"]; };
const _c2 = function () { return ["/design/accessibility"]; };
const _c3 = function () { return ["/design/animation"]; };
const _c4 = function () { return ["/design/books"]; };
const _c5 = function () { return ["/design/color"]; };
const _c6 = function () { return ["/design/content"]; };
const _c7 = function () { return ["/design/inspiration"]; };
const _c8 = function () { return ["/design/design-system"]; };
const _c9 = function () { return ["/design/gradient"]; };
const _c10 = function () { return ["/design/icon"]; };
const _c11 = function () { return ["/design/illustration"]; };
const _c12 = function () { return ["/design/mockup"]; };
const _c13 = function () { return ["/design/pattern-and-abstract"]; };
const _c14 = function () { return ["/design/stock-image"]; };
const _c15 = function () { return ["/design/stock-video"]; };
const _c16 = function () { return ["/design/typography"]; };
class SideNavbarDesignComponent {
    constructor() {
        this.isSticky = false;
    }
    checkScroll() {
        this.isSticky = window.pageYOffset >= 400;
    }
    ngOnInit() {
    }
}
SideNavbarDesignComponent.ɵfac = function SideNavbarDesignComponent_Factory(t) { return new (t || SideNavbarDesignComponent)(); };
SideNavbarDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavbarDesignComponent, selectors: [["app-side-navbar-design"]], hostBindings: function SideNavbarDesignComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SideNavbarDesignComponent_scroll_HostBindingHandler($event) { return ctx.checkScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 35, vars: 35, consts: [["id", "secondToolbar", "color", "warn", 1, "card", 3, "ngClass"], [1, "card-body", 2, "overflow-y", "scroll", "height", "88vh"], [1, "nav", "flex-column"], [1, "nav-link", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "nav-link", 3, "routerLink"]], template: function SideNavbarDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Accessibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Content Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Design Inspiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Design System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gradiant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Illustration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Mockup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Pattern and Abstract");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Stock Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Stock Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isSticky));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c14));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c15));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c16));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".fixed-header[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  height: 50px;\n}\n\n#frugalmap[_ngcontent-%COMP%] {\n  width: 100%;\n  top: 50px;\n  position: relative;\n}\n\n.mat-elevation-z5[_ngcontent-%COMP%] {\n  position: relative;\n  width: 19em !important;\n}\n\n.sticky[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 5px;\n  width: 19em !important;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlLW5hdmJhci1kZXNpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUVFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRiIsImZpbGUiOiJzaWRlLW5hdmJhci1kZXNpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWQtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDo5OTk7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4jZnJ1Z2FsbWFwIHtcclxuICAvL2hlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1hdC1lbGV2YXRpb24tejUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTllbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1cHg7XHJcbiAgd2lkdGg6IDE5ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxubmF2IGEge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Navigation_topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation/topnavbar/topnavbar.component */ "bc4U");
/* harmony import */ var _Design_landing_banner_landing_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Design/landing-banner/landing-banner.component */ "6u+b");
/* harmony import */ var _Design_main_design_main_design_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Design/main-design/main-design.component */ "1GOB");
/* harmony import */ var _Design_ad_design_ad_design_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Design/ad-design/ad-design.component */ "hrfc");
/* harmony import */ var _Design_side_navbar_design_side_navbar_design_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Design/side-navbar-design/side-navbar-design.component */ "TWAQ");
/* harmony import */ var _Design_resource_design_resource_design_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Design/resource-design/resource-design.component */ "sPlL");
/* harmony import */ var _Design_all_resource_accessibility_accessibility_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Design/all-resource/accessibility/accessibility.component */ "zxRC");
/* harmony import */ var _Design_all_resource_animation_animation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Design/all-resource/animation/animation.component */ "QeCE");
/* harmony import */ var _Design_all_resource_all_design_resource_all_design_resource_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Design/all-resource/all-design-resource/all-design-resource.component */ "mni/");
/* harmony import */ var _Design_all_resource_books_design_books_design_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Design/all-resource/books-design/books-design.component */ "d/wM");
/* harmony import */ var _Design_all_resource_color_design_color_design_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Design/all-resource/color-design/color-design.component */ "oeA2");
/* harmony import */ var _Design_all_resource_content_design_content_design_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Design/all-resource/content-design/content-design.component */ "0sl/");
/* harmony import */ var _Design_all_resource_inspiration_design_inspiration_design_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Design/all-resource/inspiration-design/inspiration-design.component */ "HXHz");
/* harmony import */ var _Design_all_resource_designsystem_design_designsystem_design_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Design/all-resource/designsystem-design/designsystem-design.component */ "v9uY");
/* harmony import */ var _Design_all_resource_gradient_design_gradient_design_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Design/all-resource/gradient-design/gradient-design.component */ "K0ZJ");
/* harmony import */ var _Design_all_resource_icon_designsign_icon_designsign_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Design/all-resource/icon-designsign/icon-designsign.component */ "gI35");
/* harmony import */ var _Design_all_resource_illustration_design_illustration_design_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Design/all-resource/illustration-design/illustration-design.component */ "jee9");
/* harmony import */ var _Design_all_resource_mockup_design_mockup_design_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Design/all-resource/mockup-design/mockup-design.component */ "mgLG");
/* harmony import */ var _Design_all_resource_patternbg_design_patternbg_design_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Design/all-resource/patternbg-design/patternbg-design.component */ "uVS7");
/* harmony import */ var _Design_all_resource_image_design_image_design_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Design/all-resource/image-design/image-design.component */ "BVHh");
/* harmony import */ var _Design_all_resource_video_design_video_design_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Design/all-resource/video-design/video-design.component */ "QEnZ");
/* harmony import */ var _Design_all_resource_typography_design_typography_design_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Design/all-resource/typography-design/typography-design.component */ "AGR0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _Navigation_topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_4__["TopnavbarComponent"],
        _Design_landing_banner_landing_banner_component__WEBPACK_IMPORTED_MODULE_5__["LandingBannerComponent"],
        _Design_main_design_main_design_component__WEBPACK_IMPORTED_MODULE_6__["MainDesignComponent"],
        _Design_ad_design_ad_design_component__WEBPACK_IMPORTED_MODULE_7__["AdDesignComponent"],
        _Design_side_navbar_design_side_navbar_design_component__WEBPACK_IMPORTED_MODULE_8__["SideNavbarDesignComponent"],
        _Design_resource_design_resource_design_component__WEBPACK_IMPORTED_MODULE_9__["ResourceDesignComponent"],
        _Design_all_resource_accessibility_accessibility_component__WEBPACK_IMPORTED_MODULE_10__["AccessibilityComponent"],
        _Design_all_resource_animation_animation_component__WEBPACK_IMPORTED_MODULE_11__["AnimationComponent"],
        _Design_all_resource_all_design_resource_all_design_resource_component__WEBPACK_IMPORTED_MODULE_12__["AllDesignResourceComponent"],
        _Design_all_resource_books_design_books_design_component__WEBPACK_IMPORTED_MODULE_13__["BooksDesignComponent"],
        _Design_all_resource_color_design_color_design_component__WEBPACK_IMPORTED_MODULE_14__["ColorDesignComponent"],
        _Design_all_resource_content_design_content_design_component__WEBPACK_IMPORTED_MODULE_15__["ContentDesignComponent"],
        _Design_all_resource_inspiration_design_inspiration_design_component__WEBPACK_IMPORTED_MODULE_16__["InspirationDesignComponent"],
        _Design_all_resource_designsystem_design_designsystem_design_component__WEBPACK_IMPORTED_MODULE_17__["DesignsystemDesignComponent"],
        _Design_all_resource_gradient_design_gradient_design_component__WEBPACK_IMPORTED_MODULE_18__["GradientDesignComponent"],
        _Design_all_resource_icon_designsign_icon_designsign_component__WEBPACK_IMPORTED_MODULE_19__["IconDesignsignComponent"],
        _Design_all_resource_illustration_design_illustration_design_component__WEBPACK_IMPORTED_MODULE_20__["IllustrationDesignComponent"],
        _Design_all_resource_mockup_design_mockup_design_component__WEBPACK_IMPORTED_MODULE_21__["MockupDesignComponent"],
        _Design_all_resource_patternbg_design_patternbg_design_component__WEBPACK_IMPORTED_MODULE_22__["PatternbgDesignComponent"],
        _Design_all_resource_image_design_image_design_component__WEBPACK_IMPORTED_MODULE_23__["ImageDesignComponent"],
        _Design_all_resource_video_design_video_design_component__WEBPACK_IMPORTED_MODULE_24__["VideoDesignComponent"],
        _Design_all_resource_typography_design_typography_design_component__WEBPACK_IMPORTED_MODULE_25__["TypographyDesignComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


/***/ }),

/***/ "bc4U":
/*!*************************************************************!*\
  !*** ./src/app/Navigation/topnavbar/topnavbar.component.ts ***!
  \*************************************************************/
/*! exports provided: TopnavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavbarComponent", function() { return TopnavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TopnavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopnavbarComponent.ɵfac = function TopnavbarComponent_Factory(t) { return new (t || TopnavbarComponent)(); };
TopnavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopnavbarComponent, selectors: [["app-topnavbar"]], decls: 28, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-nofill"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [2, "width", "-webkit-fill-available"], [1, "nav", "justify-content-center"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"], [1, "nav", "justify-content-end"], ["href", "#", "tabindex", "-1", 1, "nav-link", "disabled"], ["src", "./../../../assets/saurab-new-profile.png", "alt", "", "width", "35", "height", "35", 2, "border-radius", "25px"]], template: function TopnavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "UXMarg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg-nofill[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #efefef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b3BuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGIiwiZmlsZSI6InRvcG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1ub2ZpbGwge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "d/wM":
/*!****************************************************************************!*\
  !*** ./src/app/Design/all-resource/books-design/books-design.component.ts ***!
  \****************************************************************************/
/*! exports provided: BooksDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksDesignComponent", function() { return BooksDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function BooksDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class BooksDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.animationItem = [];
    }
    ngOnInit() {
        this.designService.getBooks().subscribe(data => {
            this.animationItem = data;
            console.log(data);
        });
    }
}
BooksDesignComponent.ɵfac = function BooksDesignComponent_Factory(t) { return new (t || BooksDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
BooksDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooksDesignComponent, selectors: [["app-books-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function BooksDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BooksDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.animationItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["a[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYm9va3MtZGVzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBREY7O0FBSUE7RUFFRyxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRkgiLCJmaWxlIjoiYm9va3MtZGVzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5hIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXJcclxue1xyXG4gICBjb2xvcjojMDAwMDAwO1xyXG4gICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "gI35":
/*!**********************************************************************************!*\
  !*** ./src/app/Design/all-resource/icon-designsign/icon-designsign.component.ts ***!
  \**********************************************************************************/
/*! exports provided: IconDesignsignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconDesignsignComponent", function() { return IconDesignsignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function IconDesignsignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class IconDesignsignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getIcon().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
IconDesignsignComponent.ɵfac = function IconDesignsignComponent_Factory(t) { return new (t || IconDesignsignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
IconDesignsignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconDesignsignComponent, selectors: [["app-icon-designsign"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function IconDesignsignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IconDesignsignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".logo-style[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  background: #f7f7f7;\n  padding: 10px;\n  border-radius: 48px;\n  display: flex;\n  justify-content: center;\n  vertical-align: middle;\n  margin-bottom: 15px;\n}\n\n.logo-style[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaWNvbi1kZXNpZ25zaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBRUcsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFIIiwiZmlsZSI6Imljb24tZGVzaWduc2lnbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLXN0eWxlIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5sb2dvLXN0eWxlIGltZyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXJcclxue1xyXG4gICBjb2xvcjojMDAwMDAwO1xyXG4gICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "hrfc":
/*!*********************************************************!*\
  !*** ./src/app/Design/ad-design/ad-design.component.ts ***!
  \*********************************************************/
/*! exports provided: AdDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdDesignComponent", function() { return AdDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdDesignComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdDesignComponent.ɵfac = function AdDesignComponent_Factory(t) { return new (t || AdDesignComponent)(); };
AdDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdDesignComponent, selectors: [["app-ad-design"]], decls: 3, vars: 0, consts: [[1, "card"], [1, "card-body"]], template: function AdDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " This is some text within a card body. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZC1kZXNpZ24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "jee9":
/*!******************************************************************************************!*\
  !*** ./src/app/Design/all-resource/illustration-design/illustration-design.component.ts ***!
  \******************************************************************************************/
/*! exports provided: IllustrationDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IllustrationDesignComponent", function() { return IllustrationDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function IllustrationDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class IllustrationDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getIllustration().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
IllustrationDesignComponent.ɵfac = function IllustrationDesignComponent_Factory(t) { return new (t || IllustrationDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
IllustrationDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IllustrationDesignComponent, selectors: [["app-illustration-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function IllustrationDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Illustration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IllustrationDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".logo-style[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  background: #f7f7f7;\n  padding: 10px;\n  border-radius: 48px;\n  display: flex;\n  justify-content: center;\n  vertical-align: middle;\n  margin-bottom: 15px;\n}\n\n.logo-style[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaWxsdXN0cmF0aW9uLWRlc2lnbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUVHLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFBSCIsImZpbGUiOiJpbGx1c3RyYXRpb24tZGVzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tc3R5bGUge1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmxvZ28tc3R5bGUgaW1nIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlclxyXG57XHJcbiAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "mgLG":
/*!******************************************************************************!*\
  !*** ./src/app/Design/all-resource/mockup-design/mockup-design.component.ts ***!
  \******************************************************************************/
/*! exports provided: MockupDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockupDesignComponent", function() { return MockupDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MockupDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class MockupDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getMockup().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
MockupDesignComponent.ɵfac = function MockupDesignComponent_Factory(t) { return new (t || MockupDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
MockupDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MockupDesignComponent, selectors: [["app-mockup-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function MockupDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mockup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MockupDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".logo-style[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  background: #f7f7f7;\n  padding: 10px;\n  border-radius: 48px;\n  display: flex;\n  justify-content: center;\n  vertical-align: middle;\n  margin-bottom: 15px;\n}\n\n.logo-style[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9ja3VwLWRlc2lnbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUVHLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFBSCIsImZpbGUiOiJtb2NrdXAtZGVzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tc3R5bGUge1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmxvZ28tc3R5bGUgaW1nIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlclxyXG57XHJcbiAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "mni/":
/*!******************************************************************************************!*\
  !*** ./src/app/Design/all-resource/all-design-resource/all-design-resource.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AllDesignResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllDesignResourceComponent", function() { return AllDesignResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _accessibility_accessibility_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessibility/accessibility.component */ "zxRC");
/* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/animation.component */ "QeCE");
/* harmony import */ var _books_design_books_design_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../books-design/books-design.component */ "d/wM");
/* harmony import */ var _color_design_color_design_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color-design/color-design.component */ "oeA2");
/* harmony import */ var _content_design_content_design_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content-design/content-design.component */ "0sl/");
/* harmony import */ var _designsystem_design_designsystem_design_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../designsystem-design/designsystem-design.component */ "v9uY");
/* harmony import */ var _gradient_design_gradient_design_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gradient-design/gradient-design.component */ "K0ZJ");
/* harmony import */ var _icon_designsign_icon_designsign_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon-designsign/icon-designsign.component */ "gI35");
/* harmony import */ var _illustration_design_illustration_design_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../illustration-design/illustration-design.component */ "jee9");
/* harmony import */ var _inspiration_design_inspiration_design_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../inspiration-design/inspiration-design.component */ "HXHz");
/* harmony import */ var _mockup_design_mockup_design_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mockup-design/mockup-design.component */ "mgLG");
/* harmony import */ var _patternbg_design_patternbg_design_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../patternbg-design/patternbg-design.component */ "uVS7");
/* harmony import */ var _image_design_image_design_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../image-design/image-design.component */ "BVHh");
/* harmony import */ var _video_design_video_design_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../video-design/video-design.component */ "QEnZ");
/* harmony import */ var _typography_design_typography_design_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../typography-design/typography-design.component */ "AGR0");
















class AllDesignResourceComponent {
    constructor() { }
    ngOnInit() {
    }
}
AllDesignResourceComponent.ɵfac = function AllDesignResourceComponent_Factory(t) { return new (t || AllDesignResourceComponent)(); };
AllDesignResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllDesignResourceComponent, selectors: [["app-all-design-resource"]], decls: 20, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2"]], template: function AllDesignResourceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-accessibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-books-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-color-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-content-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-designsystem-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-gradient-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-icon-designsign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-illustration-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-inspiration-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-mockup-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-patternbg-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-image-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-video-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-typography-design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_accessibility_accessibility_component__WEBPACK_IMPORTED_MODULE_1__["AccessibilityComponent"], _animation_animation_component__WEBPACK_IMPORTED_MODULE_2__["AnimationComponent"], _books_design_books_design_component__WEBPACK_IMPORTED_MODULE_3__["BooksDesignComponent"], _color_design_color_design_component__WEBPACK_IMPORTED_MODULE_4__["ColorDesignComponent"], _content_design_content_design_component__WEBPACK_IMPORTED_MODULE_5__["ContentDesignComponent"], _designsystem_design_designsystem_design_component__WEBPACK_IMPORTED_MODULE_6__["DesignsystemDesignComponent"], _gradient_design_gradient_design_component__WEBPACK_IMPORTED_MODULE_7__["GradientDesignComponent"], _icon_designsign_icon_designsign_component__WEBPACK_IMPORTED_MODULE_8__["IconDesignsignComponent"], _illustration_design_illustration_design_component__WEBPACK_IMPORTED_MODULE_9__["IllustrationDesignComponent"], _inspiration_design_inspiration_design_component__WEBPACK_IMPORTED_MODULE_10__["InspirationDesignComponent"], _mockup_design_mockup_design_component__WEBPACK_IMPORTED_MODULE_11__["MockupDesignComponent"], _patternbg_design_patternbg_design_component__WEBPACK_IMPORTED_MODULE_12__["PatternbgDesignComponent"], _image_design_image_design_component__WEBPACK_IMPORTED_MODULE_13__["ImageDesignComponent"], _video_design_video_design_component__WEBPACK_IMPORTED_MODULE_14__["VideoDesignComponent"], _typography_design_typography_design_component__WEBPACK_IMPORTED_MODULE_15__["TypographyDesignComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtZGVzaWduLXJlc291cmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "oeA2":
/*!****************************************************************************!*\
  !*** ./src/app/Design/all-resource/color-design/color-design.component.ts ***!
  \****************************************************************************/
/*! exports provided: ColorDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorDesignComponent", function() { return ColorDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ColorDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class ColorDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getColor().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
ColorDesignComponent.ɵfac = function ColorDesignComponent_Factory(t) { return new (t || ColorDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
ColorDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorDesignComponent, selectors: [["app-color-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function ColorDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["a[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29sb3ItZGVzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBREY7O0FBSUE7RUFFRyxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRkgiLCJmaWxlIjoiY29sb3ItZGVzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5hIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXJcclxue1xyXG4gICBjb2xvcjojMDAwMDAwO1xyXG4gICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "sPlL":
/*!*********************************************************************!*\
  !*** ./src/app/Design/resource-design/resource-design.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResourceDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDesignComponent", function() { return ResourceDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ResourceDesignComponent {
    constructor() {
        this.dummyItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    ngOnInit() {
    }
}
ResourceDesignComponent.ɵfac = function ResourceDesignComponent_Factory(t) { return new (t || ResourceDesignComponent)(); };
ResourceDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceDesignComponent, selectors: [["app-resource-design"]], decls: 3, vars: 0, consts: [[1, "container-fluid"], [1, "row"]], template: function ResourceDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvdXJjZS1kZXNpZ24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "uVS7":
/*!************************************************************************************!*\
  !*** ./src/app/Design/all-resource/patternbg-design/patternbg-design.component.ts ***!
  \************************************************************************************/
/*! exports provided: PatternbgDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternbgDesignComponent", function() { return PatternbgDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PatternbgDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class PatternbgDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getPatternAndAbstract().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
PatternbgDesignComponent.ɵfac = function PatternbgDesignComponent_Factory(t) { return new (t || PatternbgDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
PatternbgDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatternbgDesignComponent, selectors: [["app-patternbg-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function PatternbgDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pattern and Abstract");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PatternbgDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".logo-style[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  background: #f7f7f7;\n  padding: 10px;\n  border-radius: 48px;\n  display: flex;\n  justify-content: center;\n  vertical-align: middle;\n  margin-bottom: 15px;\n}\n\n.logo-style[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGF0dGVybmJnLWRlc2lnbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUVHLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFBSCIsImZpbGUiOiJwYXR0ZXJuYmctZGVzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tc3R5bGUge1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmxvZ28tc3R5bGUgaW1nIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlclxyXG57XHJcbiAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "v9uY":
/*!******************************************************************************************!*\
  !*** ./src/app/Design/all-resource/designsystem-design/designsystem-design.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DesignsystemDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignsystemDesignComponent", function() { return DesignsystemDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function DesignsystemDesignComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class DesignsystemDesignComponent {
    constructor(designService) {
        this.designService = designService;
        this.listItem = [];
    }
    ngOnInit() {
        this.designService.getDesignSystem().subscribe(data => {
            this.listItem = data;
            console.log(data);
        });
    }
}
DesignsystemDesignComponent.ɵfac = function DesignsystemDesignComponent_Factory(t) { return new (t || DesignsystemDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
DesignsystemDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesignsystemDesignComponent, selectors: [["app-designsystem-design"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2", 2, "overflow-y", "scroll", "height", "32rem"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "50", 3, "src"]], template: function DesignsystemDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Design System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DesignsystemDesignComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["a[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGVzaWduc3lzdGVtLWRlc2lnbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBRUcsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUZIIiwiZmlsZSI6ImRlc2lnbnN5c3RlbS1kZXNpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlclxyXG57XHJcbiAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Design_all_resource_accessibility_accessibility_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Design/all-resource/accessibility/accessibility.component */ "zxRC");
/* harmony import */ var _Design_all_resource_all_design_resource_all_design_resource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Design/all-resource/all-design-resource/all-design-resource.component */ "mni/");
/* harmony import */ var _Design_all_resource_animation_animation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Design/all-resource/animation/animation.component */ "QeCE");
/* harmony import */ var _Design_all_resource_books_design_books_design_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Design/all-resource/books-design/books-design.component */ "d/wM");
/* harmony import */ var _Design_all_resource_color_design_color_design_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Design/all-resource/color-design/color-design.component */ "oeA2");
/* harmony import */ var _Design_all_resource_content_design_content_design_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Design/all-resource/content-design/content-design.component */ "0sl/");
/* harmony import */ var _Design_all_resource_designsystem_design_designsystem_design_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Design/all-resource/designsystem-design/designsystem-design.component */ "v9uY");
/* harmony import */ var _Design_all_resource_gradient_design_gradient_design_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Design/all-resource/gradient-design/gradient-design.component */ "K0ZJ");
/* harmony import */ var _Design_all_resource_icon_designsign_icon_designsign_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Design/all-resource/icon-designsign/icon-designsign.component */ "gI35");
/* harmony import */ var _Design_all_resource_illustration_design_illustration_design_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Design/all-resource/illustration-design/illustration-design.component */ "jee9");
/* harmony import */ var _Design_all_resource_image_design_image_design_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Design/all-resource/image-design/image-design.component */ "BVHh");
/* harmony import */ var _Design_all_resource_inspiration_design_inspiration_design_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Design/all-resource/inspiration-design/inspiration-design.component */ "HXHz");
/* harmony import */ var _Design_all_resource_mockup_design_mockup_design_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Design/all-resource/mockup-design/mockup-design.component */ "mgLG");
/* harmony import */ var _Design_all_resource_patternbg_design_patternbg_design_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Design/all-resource/patternbg-design/patternbg-design.component */ "uVS7");
/* harmony import */ var _Design_all_resource_typography_design_typography_design_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Design/all-resource/typography-design/typography-design.component */ "AGR0");
/* harmony import */ var _Design_all_resource_video_design_video_design_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Design/all-resource/video-design/video-design.component */ "QEnZ");
/* harmony import */ var _Design_main_design_main_design_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Design/main-design/main-design.component */ "1GOB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















const routes = [
    { path: '', redirectTo: '/design/all-resource', pathMatch: 'full' },
    { path: 'design', component: _Design_main_design_main_design_component__WEBPACK_IMPORTED_MODULE_17__["MainDesignComponent"],
        children: [
            { path: 'all-resource', component: _Design_all_resource_all_design_resource_all_design_resource_component__WEBPACK_IMPORTED_MODULE_2__["AllDesignResourceComponent"], },
            { path: 'accessibility', component: _Design_all_resource_accessibility_accessibility_component__WEBPACK_IMPORTED_MODULE_1__["AccessibilityComponent"], },
            { path: 'animation', component: _Design_all_resource_animation_animation_component__WEBPACK_IMPORTED_MODULE_3__["AnimationComponent"], },
            { path: 'books', component: _Design_all_resource_books_design_books_design_component__WEBPACK_IMPORTED_MODULE_4__["BooksDesignComponent"], },
            { path: 'color', component: _Design_all_resource_color_design_color_design_component__WEBPACK_IMPORTED_MODULE_5__["ColorDesignComponent"], },
            { path: 'content', component: _Design_all_resource_content_design_content_design_component__WEBPACK_IMPORTED_MODULE_6__["ContentDesignComponent"], },
            { path: 'design-system', component: _Design_all_resource_designsystem_design_designsystem_design_component__WEBPACK_IMPORTED_MODULE_7__["DesignsystemDesignComponent"], },
            { path: 'gradient', component: _Design_all_resource_gradient_design_gradient_design_component__WEBPACK_IMPORTED_MODULE_8__["GradientDesignComponent"], },
            { path: 'icon', component: _Design_all_resource_icon_designsign_icon_designsign_component__WEBPACK_IMPORTED_MODULE_9__["IconDesignsignComponent"], },
            { path: 'illustration', component: _Design_all_resource_illustration_design_illustration_design_component__WEBPACK_IMPORTED_MODULE_10__["IllustrationDesignComponent"], },
            { path: 'inspiration', component: _Design_all_resource_inspiration_design_inspiration_design_component__WEBPACK_IMPORTED_MODULE_12__["InspirationDesignComponent"], },
            { path: 'mockup', component: _Design_all_resource_mockup_design_mockup_design_component__WEBPACK_IMPORTED_MODULE_13__["MockupDesignComponent"], },
            { path: 'pattern-and-abstract', component: _Design_all_resource_patternbg_design_patternbg_design_component__WEBPACK_IMPORTED_MODULE_14__["PatternbgDesignComponent"], },
            { path: 'stock-image', component: _Design_all_resource_image_design_image_design_component__WEBPACK_IMPORTED_MODULE_11__["ImageDesignComponent"], },
            { path: 'stock-video', component: _Design_all_resource_video_design_video_design_component__WEBPACK_IMPORTED_MODULE_16__["VideoDesignComponent"], },
            { path: 'typography', component: _Design_all_resource_typography_design_typography_design_component__WEBPACK_IMPORTED_MODULE_15__["TypographyDesignComponent"], },
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zxRC":
/*!******************************************************************************!*\
  !*** ./src/app/Design/all-resource/accessibility/accessibility.component.ts ***!
  \******************************************************************************/
/*! exports provided: AccessibilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityComponent", function() { return AccessibilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/design.service */ "5pr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AccessibilityComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class AccessibilityComponent {
    constructor(designService) {
        this.designService = designService;
        this.dummyItem = [];
    }
    ngOnInit() {
        this.designService.getAccessibility().subscribe(data => {
            this.dummyItem = data;
            console.log(data);
        });
    }
}
AccessibilityComponent.ɵfac = function AccessibilityComponent_Factory(t) { return new (t || AccessibilityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"])); };
AccessibilityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessibilityComponent, selectors: [["app-accessibility"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "row", "mt-2"], ["class", "col-md-4 p-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-2"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [1, "logo-style"], ["height", "45", 3, "src"]], template: function AccessibilityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Accessibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AccessibilityComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dummyItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".logo-style[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  background: #f7f7f7;\n  padding: 10px;\n  border-radius: 48px;\n  display: flex;\n  justify-content: center;\n  vertical-align: middle;\n  margin-bottom: 15px;\n}\n\n.logo-style[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWNjZXNzaWJpbGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUVHLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFBSCIsImZpbGUiOiJhY2Nlc3NpYmlsaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tc3R5bGUge1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmxvZ28tc3R5bGUgaW1nIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlclxyXG57XHJcbiAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map