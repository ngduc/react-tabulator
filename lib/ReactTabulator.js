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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
            } }), options), { // props.options are passed to Tabulator's options.
            data: data }));
        // await table.setData(data);
        // console.log('- componentDidMount');
        if (data && data.length > 0) {
            this.setState({ data: data });
        }
    };
    default_1.prototype.componentWillUnmount = function () {
        this.table.destroy();
    };
    // React 16.5.x - "getDerivedStateFromProps" replaces both "componentWillMount" & "componentWillReceiveProps"
    // This function will be ignored when running with React 15.6.x
    default_1.getDerivedStateFromProps = function (props, state) {
        // console.log('- getDerivedStateFromProps', props, state);
        var noData = !props.data || props.data.length === 0;
        if (!state && noData) {
            // first time (similar to: componentWillMount)
            return null;
        }
        if (state && state.data.length && state.data.length === 0 && props && props.data && props.data.length === 0) {
            return null;
        }
        // if (state && props.columns) {
        //   // this triggers componentDidUpdate
        //   if (!isSameArray(state.columns, props.columns)) {
        //     console.log('--- Columns changed');
        //     // console.log('columns changed!');
        //     return { ...state, columns: [...props.columns] };
        //   }
        // }
        if (state && (props.data || props.columns)) {
            // this triggers componentDidUpdate
            if (!Utils_1.isSameArray(state.data, props.data) || !Utils_1.isSameArray(state.columns, props.columns)) {
                // console.log('data changed!');
                return __assign(__assign({}, state), { data: __spreadArrays(props.data), columns: __spreadArrays(props.columns) });
            }
        }
        return {};
    };
    // componentDidUpdate(prevProps, prevState)
    default_1.prototype.componentDidUpdate = function (prevProps, prevState) {
        // props data changed! (see: getDerivedStateFromProps)
        if (!Utils_1.isSameArray(prevState.data, this.state.data)) {
            // only when data is really different: call this.table.setData (will re-render table)
            this.table.setData(this.state.data);
        }
        if (!Utils_1.isSameArray(prevState.columns, this.state.columns)) {
            // only when data is really different: call this.table.setData (will re-render table)
            this.table.setColumns(this.state.columns);
        }
    };
    default_1.prototype.render = function () {
        var _this = this;
        this.pickValidHTMLProps();
        var className = this.props.className;
        return React.createElement("div", __assign({ ref: function (ref) { return (_this.ref = ref); }, "data-instance": this.mainId }, this.htmlProps, { className: className }));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
