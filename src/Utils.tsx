import * as React from 'react';
import { createRoot } from "react-dom/client";

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
    return function customFormatter(
      cell: any,
      formatterParams: any,
      onRendered: (callback: () => void) => void
    ) {
      onRendered(() => {
        const cellEl = cell.getElement();
        const root = createRoot(cellEl);
        root.render(JSX);
      });
      
      return "<div class='formatterCell'></div>";
    };
  }
