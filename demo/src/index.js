import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.css';

import '../../lib/styles.css';
import { ReactTabulatorExample } from '../../lib';

// import '../../lib/css/bootstrap/tabulator_bootstrap4.min.css';   // use Theme(s)
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
