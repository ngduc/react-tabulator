import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pickHTMLProps } from 'pick-react-known-prop';
import { IProps, propsToOptions } from './ConfigUtils';

/* tslint:disable-next-line */
const Tabulator = require('tabulator-tables');

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
    const { columns, data, options } = this.props;
    const propOptions = propsToOptions(this.props);

    new Tabulator(domEle, {
      columns,
      ...propOptions,
      layout: 'fitColumns', // fit columns to width of table (optional)
      tableBuilding() {
        that.table = this; // keep table instance
        if (that.props.tableBuilding) {
          that.props.tableBuilding();
        }
      },
      dataLoaded() {
        that.props.dataLoaded ? that.props.dataLoaded() : '';
      },
      ...options,
      data
    });
    // await table.setData(data);
  }

  componentWillUnmount() {
    this.table.destroy();
  }

  render() {
    const { className } = this.props;
    return <div ref={ref => (this.ref = ref)} data-instance={this.mainId} {...this.htmlProps} className={className} />;
  }
}
