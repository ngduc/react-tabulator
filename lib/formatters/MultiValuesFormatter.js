"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
var createCellEl = function () {
    var el = document.createElement('div');
    el.style.height = '100%';
    return el;
};
function default_1(cell, formatterParams, onRendered) {
    var value = (cell.getValue() || []).join(', ');
    var el = createCellEl();
    react_dom_1.render(React.createElement("span", null, value), el);
    return el;
}
exports["default"] = default_1;
