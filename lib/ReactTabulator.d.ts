/// <reference types="react" />
import { Tabulator as TabulatorTypes } from './types/TabulatorTypes';
export interface ReactTabulatorOptions extends TabulatorTypes.Options {
    [k: string]: any;
}
export interface ColumnDefinition extends TabulatorTypes.ColumnDefinition {
}
declare const ReactTabulator: (props: any) => JSX.Element;
export default ReactTabulator;
