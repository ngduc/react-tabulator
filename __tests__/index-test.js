// import expect from 'expect';
// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';

// import { ReactTabulator } from '../lib';

// describe('ReactTabulator', () => {
//   let node;

//   beforeEach(() => {
//     node = document.createElement('div');
//   });

//   afterEach(() => {
//     unmountComponentAtNode(node);
//   });

//   it('render with empty columns and data', () => {
//     render(<ReactTabulator columns={[]} data={[]} />, node, () => {
//       expect(node.innerHTML).toContain('tabulator-layout');
//     });
//   });

//   it('render columns', () => {
//     const columns = [{ title: 'Name', field: 'name', width: 150 }];
//     render(<ReactTabulator columns={columns} data={[]} />, node, () => {
//       expect(node.innerHTML).toContain('tabulator-field="name"');
//     });
//   });

//   it('render columns & data', () => {
//     const columns = [{ title: 'Name', field: 'name', width: 150 }];
//     const data = [{ id: 1, name: 'John Doe' }];
//     // TODO: use "dataLoaded" callback & assert result
//     render(<ReactTabulator columns={columns} data={data} />, node, () => {
//       expect(node.innerHTML).toContain('tabulator-field="name"');
//     });
//   });
// });
