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
exports.__esModule = true;
var React = require("react");
var ReactTabulator_1 = require("./ReactTabulator");
var columns = [
    { title: 'Name', field: 'name', width: 150 },
    { title: 'Age', field: 'age', align: 'left', formatter: 'progress' },
    { title: 'Favourite Color', field: 'col' },
    { title: 'Date Of Birth', field: 'dob', align: 'center' },
    { title: 'Rating', field: 'rating', align: 'center', formatter: 'star' },
    { title: 'Passed?', field: 'passed', align: 'center', formatter: 'tickCross' }
];
var data = [
    { id: 1, name: 'Oli Bob', age: '12', col: 'red', dob: '', rating: 5, passed: true },
    { id: 2, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1989', rating: 4, passed: true },
    { id: 3, name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1985', rating: 4, passed: false },
    { id: 4, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980', rating: 4.5, passed: true },
    { id: 5, name: 'Margret Marmajuke', age: '16', col: 'yellow', dob: '31/01/1999', rating: 4, passed: false },
    { id: 6, name: 'Van Ng', age: '37', col: 'green', dob: '06/15/1982', rating: 4, passed: true },
    { id: 7, name: 'Duc Ng', age: '37', col: 'yellow', dob: '10/15/1982', rating: 4, passed: true }
];
var editableColumns = [
    { title: 'Name', field: 'name', width: 150, editor: 'input', headerFilter: 'input' },
    { title: 'Age', field: 'age', align: 'left', formatter: 'progress', editor: 'progress' },
    { title: 'Favourite Color', field: 'col', editor: 'input' },
    { title: 'Date Of Birth', field: 'dob', align: 'center', editor: 'input' },
    { title: 'Rating', field: 'rating', align: 'center', formatter: 'star', editor: true },
    { title: 'Passed?', field: 'passed', align: 'center', formatter: 'tickCross', editor: true }
];
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = null;
        _this.rowClick = function (e, row) {
            console.log('ref table: ', _this.ref.table); // this is the Tabulator table instance
            console.log('rowClick id: ${row.getData().id}', row, e);
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        var options = {
            height: 150,
            movableRows: true
        };
        return (React.createElement("div", null,
            React.createElement(ReactTabulator_1["default"], { ref: function (ref) { return (_this.ref = ref); }, columns: columns, data: data, rowClick: this.rowClick, options: options, "data-custom-attr": "test-custom-attribute", className: "custom-css-class" }),
            React.createElement("h3", null, "Editable Table"),
            React.createElement(ReactTabulator_1["default"], { columns: editableColumns, data: data }),
            React.createElement("p", null,
                React.createElement("a", { href: "https://github.com/ngduc/react-tabulator", target: "_blank" }, "Back to: Github Repo: react-tabulator")),
            React.createElement("p", null,
                React.createElement("a", { href: "http://tabulator.info/examples/4.0", target: "_blank" }, "More Tabulator's Examples"))));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
