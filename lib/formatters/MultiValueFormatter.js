"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
var createCellEl = function () {
    var el = document.createElement('div');
    el.style.height = '100%';
    return el;
};
// example: { title: 'Pets', field: 'pets', formatter: MultiValueFormatter, formatterParams: { style: 'PILL' } }
// default style: comma separated plain text
// other styles: TAG, PILL
function default_1(cell, formatterParams, onRendered) {
    var style = formatterParams.style || ''; // comma separated plain text
    var arr = cell.getValue() || [];
    var content = arr.join(', ');
    if (style === 'PILL') {
        content = (React.createElement(React.Fragment, null, arr.map(function (value) { return (React.createElement("span", null, value)); })));
    }
    var el = createCellEl();
    el.className = 'multi-value-formatter-content';
    el.title = arr.join(', ');
    react_dom_1.render(content, el);
    return el;
}
exports["default"] = default_1;
