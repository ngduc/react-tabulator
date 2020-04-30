import * as React from 'react';
import { IProps } from './ConfigUtils';
interface IState {
    data: any[];
    columns: any[];
}
export default class extends React.Component<IProps, Partial<IState>> {
    state: IState;
    ref: any;
    htmlProps: any;
    mainId: string;
    table: any;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    componentWillReceiveProps(props: IProps): void;
    pickValidHTMLProps: () => void;
    render(): JSX.Element;
}
export {};
