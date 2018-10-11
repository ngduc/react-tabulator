"use strict";
exports.__esModule = true;
// .prettierignore    (to keep relevant props together)
var NOOPS = function () { };
// get callbacks from props (default: NOOP) & set them to Tabulator options
exports.getCallbacks = function (props) {
    var output = {};
    var defaultOptions = ['height', 'layout', 'layoutColumnsOnNewData', 'columnMinWidth', 'columnVertAlign',
        'resizableColumns', 'resizableRows', 'autoResize', 'tooltips', 'tooltipsHeader', 'tooltipGenerationMode',
        'initialSort', 'initialFilter', 'footerElement', 'index', 'keybindings', 'clipboard', 'clipboardCopyStyled',
        'clipboardCopySelector', 'clipboardCopyFormatter', 'clipboardCopyHeader', 'clipboardPasteParser', 'clipboardPasteAction'];
    for (var _i = 0, defaultOptions_1 = defaultOptions; _i < defaultOptions_1.length; _i++) {
        var opt = defaultOptions_1[_i];
        if (typeof props[opt] !== 'undefined') {
            output[opt] = props[opt];
        }
    }
    var names = ['tableBuilt', 'rowClick', 'rowDblClick', 'rowContext', 'rowTap', 'rowDblTap', 'rowTapHold',
        'rowAdded', 'rowDeleted', 'rowMoved', 'rowUpdated', 'rowSelectionChanged', 'rowSelected', 'rowDeselected', 'rowResized',
        'cellClick', 'cellDblClick', 'cellContext', 'cellTap', 'cellDblTap', 'cellTapHold', 'cellEditing', 'cellEdited', 'cellEditCancelled',
        'columnMoved', 'columnResized', 'columnTitleChanged', 'columnVisibilityChanged',
        'headerClick', 'headerDblClick', 'headerContext', 'headerTap', 'headerDblTap', 'headerTapHold',
        'htmlImporting', 'htmlImported', 'dataLoading', 'dataLoaded', 'dataEdited',
        'ajaxRequesting', 'ajaxResponse', 'ajaxError', 'dataFiltering', 'dataFiltered', 'dataSorting', 'dataSorted',
        'renderStarted', 'renderComplete', 'pageLoaded', 'localized', 'dataGrouping', 'dataGrouped',
        'groupVisibilityChanged', 'groupClick', 'groupDblClick', 'groupContext', 'groupTap', 'groupDblTap', 'groupTapHold',
        'movableRowsSendingStart', 'movableRowsSent', 'movableRowsSentFailed', 'movableRowsSendingStop', 'movableRowsReceivingStart', 'movableRowsReceived', 'movableRowsReceivedFailed', 'movableRowsReceivingStop',
        'validationFailed', 'clipboardCopied', 'clipboardPasted', 'clipboardPasteError',
        'downloadDataFormatter', 'downloadReady', 'downloadComplete'];
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var callbackName = names_1[_a];
        output[callbackName] = props[callbackName] || NOOPS;
    }
    return output;
};
