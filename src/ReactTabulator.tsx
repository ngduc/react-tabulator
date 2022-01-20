import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pickHTMLProps } from 'pick-react-known-prop';
import { IProps, propsToOptions } from './ConfigUtils';
import { isSameArray, isSameObject } from './Utils';

/* tslint:disable-next-line */
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { Tabulator as TabulatorTypes } from './types/TabulatorTypes'

export interface ReactTabulatorOptions extends TabulatorTypes.Options {
  [k: string]: any
};

interface IState {
  data: any[];
  columns: any[];
  options?: ReactTabulatorOptions;
}

export default class extends React.Component<IProps, Partial<IState>> {
  state: IState = {
    data: [],
    columns: this.props.columns,
    options: this.props.options
  };

  ref: React.ReactInstance = null;
  htmlProps: any = null;
  mainId = `tabulator-${+new Date()}-${Math.floor(Math.random() * 9999999)}`; // random id
  table: any = null; // will be set once Tabulator instantiated.

  async initTabulator() {
    const domEle: any = ReactDOM.findDOMNode(this.ref); // mounted DOM element
    const that = this;
    const { columns, data, options } = this.props;
    const propOptions = await propsToOptions(this.props);

    const instance = new Tabulator(domEle, {
      columns,
      ...propOptions,
      layout: this.props.layout ?? 'fitColumns', // fit columns to width of table (optional)
      // tableBuilding() {
      //   that.table = this; // keep the table instance.
      //   that.props.tableBuilding ? that.props.tableBuilding() : '';
      // },
      // dataLoaded() {
      //   that.props.dataLoaded ? that.props.dataLoaded() : '';
      // },
      invalidOptionWarnings: false, // #102: disable console warnings for invalid table properties
      ...options, // props.options are passed to Tabulator's options.
      data
    });
    instance.on('tableBuilding', function () {
      that.table = this; // keep the table instance.
      that.props.tableBuilding ? that.props.tableBuilding() : '';
    });
    instance.on('dataLoaded', function () {
      that.props.dataLoaded ? that.props.dataLoaded() : '';
    });

    // await table.setData(data);
    if (data && data.length > 0) {
      this.setState({ data });
    }
  }

  async componentDidMount() {
    await this.initTabulator();
  }

  componentWillUnmount() {
    this.table && this.table.destroy();
  }

  // React 16.5.x - "getDerivedStateFromProps" replaces both "componentWillMount" & "componentWillReceiveProps"
  // This function will be ignored when running with React 15.6.x
  static getDerivedStateFromProps(props: any, state: any) {
    // console.log('- getDerivedStateFromProps', props, state);
    const noData = !props.data || props.data.length === 0;
    if (!state && noData) {
      // first time (similar to: componentWillMount)
      return null;
    }
    if (state && state.data.length && state.data.length === 0 && props && props.data && props.data.length === 0) {
      return null;
    }
    // if (state && props.columns) {
    //   // this triggers componentDidUpdate
    //   if (!isSameArray(state.columns, props.columns)) {
    //     console.log('--- Columns changed');
    //     // console.log('columns changed!');
    //     return { ...state, columns: [...props.columns] };
    //   }
    // }
    if (state && (props.data || props.columns || props.options)) {
      // this triggers componentDidUpdate
      if (
        !isSameArray(state.data, props.data) ||
        !isSameArray(state.columns, props.columns) ||
        (props.checkOptions === true && !isSameObject(state.options, props.options))
      ) {
        // console.log('data changed!');
        return { ...state, data: [...props.data], columns: [...props.columns], options: { ...props.options } };
      }
    }
    return {};
  }

  // componentDidUpdate(prevProps, prevState)
  componentDidUpdate(prevProps: IProps, prevState: IState) {
    // console.log('--- ', this.table)
    // props data changed! (see: getDerivedStateFromProps)
    if (!isSameArray(prevState.data, this.state.data)) {
      // only when data is really different: call this.table.setData (will re-render table)
      this.table && this.table.setData(this.state.data);
    }
    if (!isSameArray(prevState.columns, this.state.columns)) {
      // only when data is really different: call this.table.setData (will re-render table)
      this.table && this.table.setColumns(this.state.columns);
    }
    if (!isSameObject(prevState.options, this.state.options)) {
      // console.log('options changed', this.state.options);
      this.initTabulator();
    }
  }

  pickValidHTMLProps = () => {
    // run once
    if (!this.htmlProps) {
      this.htmlProps = pickHTMLProps(this.props); // pick valid html props
      delete this.htmlProps['data']; // don't render data & columns as attributes
      delete this.htmlProps['columns'];
    }
  };

  render() {
    this.pickValidHTMLProps();
    const { className } = this.props;
    return (
      <div ref={(ref) => (this.ref = ref)} data-instance={this.mainId} {...this.htmlProps} className={className} />
    );
  }
}
