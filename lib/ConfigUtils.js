"use strict";
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
exports.propsToOptions = void 0;
var Es6Promise = require("es6-promise"); // without this, 'yarn build' will complain about Promise.
var react_dom_1 = require("react-dom");
// .prettierignore    (to keep relevant props together)
var NOOPS = function () { };
function syncRender(comp, el) {
    return new Es6Promise.Promise(function (resolve, reject) {
        react_dom_1.render(comp, el, function () {
            resolve(el);
        });
    });
}
// get callbacks from props (default: NOOP) to set them to Tabulator options later.
var propsToOptions = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var output, defaultOptions, _i, defaultOptions_1, opt, callbackNames, _a, callbackNames_1, callbackName, el;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                output = {};
                defaultOptions = ['height', 'layout', 'layoutColumnsOnNewData', 'columnMinWidth', 'columnVertAlign',
                    'resizableColumns', 'resizableRows', 'autoResize', 'tooltips', 'tooltipsHeader', 'tooltipGenerationMode',
                    'initialSort', 'initialFilter', 'initialHeaderFilter', 'footerElement', 'index', 'keybindings', 'clipboard', 'clipboardCopyStyled',
                    'clipboardCopySelector', 'clipboardCopyFormatter', 'clipboardCopyHeader', 'clipboardPasteParser',
                    'clipboardPasteAction', 'rowFormatter', 'placeholder', 'selectable'];
                for (_i = 0, defaultOptions_1 = defaultOptions; _i < defaultOptions_1.length; _i++) {
                    opt = defaultOptions_1[_i];
                    if (typeof props[opt] !== 'undefined') {
                        output[opt] = props[opt];
                    }
                }
                callbackNames = ['tableBuilt', 'rowClick', 'rowDblClick', 'rowContext', 'rowTap', 'rowDblTap', 'rowTapHold',
                    'rowAdded', 'rowDeleted', 'rowMoved', 'rowUpdated', 'rowSelectionChanged', 'rowSelected', 'rowDeselected', 'rowResized',
                    'cellClick', 'cellDblClick', 'cellContext', 'cellTap', 'cellDblTap', 'cellTapHold', 'cellEditing', 'cellEditCancelled',
                    'columnMoved', 'columnResized', 'columnTitleChanged', 'columnVisibilityChanged',
                    'htmlImporting', 'htmlImported', 'dataLoading', 'dataLoaded',
                    'ajaxRequesting', 'ajaxResponse', 'dataFiltering', 'dataFiltered', 'dataSorting', 'dataSorted',
                    'renderStarted', 'renderComplete', 'pageLoaded', 'localized', 'dataGrouping', 'dataGrouped',
                    'groupVisibilityChanged', 'groupClick', 'groupDblClick', 'groupContext', 'groupTap', 'groupDblTap', 'groupTapHold',
                    'movableRowsSendingStart', 'movableRowsSent', 'movableRowsSentFailed', 'movableRowsSendingStop', 'movableRowsReceivingStart', 'movableRowsReceived', 'movableRowsReceivedFailed', 'movableRowsReceivingStop',
                    'validationFailed', 'clipboardCopied', 'clipboardPasted', 'clipboardPasteError',
                    'downloadReady', 'downloadComplete'];
                for (_a = 0, callbackNames_1 = callbackNames; _a < callbackNames_1.length; _a++) {
                    callbackName = callbackNames_1[_a];
                    if (typeof props[callbackName] !== 'undefined') {
                        output[callbackName] = props[callbackName] || NOOPS;
                    }
                }
                if (!(typeof props['footerElement'] === 'object')) return [3 /*break*/, 2];
                return [4 /*yield*/, syncRender(props['footerElement'], document.createElement('div'))];
            case 1:
                el = _b.sent();
                output['footerElement'] = el.innerHTML;
                _b.label = 2;
            case 2: return [2 /*return*/, output];
        }
    });
}); };
exports.propsToOptions = propsToOptions;
