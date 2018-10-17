import * as React from 'react';
import ReactTabulator from './ReactTabulator';

const columns = [
  { title: 'Name', field: 'name', width: 150 },
  { title: 'Age', field: 'age', align: 'left', formatter: 'progress' },
  { title: 'Favourite Color', field: 'col' },
  { title: 'Date Of Birth', field: 'dob', align: 'center' },
  { title: 'Rating', field: 'rating', align: 'center', formatter: 'star' },
  { title: 'Passed?', field: 'passed', align: 'center', formatter: 'tickCross' }
];
const data = [
  { id: 1, name: 'Oli Bob', age: '12', col: 'red', dob: '', rating: 5, passed: true },
  { id: 2, name: 'Mary May', age: '1', col: 'green', dob: '14/05/1989', rating: 4, passed: true },
  { id: 3, name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1985', rating: 4, passed: false },
  { id: 4, name: 'Brendon Philips', age: '125', col: 'red', dob: '01/08/1980', rating: 4.5, passed: true },
  { id: 5, name: 'Margret Marmajuke', age: '16', col: 'yellow', dob: '31/01/1999', rating: 4, passed: false },
  { id: 6, name: 'Van Ng', age: '37', col: 'green', dob: '06/15/1982', rating: 4, passed: true },
  { id: 7, name: 'Duc Ng', age: '37', col: 'yellow', dob: '10/15/1982', rating: 4, passed: true }
];

// Editable Example:
const colorOptions = { ['']: '', red: 'red', green: 'green', yellow: 'yellow' };
const editableColumns = [
  { title: 'Name', field: 'name', width: 150, editor: 'input', headerFilter: 'input' },
  { title: 'Age', field: 'age', align: 'left', formatter: 'progress', editor: 'progress' },
  {
    title: 'Favourite Color',
    field: 'col',
    editor: 'select',
    editorParams: colorOptions,
    headerFilter: true,
    headerFilterParams: colorOptions
  },
  { title: 'Date Of Birth', field: 'dob', align: 'center', editor: 'input' },
  { title: 'Rating', field: 'rating', align: 'center', formatter: 'star', editor: true },
  { title: 'Passed?', field: 'passed', align: 'center', formatter: 'tickCross', editor: true }
];

interface IProps {
  data: any[];
}

export default class extends React.Component<IProps> {
  state: any = {
    data: []
  };
  ref: any = null;

  rowClick = (e: any, row: any) => {
    console.log('ref table: ', this.ref.table); // this is the Tabulator table instance
    console.log('rowClick id: ${row.getData().id}', row, e);
  };

  setData = () => {
    this.setState({ data });
  };
  clearData = () => {
    this.setState({ data: [] });
  };

  render() {
    const options = {
      height: 150,
      movableRows: true
    };
    return (
      <div>
        <ReactTabulator
          ref={ref => (this.ref = ref)}
          columns={columns}
          data={data}
          rowClick={this.rowClick}
          options={options}
          data-custom-attr="test-custom-attribute"
          className="custom-css-class"
        />

        <h3>
          Asynchronous data: (e.g. fetch) - <button onClick={this.setData}>Set Data</button>{' '}
          <button onClick={this.clearData}>Clear</button>
        </h3>
        <ReactTabulator columns={columns} data={this.state.data} />

        <h3>Editable Table</h3>
        <ReactTabulator columns={editableColumns} data={data} />

        <p>
          <a href="https://github.com/ngduc/react-tabulator" target="_blank">
            Back to: Github Repo: react-tabulator
          </a>
        </p>
        <p>
          <a href="http://tabulator.info/examples/4.0" target="_blank">
            More Tabulator's Examples
          </a>
        </p>
      </div>
    );
  }
}
