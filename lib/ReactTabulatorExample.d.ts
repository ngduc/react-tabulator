import * as React from 'react';
interface IProps {
    data: any[];
}
export default class extends React.Component<IProps> {
    state: any;
    ref: any;
    rowClick: (e: any, row: any) => void;
    setData: () => void;
    clearData: () => void;
    renderAjaxScrollExample: () => JSX.Element;
    render(): JSX.Element;
}
export {};
