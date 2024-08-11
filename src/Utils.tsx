import * as React from 'react';
import { render } from 'react-dom';
import {createRoot} from "react-dom/client";

export function clone(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

export function isSameArray(a: any[], b: any[]) {
  let i = a && a.length ? a.length : 0;
  if (i !== (b && b.length ? b.length : 0)) {
    return false;
  }
  while (i--) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

// source: https://stackoverflow.com/questions/4816099/chrome-sendrequest-error-typeerror-converting-circular-structure-to-json
function stringifyCensor(censor: any) {
  let i = 0;
  return function (key: string, value: any) {
    if (i !== 0 && typeof censor === 'object' && typeof value == 'object' && censor == value) {
      return '[Circular]';
    }
    if (i >= 29) {
      // seems to be a harded maximum of 30 serialized objects?
      return '[Unknown]';
    }
    ++i; // so we know we aren't using the original object anymore
    return value;
  };
}

export function isSameObject(a: any, b: any) {
  return JSON.stringify(a, stringifyCensor(a)) === JSON.stringify(b, stringifyCensor(b));
}

export function reactFormatter(JSX: any) {
  return function customFormatter(cell: any, formatterParams: any, onRendered: (callback: () => void) => void) {
    // cell - the cell component
    // formatterParams - parameters set for the column
    // onRendered - function to call when the formatter has been rendered
    const renderFn = () => {
      const cellEl = cell.getElement();
      if (cellEl) {
        const formatterCell = cellEl.querySelector('.formatterCell');
        if (formatterCell) {
          const CompWithMoreProps = React.cloneElement(JSX, { cell });


          // Create a root for the formatterCell if it doesn't already have one
          let root = formatterCell._reactRoot;
          if (!root) {
            root = createRoot(formatterCell);
            formatterCell._reactRoot = root; // Store the root for potential future re-renders
          }

          // Render the component
          root.render(CompWithMoreProps);
        }
      }
    };

    onRendered(renderFn); // initial render only.

    setTimeout(() => {
      renderFn(); // render every time cell value changed.
    }, 0);
    return '<div class="formatterCell"></div>';
  };
}
