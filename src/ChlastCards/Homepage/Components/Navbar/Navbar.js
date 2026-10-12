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
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./navbar.css");
function ChlastCardsNavbar() {
    return ((0, jsx_runtime_1.jsxs)("nav", __assign({ className: "--white" }, { children: [(0, jsx_runtime_1.jsxs)("a", __assign({ className: "--white", href: "/" }, { children: [" ", "Dom\u016F"] })), (0, jsx_runtime_1.jsxs)("a", __assign({ className: "--white", href: "/chlastCards/karty" }, { children: [" ", "Karty", " "] })), (0, jsx_runtime_1.jsxs)("a", __assign({ className: "--white", href: "/chlastCards" }, { children: [" ", "Pravidla", " "] }))] })));
}
exports["default"] = ChlastCardsNavbar;
