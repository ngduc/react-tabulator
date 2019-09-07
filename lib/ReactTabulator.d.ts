import * as React from 'react';
import { IProps } from './ConfigUtils';
interface IState {
    data: any[];
}
export default class extends React.Component<IProps, Partial<IState>> {
    state: IState;
    ref: any;
    htmlProps: any;
    mainId: string;
    table: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    static getDerivedStateFromProps(props: any, state: any): any;
    componentDidUpdate(): void;
    pickValidHTMLProps: () => void;
    render(): JSX.Element;
}
export {};
