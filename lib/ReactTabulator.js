"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
/* tslint:disable-next-line */
var Tabulator = require('tabulator-tables');
var NOOPS = function () { };
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = null;
        _this.htmlProps = {};
        _this.mainId = "tabulator-" + +new Date() + "-" + Math.floor(Math.random() * 9999999); // random id
        _this.table = null; // will be set once Tabulator instantiated
        return _this;
    }
    default_1.prototype.componentWillMount = function () {
        this.htmlProps = pick_react_known_prop_1.pickHTMLProps(this.props); // pick valid html props
        delete this.htmlProps['data']; // don't render data & columns as attributes
        delete this.htmlProps['columns'];
    };
    default_1.prototype.componentDidMount = function () {
        var domEle = ReactDOM.findDOMNode(this.ref); // mounted DOM element
        var that = this;
        var _a = this.props, _b = _a.height, height = _b === void 0 ? 220 : _b, columns = _a.columns, data = _a.data, rowClick = _a.rowClick, _c = _a.tableBuilding, tableBuilding = _c === void 0 ? NOOPS : _c, _d = _a.tableBuilt, tableBuilt = _d === void 0 ? NOOPS : _d, _e = _a.rowDblClick, rowDblClick = _e === void 0 ? NOOPS : _e, _f = _a.rowContext, rowContext = _f === void 0 ? NOOPS : _f, _g = _a.rowTap, rowTap = _g === void 0 ? NOOPS : _g, _h = _a.rowDblTap, rowDblTap = _h === void 0 ? NOOPS : _h, _j = _a.rowTapHold, rowTapHold = _j === void 0 ? NOOPS : _j, _k = _a.rowAdded, rowAdded = _k === void 0 ? NOOPS : _k, _l = _a.rowDeleted, rowDeleted = _l === void 0 ? NOOPS : _l, _m = _a.rowMoved, rowMoved = _m === void 0 ? NOOPS : _m, _o = _a.rowUpdated, rowUpdated = _o === void 0 ? NOOPS : _o, _p = _a.rowSelectionChanged, rowSelectionChanged = _p === void 0 ? NOOPS : _p, _q = _a.rowSelected, rowSelected = _q === void 0 ? NOOPS : _q, _r = _a.rowDeselected, rowDeselected = _r === void 0 ? NOOPS : _r, _s = _a.rowResized, rowResized = _s === void 0 ? NOOPS : _s, _t = _a.cellClick, cellClick = _t === void 0 ? NOOPS : _t, _u = _a.cellDblClick, cellDblClick = _u === void 0 ? NOOPS : _u, _v = _a.cellContext, cellContext = _v === void 0 ? NOOPS : _v, _w = _a.cellTap, cellTap = _w === void 0 ? NOOPS : _w, _x = _a.cellDblTap, cellDblTap = _x === void 0 ? NOOPS : _x, _y = _a.cellTapHold, cellTapHold = _y === void 0 ? NOOPS : _y, _z = _a.cellEditing, cellEditing = _z === void 0 ? NOOPS : _z, _0 = _a.cellEdited, cellEdited = _0 === void 0 ? NOOPS : _0, _1 = _a.cellEditCancelled, cellEditCancelled = _1 === void 0 ? NOOPS : _1, _2 = _a.columnMoved, columnMoved = _2 === void 0 ? NOOPS : _2, _3 = _a.columnResized, columnResized = _3 === void 0 ? NOOPS : _3, _4 = _a.columnTitleChanged, columnTitleChanged = _4 === void 0 ? NOOPS : _4, _5 = _a.columnVisibilityChanged, columnVisibilityChanged = _5 === void 0 ? NOOPS : _5, _6 = _a.headerClick, headerClick = _6 === void 0 ? NOOPS : _6, _7 = _a.headerDblClick, headerDblClick = _7 === void 0 ? NOOPS : _7, _8 = _a.headerContext, headerContext = _8 === void 0 ? NOOPS : _8, _9 = _a.headerTap, headerTap = _9 === void 0 ? NOOPS : _9, _10 = _a.headerDblTap, headerDblTap = _10 === void 0 ? NOOPS : _10, _11 = _a.headerTapHold, headerTapHold = _11 === void 0 ? NOOPS : _11, _12 = _a.htmlImporting, htmlImporting = _12 === void 0 ? NOOPS : _12, _13 = _a.htmlImported, htmlImported = _13 === void 0 ? NOOPS : _13, _14 = _a.dataLoading, dataLoading = _14 === void 0 ? NOOPS : _14, _15 = _a.dataLoaded, dataLoaded = _15 === void 0 ? NOOPS : _15, _16 = _a.dataEdited, dataEdited = _16 === void 0 ? NOOPS : _16, _17 = _a.ajaxRequesting, ajaxRequesting = _17 === void 0 ? NOOPS : _17, _18 = _a.ajaxResponse, ajaxResponse = _18 === void 0 ? NOOPS : _18, _19 = _a.ajaxError, ajaxError = _19 === void 0 ? NOOPS : _19, _20 = _a.dataFiltering, dataFiltering = _20 === void 0 ? NOOPS : _20, _21 = _a.dataFiltered, dataFiltered = _21 === void 0 ? NOOPS : _21, _22 = _a.dataSorting, dataSorting = _22 === void 0 ? NOOPS : _22, _23 = _a.dataSorted, dataSorted = _23 === void 0 ? NOOPS : _23, _24 = _a.renderStarted, renderStarted = _24 === void 0 ? NOOPS : _24, _25 = _a.renderComplete, renderComplete = _25 === void 0 ? NOOPS : _25, _26 = _a.pageLoaded, pageLoaded = _26 === void 0 ? NOOPS : _26, _27 = _a.localized, localized = _27 === void 0 ? NOOPS : _27, _28 = _a.dataGrouping, dataGrouping = _28 === void 0 ? NOOPS : _28, _29 = _a.dataGrouped, dataGrouped = _29 === void 0 ? NOOPS : _29, _30 = _a.groupVisibilityChanged, groupVisibilityChanged = _30 === void 0 ? NOOPS : _30, _31 = _a.groupClick, groupClick = _31 === void 0 ? NOOPS : _31, _32 = _a.groupDblClick, groupDblClick = _32 === void 0 ? NOOPS : _32, _33 = _a.groupContext, groupContext = _33 === void 0 ? NOOPS : _33, _34 = _a.groupTap, groupTap = _34 === void 0 ? NOOPS : _34, _35 = _a.groupDblTap, groupDblTap = _35 === void 0 ? NOOPS : _35, _36 = _a.groupTapHold, groupTapHold = _36 === void 0 ? NOOPS : _36, _37 = _a.movableRowsSendingStart, movableRowsSendingStart = _37 === void 0 ? NOOPS : _37, _38 = _a.movableRowsSent, movableRowsSent = _38 === void 0 ? NOOPS : _38, _39 = _a.movableRowsSentFailed, movableRowsSentFailed = _39 === void 0 ? NOOPS : _39, _40 = _a.movableRowsSendingStop, movableRowsSendingStop = _40 === void 0 ? NOOPS : _40, _41 = _a.movableRowsReceivingStart, movableRowsReceivingStart = _41 === void 0 ? NOOPS : _41, _42 = _a.movableRowsReceived, movableRowsReceived = _42 === void 0 ? NOOPS : _42, _43 = _a.movableRowsReceivedFailed, movableRowsReceivedFailed = _43 === void 0 ? NOOPS : _43, _44 = _a.movableRowsReceivingStop, movableRowsReceivingStop = _44 === void 0 ? NOOPS : _44, _45 = _a.validationFailed, validationFailed = _45 === void 0 ? NOOPS : _45, _46 = _a.clipboardCopied, clipboardCopied = _46 === void 0 ? NOOPS : _46, _47 = _a.clipboardPasted, clipboardPasted = _47 === void 0 ? NOOPS : _47, _48 = _a.clipboardPasteError, clipboardPasteError = _48 === void 0 ? NOOPS : _48, _49 = _a.downloadDataFormatter, downloadDataFormatter = _49 === void 0 ? NOOPS : _49, _50 = _a.downloadReady, downloadReady = _50 === void 0 ? NOOPS : _50, _51 = _a.downloadComplete, downloadComplete = _51 === void 0 ? NOOPS : _51, options = _a.options;
        var table = new Tabulator(domEle, __assign({ height: height,
            columns: columns,
            tableBuilt: tableBuilt,
            rowClick: rowClick,
            rowDblClick: rowDblClick,
            rowContext: rowContext,
            rowTap: rowTap,
            rowDblTap: rowDblTap,
            rowTapHold: rowTapHold,
            rowAdded: rowAdded,
            rowDeleted: rowDeleted,
            rowMoved: rowMoved,
            rowUpdated: rowUpdated,
            rowSelectionChanged: rowSelectionChanged,
            rowSelected: rowSelected,
            rowDeselected: rowDeselected,
            rowResized: rowResized,
            cellClick: cellClick,
            cellDblClick: cellDblClick,
            cellContext: cellContext,
            cellTap: cellTap,
            cellDblTap: cellDblTap,
            cellTapHold: cellTapHold,
            cellEditing: cellEditing,
            cellEdited: cellEdited,
            cellEditCancelled: cellEditCancelled,
            columnMoved: columnMoved,
            columnResized: columnResized,
            columnTitleChanged: columnTitleChanged,
            columnVisibilityChanged: columnVisibilityChanged,
            headerClick: headerClick,
            headerDblClick: headerDblClick,
            headerContext: headerContext,
            headerTap: headerTap,
            headerDblTap: headerDblTap,
            headerTapHold: headerTapHold,
            htmlImporting: htmlImporting,
            htmlImported: htmlImported,
            dataLoading: dataLoading,
            dataLoaded: dataLoaded,
            dataEdited: dataEdited,
            ajaxRequesting: ajaxRequesting,
            ajaxResponse: ajaxResponse,
            ajaxError: ajaxError,
            dataFiltering: dataFiltering,
            dataFiltered: dataFiltered,
            dataSorting: dataSorting,
            dataSorted: dataSorted,
            renderStarted: renderStarted,
            renderComplete: renderComplete,
            pageLoaded: pageLoaded,
            localized: localized,
            dataGrouping: dataGrouping,
            dataGrouped: dataGrouped,
            groupVisibilityChanged: groupVisibilityChanged,
            groupClick: groupClick,
            groupDblClick: groupDblClick,
            groupContext: groupContext,
            groupTap: groupTap,
            groupDblTap: groupDblTap,
            groupTapHold: groupTapHold,
            movableRowsSendingStart: movableRowsSendingStart,
            movableRowsSent: movableRowsSent,
            movableRowsSentFailed: movableRowsSentFailed,
            movableRowsSendingStop: movableRowsSendingStop,
            movableRowsReceivingStart: movableRowsReceivingStart,
            movableRowsReceived: movableRowsReceived,
            movableRowsReceivedFailed: movableRowsReceivedFailed,
            movableRowsReceivingStop: movableRowsReceivingStop,
            validationFailed: validationFailed,
            clipboardCopied: clipboardCopied,
            clipboardPasted: clipboardPasted,
            clipboardPasteError: clipboardPasteError,
            downloadDataFormatter: downloadDataFormatter,
            downloadReady: downloadReady,
            downloadComplete: downloadComplete, layout: 'fitColumns', // fit columns to width of table (optional)
            tableBuilding: function () {
                that.table = this;
                tableBuilding();
            } }, options));
        table.setData(data);
    };
    default_1.prototype.componentWillUnmount = function () {
        this.table.destroy();
    };
    default_1.prototype.render = function () {
        var _this = this;
        var className = this.props.className;
        return React.createElement("div", __assign({ ref: function (ref) { return (_this.ref = ref); }, "data-instance": this.mainId }, this.htmlProps, { className: className }));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
