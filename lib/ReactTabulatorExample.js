"use strict";
var _a;
exports.__esModule = true;
var React = require("react");
// for styles:
// import 'react-tabulator/lib/styles.css'; // default theme
// import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css'; // use Theme(s)
var ReactTabulator_1 = require("./ReactTabulator");
var DateEditor_1 = require("./editors/DateEditor");
var MultiSelectEditor_1 = require("./editors/MultiSelectEditor");
var MultiValueFormatter_1 = require("./formatters/MultiValueFormatter");
var Utils_1 = require("./Utils");
function SimpleButton(props) {
    var rowData = props.cell._cell.row.data;
    var cellValue = props.cell._cell.value || 'Edit | Show';
    return React.createElement("button", { onClick: function () { return alert(rowData.name); } }, cellValue);
}
var columns = [
    { title: 'Name', field: 'name', width: 150 },
    { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress' },
    { title: 'Favourite Color', field: 'color' },
    { title: 'Date Of Birth', field: 'dob', sorter: 'date' },
    { title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star' },
    { title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross' },
    { title: 'Custom', field: 'custom', hozAlign: 'center', editor: 'input', formatter: Utils_1.reactFormatter(React.createElement(SimpleButton, null)) }
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
var petOptions = [
    { id: 'cat', name: 'cat' },
    { id: 'dog', name: 'dog' },
    { id: 'fish', name: 'fish' }
];
var editableColumns = [
    { title: 'Name', field: 'name', width: 150, editor: 'input', headerFilter: 'input' },
    { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress', editor: 'star' },
    {
        title: 'Favourite Color',
        field: 'color',
        editor: 'select',
        editorParams: { allowEmpty: true, showListOnEmpty: true, values: colorOptions },
        headerFilter: 'select',
        headerFilterParams: { values: colorOptions }
    },
    { title: 'Date Of Birth', field: 'dob', editor: DateEditor_1["default"], editorParams: { format: 'MM/DD/YYYY' } },
    {
        title: 'Pets',
        field: 'pets',
        sorter: function (a, b) { return a.toString().localeCompare(b.toString()); },
        editor: MultiSelectEditor_1["default"],
        editorParams: { values: petOptions },
        formatter: MultiValueFormatter_1["default"],
        formatterParams: { style: 'PILL' }
    },
    { title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross', editor: true }
];
exports["default"] = (function () {
    var _a = React.useState({
        data: [],
        selectedName: ''
    }), state = _a[0], setState = _a[1];
    var ref = React.useRef();
    var rowClick = function (e, row) {
        console.log('ref table: ', ref.current); // this is the Tabulator table instance
        // ref?.current && ref?.current.replaceData([])
        console.log('rowClick id: ${row.getData().id}', row, e);
        setState({ selectedName: row.getData().name });
    };
    var setData = function () {
        setState({ data: data });
    };
    var clearData = function () {
        setState({ data: [] });
    };
    var modifyData = function () {
        var _newData = data.filter(function (item) { return item.name === 'Oli Bob'; });
        setState({ data: _newData });
    };
    var renderAjaxScrollExample = function () {
        var columns = [
            { title: 'First Name', field: 'first_name', width: 150 },
            { title: 'Last Name', field: 'last_name', width: 150 },
            { title: 'Email', field: 'email', width: 150 }
        ];
        var options = {
            height: 100,
            movableRows: true,
            progressiveLoad: 'scroll',
            progressiveLoadDelay: 200,
            progressiveLoadScrollMargin: 30,
            ajaxURL: 'https://reqres.in/api/users',
            dataSendParams: {
                page: 'page',
                size: 'per_page'
            },
            dataReceiveParams: {
                last_page: 'last'
            },
            paginationSize: 5,
            ajaxResponse: function (url, params, response) {
                console.log('url, params, response', url, params, response);
                return {
                    data: response.data,
                    last: response.total_pages
                };
            },
            ajaxError: function (error) {
                console.log('ajaxError', error);
            }
        };
        return (React.createElement(ReactTabulator_1["default"], { onRef: function (r) { return (ref = r); }, columns: columns, options: options, events: {
                dataLoaded: function (data) {
                    console.log('dataLoaded', data);
                    // return data; //return the response data to tabulator
                    var modResponse = {};
                    modResponse.data = data;
                    modResponse.last = 5;
                    return modResponse;
                },
                ajaxError: function (error) {
                    console.log('ajaxError', error);
                }
            } }));
    };
    var options = {
        height: 150,
        movableRows: true,
        movableColumns: true
    };
    return (React.createElement("div", null,
        React.createElement(ReactTabulator_1["default"], { onRef: function (ref) { return (ref = ref); }, columns: columns, data: data, events: {
                rowClick: rowClick
            }, options: options, "data-custom-attr": "test-custom-attribute", className: "custom-css-class" }),
        React.createElement("i", null,
            "Selected Name: ",
            React.createElement("strong", null, state.selectedName)),
        React.createElement("h3", null,
            "Asynchronous data: (e.g. fetch) - ",
            React.createElement("button", { onClick: setData }, "Set Data"),
            ' ',
            React.createElement("button", { onClick: clearData }, "Clear"),
            " ",
            React.createElement("button", { onClick: modifyData }, "Modify Data")),
        React.createElement(ReactTabulator_1["default"], { columns: columns, data: state.data }),
        React.createElement("h3", null, "Editable Table"),
        React.createElement(ReactTabulator_1["default"], { columns: editableColumns, data: data, cellEdited: function (cell) { return console.log('cellEdited', cell); }, dataChanged: function (newData) { return console.log('dataChanged', newData); }, footerElement: React.createElement("span", null, "Footer"), options: { movableColumns: true, movableRows: true } }),
        React.createElement("h3", null, "Infinite Scrolling with Ajax Requests"),
        renderAjaxScrollExample(),
        React.createElement("p", null,
            React.createElement("a", { href: "https://github.com/ngduc/react-tabulator", target: "_blank" }, "Back to: Github Repo: react-tabulator")),
        React.createElement("p", null,
            React.createElement("a", { href: "http://tabulator.info/examples/4.0", target: "_blank" }, "More Tabulator's Examples"))));
});
