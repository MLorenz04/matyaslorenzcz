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
function Navbar() {
    return ((0, jsx_runtime_1.jsxs)("nav", __assign({ className: "--green" }, { children: [(0, jsx_runtime_1.jsxs)("a", __assign({ className: "--green", href: "/" }, { children: [" ", "Dom\u016F"] })), (0, jsx_runtime_1.jsxs)("a", __assign({ className: "--green", href: "/basne" }, { children: [" ", "B\u00E1sn\u011B", " "] })), (0, jsx_runtime_1.jsxs)("a", __assign({ className: "--green", href: "/chlastCards" }, { children: [" ", "ChlastCards", " "] }))] })));
}
exports["default"] = Navbar;
