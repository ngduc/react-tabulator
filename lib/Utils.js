"use strict";
exports.__esModule = true;
exports.reactFormatter = exports.isSameObject = exports.isSameArray = exports.clone = void 0;
var React = require("react");
var react_dom_1 = require("react-dom");
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.clone = clone;
function isSameArray(a, b) {
    var i = a && a.length ? a.length : 0;
    if (i !== (b && b.length ? b.length : 0)) {
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
// source: https://stackoverflow.com/questions/4816099/chrome-sendrequest-error-typeerror-converting-circular-structure-to-json
function stringifyCensor(censor) {
    var i = 0;
    return function (key, value) {
        if (i !== 0 && typeof censor === 'object' && typeof value == 'object' && censor == value) {
            return '[Circular]';
        }
        if (i >= 29) {
            // seems to be a harded maximum of 30 serialized objects?
            return '[Unknown]';
        }
        ++i; // so we know we aren't using the original object anymore
        return value;
    };
}
function isSameObject(a, b) {
    return JSON.stringify(a, stringifyCensor(a)) === JSON.stringify(b, stringifyCensor(b));
}
exports.isSameObject = isSameObject;
function reactFormatter(JSX) {
    return function customFormatter(cell, formatterParams, onRendered) {
        // cell - the cell component
        // formatterParams - parameters set for the column
        // onRendered - function to call when the formatter has been rendered
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
