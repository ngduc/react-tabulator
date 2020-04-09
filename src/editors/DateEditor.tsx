import * as React from 'react';
import { render } from 'react-dom';
// import { parse, format } from 'date-fns';
import { parse, format } from './DateEditorUtils';

const DEFAULT_DATE_INPUT_FORMAT = 'YYYY-MM-DD'; // date-fns 'yyyy-MM-dd';

const inputCss = {
  width: '100%',
  height: '100%',
  fontSize: '1em',
  fontFamily: 'inherit'
};

interface IProps {
  cell: any;
  onRendered: (fn: any) => void;
  success: (value: any) => void;
  cancel: () => void;
  editorParams?: any;
}

class Editor extends React.Component<IProps> {
  state = { value: '' };
  ref: any = null;
  // date-fns format 'MM/dd/yyyy'
  format = this.props.editorParams.format || 'MM/DD/YYYY'; // TODO: detect from user locale & set default.

  componentDidMount() {
    this.props.onRendered(() => {
      const value = this.props.cell.getValue();
      this.setState({ value });
      this.ref.focus();
    });
  }

  setValueOnSuccess = (value = this.state.value) => {
    const { success } = this.props;
    if (!value) {
      // user deleted value in the cell => set to ''
      // const result = format(new Date(), this.format);
      success('');
      return
    }
    let result = value;
    try {
      if (result.indexOf('-') > 0) {
        // value is "yyyy-MM-dd" => parse it
        const valueDate = parse(value, 'YYYY-MM-DD');
        result = format(valueDate, this.format);
      }
    } catch(err) {
      console.error('ERROR', err);
      result = format(new Date(), DEFAULT_DATE_INPUT_FORMAT);
    }
    success(result);
  };

  onChange = (ev: any) => {
    const value = ev.target.value;
    this.setState({ value });
  };

  onKeyPress = (ev: any) => {
    const { cancel } = this.props;
    if (ev.keyCode === 13) {
      // Enter pressed. If value is '' => set to today:
      const today = format(new Date(), DEFAULT_DATE_INPUT_FORMAT);
      const value = this.state.value || today;
      this.setValueOnSuccess(value);
    } else if (ev.keyCode === 27) {
      cancel();
    }
  };

  onBlur = () => {
    this.setValueOnSuccess();
  };

  render() {
    const { cell } = this.props;
    const valueDt = parse(cell.getValue(), this.format);
    // console.log('this.format', this.format);
    // console.log('cell.getValue()', cell.getValue());
    // console.log('valueDt', valueDt);

    let value = format(new Date(), DEFAULT_DATE_INPUT_FORMAT)
    try {
      value = format(valueDt, DEFAULT_DATE_INPUT_FORMAT);
    } catch(err) {}

    return (
      <input
        type="date"
        ref={r => (this.ref = r)}
        defaultValue={value}
        // value={value}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onKeyUp={this.onKeyPress}
        style={inputCss}
      />
    );
  }
}

export default function(
  cell: any,
  onRendered: (fn: any) => void,
  success: (value: any) => void,
  cancel: () => void,
  editorParams?: any
) {
  const container = document.createElement('div');
  container.style.height = '100%';
  render(
    <Editor cell={cell} onRendered={onRendered} success={success} cancel={cancel} editorParams={editorParams} />,
    container
  );
  return container;
}
