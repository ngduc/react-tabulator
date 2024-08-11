import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import '../../src/styles.css';
import { ReactTabulator } from '../../lib';

const columns = [
  { title: 'Name', field: 'name', width: 150 },
  { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress' },
  { title: 'Favourite Color', field: 'col' },
  { title: 'Date Of Birth', field: 'dob', hozAlign: 'center' },
  { title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star' },
  { title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross' }
];
const data = [
  { id: 1, name: 'Oli Bob', age: '12', col: 'red', dob: '', rating: 5, passed: true },
  { id: 2, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1989', rating: 4, passed: true },
  { id: 3, name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1985', rating: 4, passed: false },
  { id: 4, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980', rating: 4.5, passed: true },
  { id: 5, name: 'Margret Marmajuke', age: '16', col: 'yellow', dob: '31/01/1999', rating: 4, passed: false },
  { id: 6, name: 'Van Ng', age: '37', col: 'green', dob: '06/15/1982', rating: 4, passed: true },
  { id: 7, name: 'Duc Ng', age: '37', col: 'yellow', dob: '10/15/1982', rating: 4, passed: true }
];

class Demo extends Component {
  renderTable1 = () => {
    const columns = [{ title: 'ID', field: 'id', width: 150 }, { title: 'Name', field: 'name', width: 150 }];
    const data = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
    return <ReactTabulator height={100} columns={columns} data={data} />;
  };

  render() {
    // console.log(111, require('dotenv').config());

    return (
      <div>
        <h1>UI Tests</h1>

        {this.renderTable1()}

        <h5>Table</h5>
        <ReactTabulator columns={columns} data={data} />
      </div>
    );
  }
}

const rootElement = document.querySelector('#app');
const root = createRoot(rootElement);
root.render(<Demo />);