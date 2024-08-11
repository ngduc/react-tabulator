import {createRoot} from "react-dom/client";

// .prettierignore    (to keep relevant props together)
const NOOPS = () => {};

// TODO: add proper types for props & callbacks
export interface IProps {
  events?: any; // example: <ReactTabulator events={{ rowClick: (ev, row) => {} }}... />
  className?: string;
  columns: any[];
  data?: any[];
  height?: number;
  layout?: string, /// layout type "fitColumns" | "fitDataTable" | "fitDataStretch" | "fitData" - default: "fitData"
	layoutColumnsOnNewData?: boolean, // update column widths on setData - default: false
	columnMinWidth?: number, // minimum global width for a column - default: 40
	columnVertAlign?: string, // vertical alignment of column headers - default: 'top'
	resizableColumns?: boolean, // resizable columns - default: true
	resizableRows?: boolean, // resizable rows - default: false
	autoResize?: boolean, // auto resize table - default: true
	tooltips?: boolean, // Tool tip value - default: false
	tooltipsHeader?: boolean, // Tool tip for headers - default: false
	tooltipGenerationMode?: string, // when to generate tooltips - default: 'load'
	initialSort?: boolean, // initial sorting criteria - default: false
	initialFilter?: boolean, // initial filtering criteria - default: false
	initialHeaderFilter?: boolean, // initial filtering criteria - default: false
	footerElement?: any, // hold footer element - default: false
	index?: string, // filed for row index - default: 'id'
	keybindings?:[], // array for keybindings - default: []
	clipboard?: boolean, // enable clipboard - default: false
	clipboardCopyStyled?: boolean, // formatted table data - default: true
	clipboardCopySelector?: string, // method of chosing which data is coppied to the clipboard - default: 'active'
	clipboardCopyFormatter?: string, // convert data to a clipboard string - default: 'table'
	clipboardCopyHeader?: boolean, // include table headers in copt - default: true
	clipboardPasteParser?: string, // convert pasted clipboard data to rows - default: 'table'
	clipboardPasteAction?: string, // how to insert pasted data into the table - default: 'insert'
  rowClick?: (e: any, row: any) => void;
  tableBuilding?: () => void;
  tableBuilt?: () => void;
  rowDblClick?: any;
  rowContext?: any;
  rowTap?: any;
  rowDblTap?: any;
  rowTapHold?: any;
  rowAdded?: any;
  rowDeleted?: any;
  rowMoved?: any;
  rowUpdated?: any;
  rowSelectionChanged?: any;
  rowSelected?: any;
  rowDeselected?: any;
  rowResized?: any;
  cellClick?: any;
  cellDblClick?: any;
  cellContext?: any;
  cellTap?: any;
  cellDblTap?: any;
  cellTapHold?: any;
  cellEditing?: any;
  cellEdited?: any;
  cellEditCancelled?: any;
  columnMoved?: any;
  columnResized?: any;
  columnTitleChanged?: any;
  columnVisibilityChanged?: any;
  headerClick?: any;
  headerDblClick?: any;
  headerContext?: any;
  headerTap?: any;
  headerDblTap?: any;
  headerTapHold?: any;
  htmlImporting?: any;
  htmlImported?: any;
  dataLoading?: any;
  dataLoaded?: any;
  dataChanged?: any;
  ajaxRequesting?: any;
  ajaxResponse?: any;
  ajaxError?: any;
  dataFiltering?: any;
  dataFiltered?: any;
  dataSorting?: any;
  dataSorted?: any;
  renderStarted?: any;
  renderComplete?: any;
  pageLoaded?: any;
  localized?: any;
  dataGrouping?: any;
  dataGrouped?: any;
  groupVisibilityChanged?: any;
  groupClick?: any;
  groupDblClick?: any;
  groupContext?: any;
  groupTap?: any;
  groupDblTap?: any;
  groupTapHold?: any;
  movableRowsSendingStart?: any;
  movableRowsSent?: any;
  movableRowsSentFailed?: any;
  movableRowsSendingStop?: any;
  movableRowsReceivingStart?: any;
  movableRowsReceived?: any;
  movableRowsReceivedFailed?: any;
  movableRowsReceivingStop?: any;
  validationFailed?: any;
  clipboardCopied?: any;
  clipboardPasted?: any;
  clipboardPasteError?: any;
  downloadReady?: any;
  downloadComplete?: any;
  selectableCheck?: any;
  
  // NOTE: you can directly pass *any* tabulator options via this. (see README)
  options?: any; // Tabulator options object
}

function syncRender(comp: any, el: any): any {
  return new Promise((resolve, reject) => {
    try {
      const root = createRoot(el);
      root.render(comp);
      resolve(el); // Resolve immediately after rendering
    } catch (error) {
      reject(error);
    }
  });
}

// get callbacks from props (default: NOOP) to set them to Tabulator options later.
export const propsToOptions = async (props: any) => {
  const output: any = {}

  const defaultOptions = ['height', 'layout', 'layoutColumnsOnNewData', 'columnMinWidth', 'columnVertAlign',
  'resizableColumns', 'resizableRows', 'autoResize', 'tooltips', 'tooltipsHeader', 'tooltipGenerationMode',
  'initialSort', 'initialFilter', 'initialHeaderFilter', 'footerElement', 'index', 'keybindings', 'clipboard', 'clipboardCopyStyled',
  'clipboardCopySelector', 'clipboardCopyFormatter', 'clipboardCopyHeader', 'clipboardPasteParser',
  'clipboardPasteAction', 'rowFormatter', 'placeholder', 'selectable']

  for (const opt of defaultOptions) {
    if (typeof props[opt] !== 'undefined') {
      output[opt] = props[opt]
    }
  }

  const callbackNames = ['tableBuilt','rowClick','rowDblClick','rowContext','rowTap','rowDblTap','rowTapHold',
    'rowAdded','rowDeleted','rowMoved','rowUpdated','rowSelectionChanged','rowSelected','rowDeselected','rowResized',
    'cellClick','cellDblClick','cellContext','cellTap','cellDblTap','cellTapHold','cellEditing','cellEditCancelled',
    'columnMoved','columnResized','columnTitleChanged','columnVisibilityChanged',
    'htmlImporting','htmlImported','dataLoading','dataLoaded',
    'ajaxRequesting','ajaxResponse','dataFiltering','dataFiltered','dataSorting','dataSorted',
    'renderStarted','renderComplete','pageLoaded','localized','dataGrouping','dataGrouped',
    'groupVisibilityChanged','groupClick','groupDblClick','groupContext','groupTap','groupDblTap','groupTapHold',
    'movableRowsSendingStart','movableRowsSent','movableRowsSentFailed','movableRowsSendingStop','movableRowsReceivingStart','movableRowsReceived','movableRowsReceivedFailed','movableRowsReceivingStop',
    'validationFailed','clipboardCopied','clipboardPasted','clipboardPasteError',
    'downloadReady','downloadComplete']; // don't add "selectableCheck" here, it will break "rowSelectionChanged"
  
  for (const callbackName of callbackNames) {
    if (typeof props[callbackName] !== 'undefined') {
      output[callbackName] = props[callbackName] || NOOPS
    }
  }
  if (typeof props['footerElement'] === 'object') {
    // convert from JSX to HTML string (tabulator's footerElement accepts string)
    const el = await syncRender(props['footerElement'], document.createElement('div'))
    output['footerElement'] = el.innerHTML
  }
  return output
}
