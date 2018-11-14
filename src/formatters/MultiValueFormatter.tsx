import * as React from 'react';
import { render } from 'react-dom';

const createCellEl = () => {
  const el = document.createElement('div');
  el.style.height = '100%';
  return el;
};

// example: { title: 'Pets', field: 'pets', formatter: MultiValueFormatter, formatterParams: { style: 'PILL' } }
// default style: comma separated plain text
// other styles: PILL
export default function(cell: any, formatterParams: any, onRendered: (fn: any) => void) {
  const style = formatterParams.style || ''; // comma separated plain text

  const arr = cell.getValue() || [];
  let content = arr.join(', ');

  if (style === 'PILL') {
    content = (
      <React.Fragment>
        {arr.map((value: string) => (
          <span>{value}</span>
        ))}
      </React.Fragment>
    );
  }

  const el = createCellEl();
  el.className = 'multi-value-formatter-content';
  el.title = arr.join(', ');
  render(content, el);
  return el;
}
