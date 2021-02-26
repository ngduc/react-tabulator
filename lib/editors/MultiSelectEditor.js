"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
var Utils_1 = require("../Utils");
// import { parse, format } from 'date-fns';
// import ReactTags from 'react-tag-autocomplete';
var ReactTags = require('react-tag-autocomplete');
var DEFAULT_DATE_INPUT_FORMAT = 'yyyy-MM-dd';
var inputCss = {
    width: '100%',
    height: '100%',
    fontSize: '1em',
    fontFamily: 'inherit'
};
var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { value: '', values: [], autofocus: false };
        _this.ref = null;
        _this.setValueOnSuccess = function (values) {
            if (values === void 0) { values = _this.state.values; }
            var _a = _this.props, success = _a.success, cancel = _a.cancel;
            // console.log('setValueOnSuccess: ', values);
            success(values);
            // cancel();
        };
        _this.handleDelete = function (i) {
            // console.log('- handleDelete ', i);
            var values = _this.state.values;
            var newValues = values.filter(function (item, index) { return index !== i; });
            _this.setState({ values: newValues }, function () {
                _this.setValueOnSuccess(newValues);
            });
        };
        _this.handleAddition = function (item) {
            var values = _this.state.values;
            if (item.name) {
                // console.log('- handleAddition: ', item);
                values.push({ id: item.name, name: item.name });
                _this.setState({ values: values }, function () {
                    _this.setValueOnSuccess(values);
                });
            }
        };
        // order: handleBlur => sucess() => grid's cellEdited => grid's dataChanged => handleAddition
        _this.handleBlur = function () {
            var cancel = _this.props.cancel;
            var newValue = _this.ref.input.input.value;
            if (newValue) {
                // console.log(111, newValue, this.ref);
                var values = Utils_1.clone(_this.state.values);
                values.push({ id: newValue, name: newValue });
                // console.log('- handleBlur ', values);
                _this.setValueOnSuccess(values);
            }
            else {
                cancel();
            }
            var el = react_dom_1.findDOMNode(_this.ref);
            if (el && el.parentElement.parentElement.parentElement) {
                el.parentElement.parentElement.parentElement.style.overflow = 'hidden';
            }
            // console.log('- handleBlur END');
        };
        return _this;
    }
    Editor.prototype.componentDidMount = function () {
        var _this = this;
        this.props.onRendered(function () {
            var el = react_dom_1.findDOMNode(_this.ref);
            el.style.zIndex = 1;
            el.parentElement.parentElement.parentElement.style.overflow = 'inherit';
            el.querySelector('input').focus();
            var values = (_this.props.cell.getValue() || []).map(function (item) {
                return typeof item === 'string' ? { id: item, name: item } : item;
            });
            _this.setState({ values: values });
        });
    };
    Editor.prototype.render = function () {
        var _this = this;
        var editorParams = this.props.editorParams;
        var values = this.state.values;
        var suggestions = editorParams.values;
        return (React.createElement("div", null,
            React.createElement(ReactTags, { ref: function (ref) { return (_this.ref = ref); }, placeholder: "Select or Type", tags: values, suggestions: suggestions, allowNew: true, autoresize: true, autofocus: this.state.autofocus, handleAddition: this.handleAddition, handleDelete: this.handleDelete, handleBlur: this.handleBlur, minQueryLength: 0 })));
    };
    return Editor;
}(React.Component));
function default_1(cell, onRendered, success, cancel, editorParams) {
    var container = document.createElement('div');
    container.style.height = '100%';
    react_dom_1.render(React.createElement(Editor, { cell: cell, onRendered: onRendered, success: success, cancel: cancel, editorParams: editorParams }), container);
    return container;
}
exports["default"] = default_1;
