"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.clone = clone;
function isSameArray(a, b) {
    var i = a.length;
    if (i !== b.length) {
        return false;
    }
    while (i--) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
exports.isSameArray = isSameArray;
function reactFormatter(JSX) {
    return function customFormatter(cell, formatterParams, onRendered) {
        //cell - the cell component
        //formatterParams - parameters set for the column
        //onRendered - function to call when the formatter has been rendered
        var renderFn = function () {
            var cellEl = cell.getElement();
            if (cellEl) {
                var formatterCell = cellEl.querySelector('.formatterCell');
                if (formatterCell) {
                    var CompWithMoreProps = React.cloneElement(JSX, { cell: cell });
                    react_dom_1.render(CompWithMoreProps, cellEl.querySelector('.formatterCell'));
                }
            }
        };
        onRendered(renderFn); // initial render only.
        setTimeout(function () {
            renderFn(); // render every time cell value changed.
        }, 0);
        return '<div class="formatterCell"></div>';
    };
}
exports.reactFormatter = reactFormatter;
