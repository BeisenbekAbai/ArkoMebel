"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(859);


const getStaticProps = async ()=>{
    const data = [
        {
            "name": "КУХНИ",
            "items": [
                "Модульные кухни",
                "Готовые комплекты",
                "Маленькие кухни",
                "Угловые кухни",
                "Кухонные уголки",
                "Столы кухонные",
                "Стулья для кухни",
                "Комплектующие"
            ]
        },
        {
            "name": "ГОСТИННЫЕ",
            "items": [
                "Модульные",
                "Журнальные столы",
                "Полки",
                "Тумбы под ТВ",
                "Шкафы",
                "Стеллажи"
            ]
        },
        {
            "name": "СПАЛЬНИ",
            "items": [
                "Кровати",
                "Матрацы",
                "Шкафы",
                "Комоды",
                "Столы туалетные",
                "Тумбы прикроватные",
                "Зеркала"
            ]
        },
        {
            "name": "ДИВАНЫ",
            "items": [
                "Прямые",
                "Угловые",
                "На металлокаркасе",
                "Кресла"
            ]
        },
        {
            "name": "ДЕТСКИЕ",
            "items": [
                "Кровати",
                "Полки",
                "Столы",
                "Тумбы",
                "Шкафы",
                "Комоды"
            ]
        },
        {
            "name": "ПРИХОЖИЕ",
            "items": [
                "Модульные",
                "Обувницы"
            ]
        },
        {
            "name": "ШКАФЫ-КУПЕ",
            "items": [
                "Кровати",
                "Матрацы",
                "Шкафы",
                "Комоды",
                "Столы туалетные",
                "Тумбы прикроватные",
                "Зеркала"
            ]
        }
    ];
    return {
        props: {
            categories: data
        }
    };
};
const Home = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                href: "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(186)));
module.exports = __webpack_exports__;

})();