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
var _a;
var React = require("react");
var ReactTabulator_1 = require("./ReactTabulator");
var DateEditor_1 = require("./editors/DateEditor");
var MultiSelectEditor_1 = require("./editors/MultiSelectEditor");
var MultiValueFormatter_1 = require("./formatters/MultiValueFormatter");
var Utils_1 = require("./Utils");
function SimpleButton(props) {
    var cellData = props.cell._cell.row.data;
    return React.createElement("button", { onClick: function () { return alert(cellData.name); } }, "Show");
}
var columns = [
    { title: 'Name', field: 'name', width: 150 },
    { title: 'Age', field: 'age', align: 'left', formatter: 'progress' },
    { title: 'Favourite Color', field: 'color' },
    { title: 'Date Of Birth', field: 'dob' },
    { title: 'Rating', field: 'rating', align: 'center', formatter: 'star' },
    { title: 'Passed?', field: 'passed', align: 'center', formatter: 'tickCross' },
    { title: 'Custom', field: 'custom', align: 'center', formatter: Utils_1.reactFormatter(React.createElement(SimpleButton, null)) },
];
var data = [
    { id: 1, name: 'Oli Bob', age: '12', color: 'red', dob: '01/01/1980', rating: 5, passed: true, pets: ['cat', 'dog'] },
    { id: 2, name: 'Mary May', age: '1', color: 'green', dob: '12/05/1989', rating: 4, passed: true, pets: ['cat'] },
    { id: 3, name: 'Christine Lobowski', age: '42', color: 'green', dob: '10/05/1985', rating: 4, passed: false },
    { id: 4, name: 'Brendon Philips', age: '125', color: 'red', dob: '01/08/1980', rating: 4.5, passed: true },
    { id: 5, name: 'Margret Marmajuke', age: '16', color: 'yellow', dob: '07/01/1999', rating: 4, passed: false },
    {
        id: 6,
        name: 'Van Ng',
        age: '37',
        color: 'green',
        dob: '06/10/1982',
        rating: 4,
        passed: true,
        pets: ['dog', 'fish']
    },
    { id: 7, name: 'Duc Ng', age: '37', color: 'yellow', dob: '10/10/1982', rating: 4, passed: true, pets: ['dog'] }
];
// Editable Example:
var colorOptions = (_a = {}, _a[''] = '&nbsp;', _a.red = 'red', _a.green = 'green', _a.yellow = 'yellow', _a);
var petOptions = [{ id: 'cat', name: 'cat' }, { id: 'dog', name: 'dog' }, { id: 'fish', name: 'fish' }];
var editableColumns = [
    { title: 'Name', field: 'name', width: 150, editor: 'input', headerFilter: 'input' },
    { title: 'Age', field: 'age', align: 'left', formatter: 'progress', editor: 'progress' },
    {
        title: 'Favourite Color',
        field: 'color',
        editor: 'select',
        editorParams: { allowEmpty: true, showListOnEmpty: true, values: colorOptions },
        headerFilter: 'select',
        headerFilterParams: { values: colorOptions }
    },
    { title: 'Date Of Birth', field: 'dob', editor: DateEditor_1["default"], editorParams: { format: 'MM/dd/yyyy' } },
    {
        title: 'Pets',
        field: 'pets',
        editor: MultiSelectEditor_1["default"],
        editorParams: { values: petOptions },
        formatter: MultiValueFormatter_1["default"],
        formatterParams: { style: 'PILL' }
    },
    { title: 'Passed?', field: 'passed', align: 'center', formatter: 'tickCross', editor: true }
];
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: []
        };
        _this.ref = null;
        _this.rowClick = function (e, row) {
            console.log('ref table: ', _this.ref.table); // this is the Tabulator table instance
            console.log('rowClick id: ${row.getData().id}', row, e);
        };
        _this.setData = function () {
            _this.setState({ data: data });
        };
        _this.clearData = function () {
            _this.setState({ data: [] });
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
            React.createElement("h3", null,
                "Asynchronous data: (e.g. fetch) - ",
                React.createElement("button", { onClick: this.setData }, "Set Data"),
                ' ',
                React.createElement("button", { onClick: this.clearData }, "Clear")),
            React.createElement(ReactTabulator_1["default"], { columns: columns, data: this.state.data }),
            React.createElement("h3", null, "Editable Table"),
            React.createElement(ReactTabulator_1["default"], { columns: editableColumns, data: data, cellEdited: function (cell) { return console.log('cellEdited', cell); }, dataEdited: function (newData) { return console.log('dataEdited', newData); }, footerElement: React.createElement("span", null, "Footer") }),
            React.createElement("p", null,
                React.createElement("a", { href: "https://github.com/ngduc/react-tabulator", target: "_blank" }, "Back to: Github Repo: react-tabulator")),
            React.createElement("p", null,
                React.createElement("a", { href: "http://tabulator.info/examples/4.0", target: "_blank" }, "More Tabulator's Examples"))));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
