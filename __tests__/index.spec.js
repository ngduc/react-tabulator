import React from 'react';
import { mount } from './test-utils';

import { ReactTabulator } from '../lib';

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}
// const asyncFlush = () => new Promise(resolve => setTimeout(resolve, 0));
// function tick() {
//   return new Promise(resolve => {
//     setTimeout(resolve, 1000);
//   });
// }

describe('List tests', () => {
  it('renders list-items', () => {
    const wrapper = mount(<ReactTabulator columns={[]} data={[]} />);

    // // Expect the wrapper object to be defined
    expect(wrapper.find('[data-instance]')).toBeDefined();
    // expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  it('renders list-items', async () => {
    const columns = [{ title: 'Name', field: 'name', width: 150 }];
    const data = [{ id: 1, name: 'John Doe' }];

    const dataLoadedFn = jest.fn();
    const wrapper = mount(<ReactTabulator columns={columns} data={data} dataLoaded={dataLoadedFn} />);
    await flushPromises();
    await flushPromises();

    // // Expect the wrapper object to be defined
    expect(wrapper.find('[data-instance]')).toBeDefined();
    expect(dataLoadedFn).toBeCalledWith(data);

    expect(wrapper.html()).toContain('tabulator-field="name"');

    // wrapper.find('div').simulate('click');
    // console.log(wrapper.html());
  });
});
