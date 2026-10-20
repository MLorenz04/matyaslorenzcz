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
require("../ChlastCards.css");
var ChlastCards___BET_png_1 = __importDefault(require("./ChlastCards - BET.png"));
var Navbar_1 = __importDefault(require("./Components/Navbar/Navbar"));
function ChlastCardsHomepage() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "ChlastCards" }, { children: [(0, jsx_runtime_1.jsx)(Navbar_1["default"], {}), (0, jsx_runtime_1.jsxs)("section", __assign({ className: "ChlastCards__headshot" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "ChlastCards__headshot__content" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: " ChlastCards " }), (0, jsx_runtime_1.jsx)("h2", { children: " Hra pro opravdov\u00E9 fajn\u0161mekry! " })] })), (0, jsx_runtime_1.jsx)("img", { src: ChlastCards___BET_png_1["default"] })] }))] })));
}
exports["default"] = ChlastCardsHomepage;
