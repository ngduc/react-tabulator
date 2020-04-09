"use strict";
exports.__esModule = true;
var server_1 = require("react-dom/server");
// .prettierignore    (to keep relevant props together)
var NOOPS = function () { };
// get callbacks from props (default: NOOP) to set them to Tabulator options later.
exports.propsToOptions = function (props) {
    var output = {};
    var defaultOptions = ['height', 'layout', 'layoutColumnsOnNewData', 'columnMinWidth', 'columnVertAlign',
        'resizableColumns', 'resizableRows', 'autoResize', 'tooltips', 'tooltipsHeader', 'tooltipGenerationMode',
        'initialSort', 'initialFilter', 'initialHeaderFilter', 'footerElement', 'index', 'keybindings', 'clipboard', 'clipboardCopyStyled',
        'clipboardCopySelector', 'clipboardCopyFormatter', 'clipboardCopyHeader', 'clipboardPasteParser',
        'clipboardPasteAction', 'rowFormatter', 'placeholder'];
    for (var _i = 0, defaultOptions_1 = defaultOptions; _i < defaultOptions_1.length; _i++) {
        var opt = defaultOptions_1[_i];
        if (typeof props[opt] !== 'undefined') {
            output[opt] = props[opt];
        }
    }
    var callbackNames = ['tableBuilt', 'rowClick', 'rowDblClick', 'rowContext', 'rowTap', 'rowDblTap', 'rowTapHold',
        'rowAdded', 'rowDeleted', 'rowMoved', 'rowUpdated', 'rowSelectionChanged', 'rowSelected', 'rowDeselected', 'rowResized',
        'cellClick', 'cellDblClick', 'cellContext', 'cellTap', 'cellDblTap', 'cellTapHold', 'cellEditing', 'cellEdited', 'cellEditCancelled',
        'columnMoved', 'columnResized', 'columnTitleChanged', 'columnVisibilityChanged',
        'htmlImporting', 'htmlImported', 'dataLoading', 'dataLoaded', 'dataEdited',
        'ajaxRequesting', 'ajaxResponse', 'ajaxError', 'dataFiltering', 'dataFiltered', 'dataSorting', 'dataSorted',
        'renderStarted', 'renderComplete', 'pageLoaded', 'localized', 'dataGrouping', 'dataGrouped',
        'groupVisibilityChanged', 'groupClick', 'groupDblClick', 'groupContext', 'groupTap', 'groupDblTap', 'groupTapHold',
        'movableRowsSendingStart', 'movableRowsSent', 'movableRowsSentFailed', 'movableRowsSendingStop', 'movableRowsReceivingStart', 'movableRowsReceived', 'movableRowsReceivedFailed', 'movableRowsReceivingStop',
        'validationFailed', 'clipboardCopied', 'clipboardPasted', 'clipboardPasteError',
        'downloadDataFormatter', 'downloadReady', 'downloadComplete'];
    for (var _a = 0, callbackNames_1 = callbackNames; _a < callbackNames_1.length; _a++) {
        var callbackName = callbackNames_1[_a];
        output[callbackName] = props[callbackName] || NOOPS;
    }
    if (typeof props['footerElement'] === 'object') {
        // convert from JSX to HTML string (tabulator's footerElement accepts string)
        output['footerElement'] = server_1.renderToString(props['footerElement']);
    }
    return output;
};
