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
// import { parse, format } from 'date-fns';
var DateEditorUtils_1 = require("./DateEditorUtils");
var DEFAULT_DATE_INPUT_FORMAT = 'YYYY-MM-DD'; // date-fns 'yyyy-MM-dd';
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
        _this.state = { value: '' };
        _this.ref = null;
        // date-fns format 'MM/dd/yyyy'
        _this.format = _this.props.editorParams.format || 'MM/DD/YYYY'; // TODO: detect from user locale & set default.
        _this.setValueOnSuccess = function (value) {
            if (value === void 0) { value = _this.state.value; }
            var success = _this.props.success;
            if (!value) {
                // user deleted value in the cell => set to ''
                // const result = format(new Date(), this.format);
                success('');
                return;
            }
            var result = value;
            try {
                if (result.indexOf('-') > 0) {
                    // value is "yyyy-MM-dd" => parse it
                    var valueDate = DateEditorUtils_1.parse(value, 'YYYY-MM-DD');
                    result = DateEditorUtils_1.format(valueDate, _this.format);
                }
            }
            catch (err) {
                console.error('ERROR', err);
                result = DateEditorUtils_1.format(new Date(), DEFAULT_DATE_INPUT_FORMAT);
            }
            success(result);
        };
        _this.onChange = function (ev) {
            var value = ev.target.value;
            _this.setState({ value: value });
        };
        _this.onKeyPress = function (ev) {
            var cancel = _this.props.cancel;
            if (ev.keyCode === 13) {
                // Enter pressed. If value is '' => set to today:
                var today = DateEditorUtils_1.format(new Date(), DEFAULT_DATE_INPUT_FORMAT);
                var value = _this.state.value || today;
                _this.setValueOnSuccess(value);
            }
            else if (ev.keyCode === 27) {
                cancel();
            }
        };
        _this.onBlur = function () {
            _this.setValueOnSuccess();
        };
        return _this;
    }
    Editor.prototype.componentDidMount = function () {
        var _this = this;
        this.props.onRendered(function () {
            var value = _this.props.cell.getValue();
            _this.setState({ value: value });
            _this.ref.focus();
        });
    };
    Editor.prototype.render = function () {
        var _this = this;
        var cell = this.props.cell;
        var valueDt = DateEditorUtils_1.parse(cell.getValue(), this.format);
        // console.log('this.format', this.format);
        // console.log('cell.getValue()', cell.getValue());
        // console.log('valueDt', valueDt);
        var value = DateEditorUtils_1.format(new Date(), DEFAULT_DATE_INPUT_FORMAT);
        try {
            value = DateEditorUtils_1.format(valueDt, DEFAULT_DATE_INPUT_FORMAT);
        }
        catch (err) { }
        return (React.createElement("input", { type: "date", ref: function (r) { return (_this.ref = r); }, defaultValue: value, 
            // value={value}
            onBlur: this.onBlur, onChange: this.onChange, onKeyUp: this.onKeyPress, style: inputCss }));
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
