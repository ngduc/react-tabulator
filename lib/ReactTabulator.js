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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var pick_react_known_prop_1 = require("pick-react-known-prop");
var ConfigUtils_1 = require("./ConfigUtils");
/* tslint:disable-next-line */
var tabulator_tables_1 = require("tabulator-tables");
var ReactTabulator = function (props) {
    var ref = React.useRef();
    var instanceRef = React.useRef();
    var _a = React.useState("tabulator-" + +new Date() + "-" + Math.floor(Math.random() * 9999999)), mainId = _a[0], setMainId = _a[1];
    var htmlProps;
    htmlProps = pick_react_known_prop_1.pickHTMLProps(props); // pick valid html props
    delete htmlProps['data']; // don't render data & columns as attributes
    delete htmlProps['columns'];
    var initTabulator = function () { return __awaiter(void 0, void 0, void 0, function () {
        var domEle, columns, data, options, propOptions;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    domEle = ReactDOM.findDOMNode(ref.current);
                    columns = props.columns, data = props.data, options = props.options;
                    return [4 /*yield*/, ConfigUtils_1.propsToOptions(props)];
                case 1:
                    propOptions = _b.sent();
                    if (data) {
                        propOptions.data = data;
                    }
                    instanceRef.current = new tabulator_tables_1.TabulatorFull(domEle, __assign(__assign(__assign({ columns: columns }, propOptions), { layout: (_a = props.layout) !== null && _a !== void 0 ? _a : 'fitColumns' }), options // props.options are passed to Tabulator's options.
                    ));
                    if (props.events) {
                        Object.keys(props.events).forEach(function (eventName) {
                            var handler = props.events[eventName];
                            instanceRef.current.on(eventName, handler);
                        });
                    }
                    props.onRef && props.onRef(instanceRef);
                    return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        // console.log('useEffect - onmount');
        initTabulator();
    }, []);
    React.useEffect(function () {
        // console.log('useEffect - props.data changed');
        if (instanceRef && instanceRef.current) {
            initTabulator(); // re-init table
        }
    }, [props.data]);
    return React.createElement("div", __assign({ ref: ref, "data-instance": mainId }, htmlProps, { className: props.className }));
};
exports["default"] = ReactTabulator;
