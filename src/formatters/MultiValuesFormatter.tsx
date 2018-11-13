import * as React from 'react';
import { render } from 'react-dom';

const createCellEl = () => {
  const el = document.createElement('div');
  el.style.height = '100%';
  return el;
};

export default function(cell: any, formatterParams: any, onRendered: (fn: any) => void) {
  const value = (cell.getValue() || []).join(', ');

  const el = createCellEl();
  render(<span>{value}</span>, el);
  return el;
}
