"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./homepage.css");
var headshot2_png_1 = __importDefault(require("./Images/headshot2.png"));
var LeftNameFancy_png_1 = __importDefault(require("./Images/LeftNameFancy.png"));
var RightNameFancy_png_1 = __importDefault(require("./Images/RightNameFancy.png"));
var Navbar_1 = __importDefault(require("./Components/Navbar/Navbar"));
function Homepage() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "homepage" }, { children: [(0, jsx_runtime_1.jsxs)("section", __assign({ className: "headshot" }, { children: [(0, jsx_runtime_1.jsx)(Navbar_1["default"], {}), (0, jsx_runtime_1.jsxs)("h1", __assign({ className: "headshot__header" }, { children: [" ", (0, jsx_runtime_1.jsx)("img", { className: "headshot__fancy headshot__fancy__left", src: LeftNameFancy_png_1["default"], alt: "headshot" }), " ", (0, jsx_runtime_1.jsx)("span", __assign({ className: "--green" }, { children: "Maty\u00E1\u0161 Lorenz " })), (0, jsx_runtime_1.jsx)("img", { className: "headshot__fancy headshot__fancy__right", src: RightNameFancy_png_1["default"], alt: "headshot" })] })), (0, jsx_runtime_1.jsx)("h2", __assign({ className: "headshot__title" }, { children: "Program\u00E1tor a b\u00E1sn\u00EDk" })), (0, jsx_runtime_1.jsx)("img", { className: "headshot__img", src: headshot2_png_1["default"], alt: "headshot" })] })), (0, jsx_runtime_1.jsx)("div", { className: "divider" }), (0, jsx_runtime_1.jsx)("section", { className: "ChlastCards" })] })));
}
exports["default"] = Homepage;
