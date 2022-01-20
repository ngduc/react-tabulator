import * as React from 'react';
import { IProps } from './ConfigUtils';
import { Tabulator as TabulatorTypes } from './types/TabulatorTypes';
export interface ReactTabulatorOptions extends TabulatorTypes.Options {
    [k: string]: any;
}
export interface ColumnDefinition extends TabulatorTypes.ColumnDefinition {
}
interface IState {
    data: any[];
    columns: any[];
    options?: ReactTabulatorOptions;
}
export default class extends React.Component<IProps, Partial<IState>> {
    state: IState;
    ref: React.ReactInstance;
    htmlProps: any;
    mainId: string;
    table: any;
    initTabulator(): Promise<void>;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    static getDerivedStateFromProps(props: any, state: any): any;
    componentDidUpdate(prevProps: IProps, prevState: IState): void;
    pickValidHTMLProps: () => void;
    render(): JSX.Element;
}
export {};
