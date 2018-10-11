import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pickHTMLProps } from 'pick-react-known-prop';

/* tslint:disable-next-line */
const Tabulator = require('tabulator-tables');

const NOOPS = () => {};

// TODO: add proper types for props & callbacks
interface IProps {
  className?: string;
  height?: number;
  columns: any[];
  data: any[];
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
  dataEdited?: any;
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
  downloadDataFormatter?: any;
  downloadReady?: any;
  downloadComplete?: any;
  options?: any; // Tabulator options object
}

export default class extends React.Component<IProps> {
  ref: any = null;
  htmlProps: any = {};
  mainId = `tabulator-${+new Date()}-${Math.floor(Math.random() * 9999999)}`; // random id
  table: any = null; // will be set once Tabulator instantiated

  componentWillMount() {
    this.htmlProps = pickHTMLProps(this.props); // pick valid html props
    delete this.htmlProps['data']; // don't render data & columns as attributes
    delete this.htmlProps['columns'];
  }

  componentDidMount() {
    const domEle: any = ReactDOM.findDOMNode(this.ref); // mounted DOM element
    const that = this;
    const {
      height = 220,
      columns,
      data,
      rowClick,
      tableBuilding = NOOPS,
      tableBuilt = NOOPS,
      rowDblClick = NOOPS,
      rowContext = NOOPS,
      rowTap = NOOPS,
      rowDblTap = NOOPS,
      rowTapHold = NOOPS,
      rowAdded = NOOPS,
      rowDeleted = NOOPS,
      rowMoved = NOOPS,
      rowUpdated = NOOPS,
      rowSelectionChanged = NOOPS,
      rowSelected = NOOPS,
      rowDeselected = NOOPS,
      rowResized = NOOPS,
      cellClick = NOOPS,
      cellDblClick = NOOPS,
      cellContext = NOOPS,
      cellTap = NOOPS,
      cellDblTap = NOOPS,
      cellTapHold = NOOPS,
      cellEditing = NOOPS,
      cellEdited = NOOPS,
      cellEditCancelled = NOOPS,
      columnMoved = NOOPS,
      columnResized = NOOPS,
      columnTitleChanged = NOOPS,
      columnVisibilityChanged = NOOPS,
      headerClick = NOOPS,
      headerDblClick = NOOPS,
      headerContext = NOOPS,
      headerTap = NOOPS,
      headerDblTap = NOOPS,
      headerTapHold = NOOPS,
      htmlImporting = NOOPS,
      htmlImported = NOOPS,
      dataLoading = NOOPS,
      dataLoaded = NOOPS,
      dataEdited = NOOPS,
      ajaxRequesting = NOOPS,
      ajaxResponse = NOOPS,
      ajaxError = NOOPS,
      dataFiltering = NOOPS,
      dataFiltered = NOOPS,
      dataSorting = NOOPS,
      dataSorted = NOOPS,
      renderStarted = NOOPS,
      renderComplete = NOOPS,
      pageLoaded = NOOPS,
      localized = NOOPS,
      dataGrouping = NOOPS,
      dataGrouped = NOOPS,
      groupVisibilityChanged = NOOPS,
      groupClick = NOOPS,
      groupDblClick = NOOPS,
      groupContext = NOOPS,
      groupTap = NOOPS,
      groupDblTap = NOOPS,
      groupTapHold = NOOPS,
      movableRowsSendingStart = NOOPS,
      movableRowsSent = NOOPS,
      movableRowsSentFailed = NOOPS,
      movableRowsSendingStop = NOOPS,
      movableRowsReceivingStart = NOOPS,
      movableRowsReceived = NOOPS,
      movableRowsReceivedFailed = NOOPS,
      movableRowsReceivingStop = NOOPS,
      validationFailed = NOOPS,
      clipboardCopied = NOOPS,
      clipboardPasted = NOOPS,
      clipboardPasteError = NOOPS,
      downloadDataFormatter = NOOPS,
      downloadReady = NOOPS,
      downloadComplete = NOOPS,
      options
    } = this.props;
    const table = new Tabulator(domEle, {
      height, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
      columns,
      tableBuilt,
      rowClick,
      rowDblClick,
      rowContext,
      rowTap,
      rowDblTap,
      rowTapHold,
      rowAdded,
      rowDeleted,
      rowMoved,
      rowUpdated,
      rowSelectionChanged,
      rowSelected,
      rowDeselected,
      rowResized,
      cellClick,
      cellDblClick,
      cellContext,
      cellTap,
      cellDblTap,
      cellTapHold,
      cellEditing,
      cellEdited,
      cellEditCancelled,
      columnMoved,
      columnResized,
      columnTitleChanged,
      columnVisibilityChanged,
      headerClick,
      headerDblClick,
      headerContext,
      headerTap,
      headerDblTap,
      headerTapHold,
      htmlImporting,
      htmlImported,
      dataLoading,
      dataLoaded,
      dataEdited,
      ajaxRequesting,
      ajaxResponse,
      ajaxError,
      dataFiltering,
      dataFiltered,
      dataSorting,
      dataSorted,
      renderStarted,
      renderComplete,
      pageLoaded,
      localized,
      dataGrouping,
      dataGrouped,
      groupVisibilityChanged,
      groupClick,
      groupDblClick,
      groupContext,
      groupTap,
      groupDblTap,
      groupTapHold,
      movableRowsSendingStart,
      movableRowsSent,
      movableRowsSentFailed,
      movableRowsSendingStop,
      movableRowsReceivingStart,
      movableRowsReceived,
      movableRowsReceivedFailed,
      movableRowsReceivingStop,
      validationFailed,
      clipboardCopied,
      clipboardPasted,
      clipboardPasteError,
      downloadDataFormatter,
      downloadReady,
      downloadComplete,
      layout: 'fitColumns', // fit columns to width of table (optional)
      tableBuilding() {
        that.table = this;
        tableBuilding();
      },
      ...options
    });
    table.setData(data);
  }

  componentWillUnmount() {
    this.table.destroy();
  }

  render() {
    const { className } = this.props;
    return <div ref={ref => (this.ref = ref)} data-instance={this.mainId} {...this.htmlProps} className={className} />;
  }
}
