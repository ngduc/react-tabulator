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
var React = require("react");
var ReactDOM = require("react-dom");
var pick_react_known_prop_1 = require("pick-react-known-prop");
var ConfigUtils_1 = require("./ConfigUtils");
var Utils_1 = require("./Utils");
/* tslint:disable-next-line */
var Tabulator = require('tabulator-tables');
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
            columns: _this.props.columns
        };
        _this.ref = null;
        _this.htmlProps = null;
        _this.mainId = "tabulator-" + +new Date() + "-" + Math.floor(Math.random() * 9999999); // random id
        _this.table = null; // will be set once Tabulator instantiated
        _this.pickValidHTMLProps = function () {
            // run once
            if (!_this.htmlProps) {
                _this.htmlProps = pick_react_known_prop_1.pickHTMLProps(_this.props); // pick valid html props
                delete _this.htmlProps['data']; // don't render data & columns as attributes
                delete _this.htmlProps['columns'];
            }
        };
        return _this;
    }
    default_1.prototype.componentDidMount = function () {
        var domEle = ReactDOM.findDOMNode(this.ref); // mounted DOM element
        var that = this;
        var _a = this.props, columns = _a.columns, data = _a.data, options = _a.options;
        var propOptions = ConfigUtils_1.propsToOptions(this.props);
        new Tabulator(domEle, __assign(__assign(__assign(__assign({ columns: columns }, propOptions), { layout: 'fitColumns', // fit columns to width of table (optional)
            tableBuilding: function () {
                that.table = this; // keep table instance
                that.props.tableBuilding ? that.props.tableBuilding() : '';
            },
            dataLoaded: function () {
                that.props.dataLoaded ? that.props.dataLoaded() : '';
            } }), options), { data: data }));
        // await table.setData(data);
        // console.log('- componentDidMount');
        if (data && data.length > 0) {
            this.setState({ data: data });
        }
    };
    default_1.prototype.componentWillUnmount = function () {
        this.table.destroy();
    };
    // this is for React 15.x only
    default_1.prototype.componentWillReceiveProps = function (props) {
        var _this = this;
        if (!Utils_1.isSameArray(this.state.data, props.data)) {
            // console.log('- data changed');
            this.setState({ data: props.data }, function () {
                _this.table.setData(_this.state.data);
            });
        }
        if (!Utils_1.isSameArray(this.state.columns, props.columns)) {
            // console.log('- columns changed');
            this.setState({ columns: props.columns }, function () {
                _this.table.setColumns(_this.state.columns);
            });
        }
    };
    default_1.prototype.render = function () {
        var _this = this;
        // console.log('*** render');
        this.pickValidHTMLProps();
        var className = this.props.className;
        return React.createElement("div", __assign({ ref: function (ref) { return (_this.ref = ref); }, "data-instance": this.mainId }, this.htmlProps, { className: className }));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
