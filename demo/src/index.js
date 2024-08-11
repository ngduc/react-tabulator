import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import '../../styles.css'; // required styles
import '../../src/css/tabulator.min.css';  // tabulator theme
// import '../../src/css/bootstrap/tabulator_bootstrap.min.css'; // bootstrap theme

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

// Get the root element from the DOM
const rootElement = document.querySelector('#demo');

// Create a root and render your app
const root = createRoot(rootElement);
root.render(<Demo />);
