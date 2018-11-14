import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.css';

import '../../styles.css'; // required styles
// import '../../css/tabulator.min.css';  // tabulator theme
import '../../css/bootstrap/tabulator_bootstrap.min.css'; // bootstrap theme

import { ReactTabulatorExample } from '../../lib';
// import { ReactTabulator, ReactTabulatorExample } from '../../lib';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Demo</h1>
        <ReactTabulatorExample />
        {/* <ReactTabulator data={[]} /> */}
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
