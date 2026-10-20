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
var Navbar_1 = __importDefault(require("../Homepage/Components/Navbar/Navbar"));
require("./karty.css");
function Karty() {
    return ((0, jsx_runtime_1.jsxs)("section", __assign({ className: "ChlastCards__karty" }, { children: [(0, jsx_runtime_1.jsx)(Navbar_1["default"], {}), (0, jsx_runtime_1.jsx)("div", __assign({ className: "ChlastCards__karty__grid" }, { children: Array.from({ length: 100 }, function (_, i) { return ((0, jsx_runtime_1.jsx)("img", { className: "ChlastCards__karty__card", src: "/Cards/BET/".concat(i + 1, ".png"), alt: "Karta ".concat(i + 1) }, i + 1)); }) }))] })));
}
exports["default"] = Karty;
