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
require("./ChlastCardsSidebar.css");
function ChlastCardsSidebar(_a) {
    var editions = _a.editions, outsideEdition = _a.outsideEdition, outsideEditionSetter = _a.outsideEditionSetter;
    return ((0, jsx_runtime_1.jsxs)("section", __assign({ className: "ChlastCards__karty__sidebar", id: "sidebar" }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ className: "ChlastCards__karty__sidebar__header" }, { children: " Edice " })), editions.map(function (edition) { return ((0, jsx_runtime_1.jsx)("p", __assign({ className: "ChlastCards__karty__sidebar__link ".concat(outsideEdition.name === edition.name ? "ChlastCards__karty__sidebar__link__selected" : ""), onClick: function () { return outsideEditionSetter(edition); } }, { children: edition.name }))); })] })));
}
exports["default"] = ChlastCardsSidebar;
