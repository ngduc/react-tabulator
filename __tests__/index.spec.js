// const faker = require('faker');
// const person = {
//   name: faker.name.firstName() + ' ' + faker.name.lastName(),
//   email: faker.internet.email(),
//   phone: faker.phone.phoneNumber(),
//   message: faker.random.words()
// };

async function prop(element, property) {
  return await (await element.getProperty(property)).jsonValue();
}

beforeAll(async () => {
  page = await browser.newPage();
  await page.goto('http://localhost:3003/');
  await page.waitForSelector('.tabulator');
});

describe('React-Tabulator', () => {
  test('should render 2 tabulator tables', async () => {
    const tables = await page.$$('.tabulator');
    expect(tables).toHaveLength(2);
  });

  test('should render data', async () => {
    const ele = await page.$$('.tabulator-cell');
    const firstCellText = await prop(ele[0], 'innerText');
    expect(firstCellText).toContain('Oli Bob');
  });
});

// --------------------

// This function occurs after the result of each tests, it closes the browser
// afterAll(() => {
//   browser.close();
// });

// import React from 'react';
// import { mount, renderDom } from './test-utils';
// import { findDOMNode } from 'react-dom';

// import { render, waitForElement } from 'react-testing-library';
// import 'jest-dom/extend-expect';

// import { ReactTabulator } from '../lib';

// function flushPromises() {
//   return new Promise(resolve => setImmediate(resolve));
// }
// // const asyncFlush = () => new Promise(resolve => setTimeout(resolve, 0));
// function tick() {
//   return new Promise(resolve => {
//     setTimeout(resolve, 1000);
//   });
// }

// describe('List tests', () => {
//   // it('renders list-items', () => {
//   //   const wrapper = mount(<ReactTabulator columns={[]} data={[]} />);

//   //   // // Expect the wrapper object to be defined
//   //   expect(wrapper.find('[data-instance]')).toBeDefined();
//   //   // expect(wrapper.find('.item')).toHaveLength(items.length);
//   // });

//   it('renders list-items', async () => {
//     const columns = [{ title: 'Name', field: 'name', width: 150 }];
//     const data = [{ name: 'John Doe' }];

//     const dataLoadedFn = jest.fn();
//     // // const wrapper = mount(<ReactTabulator columns={columns} data={data} dataLoaded={dataLoadedFn} />);

//     // let ref = null;
//     // const { getByText, container } = render(
//     //   <div>
//     //     <ReactTabulator ref={r => (ref = r)} columns={columns} data={[]} dataLoaded={dataLoadedFn} />
//     //   </div>
//     // );
//     // // await waitForElement(() => getByText('John'));
//     // await ref.table.redraw(true);
//     // console.log(111, container.innerHTML);
//     // // await waitForElement(() => getByText('Doe'));

//     const rendered = findDOMNode(renderDom(<ReactTabulator columns={columns} data={data} dataLoaded={dataLoadedFn} />));
//     console.log(222, rendered.innerHTML);
//   });
// });
