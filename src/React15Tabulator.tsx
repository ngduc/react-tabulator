import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pickHTMLProps } from 'pick-react-known-prop';
import { IProps, propsToOptions } from './ConfigUtils';
import { isSameArray } from './Utils';

/* tslint:disable-next-line */
const Tabulator = require('tabulator-tables');

interface IState {
  data: any[];
  columns: any[];
}

export default class extends React.Component<IProps, Partial<IState>> {
  state: IState = {
    data: [],
    columns: this.props.columns
  };

  ref: any = null;
  htmlProps: any = null;
  mainId = `tabulator-${+new Date()}-${Math.floor(Math.random() * 9999999)}`; // random id
  table: any = null; // will be set once Tabulator instantiated

  componentDidMount() {
    const domEle: any = ReactDOM.findDOMNode(this.ref); // mounted DOM element
    const that = this;
    const { columns, data, options } = this.props;
    const propOptions = propsToOptions(this.props);

    new Tabulator(domEle, {
      columns,
      ...propOptions,
      layout: 'fitColumns', // fit columns to width of table (optional)
      tableBuilding() {
        that.table = this; // keep table instance
        that.props.tableBuilding ? that.props.tableBuilding() : '';
      },
      dataLoaded() {
        that.props.dataLoaded ? that.props.dataLoaded() : '';
      },
      ...options,
      data
    });
    // await table.setData(data);
    // console.log('- componentDidMount');
    if (data && data.length > 0) {
      this.setState({ data });
    }
  }

  componentWillUnmount() {
    this.table.destroy();
  }

  // this is for React 15.x only
  componentWillReceiveProps(props: IProps) {
    if (!isSameArray(this.state.data, props.data)) {
      // console.log('- data changed');
      this.setState({ data: props.data }, () => {
        this.table.setData(this.state.data);
      });
    }
    if (!isSameArray(this.state.columns, props.columns)) {
      // console.log('- columns changed');
      this.setState({ columns: props.columns }, () => {
        this.table.setColumns(this.state.columns);
      });
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
    // console.log('*** render');
    this.pickValidHTMLProps();
    const { className } = this.props;
    return <div ref={ref => (this.ref = ref)} data-instance={this.mainId} {...this.htmlProps} className={className} />;
  }
}
