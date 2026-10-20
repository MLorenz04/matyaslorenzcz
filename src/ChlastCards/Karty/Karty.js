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
var react_1 = require("react");
var Navbar_1 = __importDefault(require("../Homepage/Components/Navbar/Navbar"));
var ChlastCardsSidebar_1 = __importDefault(require("./Components/Sidebar/ChlastCardsSidebar"));
require("./karty.css");
function Karty() {
    var editions = [
        {
            name: "BET",
            length: 100
        },
        {
            name: "FAI",
            length: 50
        },
    ];
    var _a = (0, react_1.useState)(editions[0]), currentEdition = _a[0], setCurrentEdition = _a[1];
    return ((0, jsx_runtime_1.jsxs)("section", __assign({ className: "ChlastCards ChlastCards__karty" }, { children: [(0, jsx_runtime_1.jsx)(Navbar_1["default"], {}), (0, jsx_runtime_1.jsxs)("h2", __assign({ className: "ChlastCards__karty__heading" }, { children: [" Karty z edice ", currentEdition.name, " "] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "ChlastCards__karty__content" }, { children: [(0, jsx_runtime_1.jsx)(ChlastCardsSidebar_1["default"], { editions: editions, outsideEdition: currentEdition, outsideEditionSetter: setCurrentEdition }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "ChlastCards__karty__edition" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "ChlastCards__karty__grid" }, { children: Array.from({ length: currentEdition.length }, function (_, i) { return ((0, jsx_runtime_1.jsx)("img", { className: "ChlastCards__karty__card", src: "/Cards/".concat(currentEdition.name, "/").concat(i + 1, ".png"), alt: "Karta ".concat(i + 1) }, i + 1)); }) })) }))] }))] })));
}
exports["default"] = Karty;
