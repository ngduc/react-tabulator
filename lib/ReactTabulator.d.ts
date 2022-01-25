/// <reference types="react" />
import { Tabulator as TabulatorTypes } from './types/TabulatorTypes';
export interface ReactTabulatorOptions extends TabulatorTypes.Options {
    [k: string]: any;
}
export interface ColumnDefinition extends TabulatorTypes.ColumnDefinition {
}
export interface ReactTabulatorProps {
    columns?: ColumnDefinition[];
    options?: any;
    events?: any;
    onRef?: (ref: any) => void;
    [k: string]: any;
}
declare const ReactTabulator: (props: ReactTabulatorProps) => JSX.Element;
export default ReactTabulator;
