import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.css';

import '../../src/styles.css';
// import { ReactTabulator, ReactTabulatorExample } from '../../lib';
import { ReactTabulatorExample } from '../../lib';

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
