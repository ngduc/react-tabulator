"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
var date_fns_1 = require("date-fns");
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
        _this.state = { value: '' };
        _this.ref = null;
        _this.format = _this.props.editorParams.format || 'MM/dd/yyyy'; // TODO: detect from user locale & set default.
        _this.setValueOnSuccess = function (value) {
            if (value === void 0) { value = _this.state.value; }
            var success = _this.props.success;
            var result = value;
            if (result.indexOf('-') > 0) {
                // value is "yyyy-MM-dd" => parse it
                result = date_fns_1.format(value, _this.format);
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
                _this.setValueOnSuccess();
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
        var valueDt = date_fns_1.parse(cell.getValue(), this.format, new Date(), { awareOfUnicodeTokens: true });
        var value = date_fns_1.format(valueDt, DEFAULT_DATE_INPUT_FORMAT);
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
