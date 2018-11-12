import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.css';

// import '../../styles.css'; // default styles
import '../../css/bootstrap/tabulator_bootstrap.min.css'; // use Theme(s)

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
