import * as React from 'react';
import { render } from 'react-dom';
import { parse, format } from 'date-fns';

const DEFAULT_DATE_INPUT_FORMAT = 'yyyy-MM-dd';

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
  format = this.props.editorParams.format || 'MM/dd/yyyy'; // TODO: detect from user locale & set default.

  componentDidMount() {
    this.props.onRendered(() => {
      const value = this.props.cell.getValue();
      this.setState({ value });
      this.ref.focus();
    });
  }

  setValueOnSuccess = (value = this.state.value) => {
    const { success } = this.props;
    let result = value;
    if (result.indexOf('-') > 0) {
      // value is "yyyy-MM-dd" => parse it
      result = format(value, this.format);
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
      this.setValueOnSuccess();
    } else if (ev.keyCode === 27) {
      cancel();
    }
  };

  onBlur = () => {
    this.setValueOnSuccess();
  };

  render() {
    const { cell } = this.props;
    const valueDt = parse(cell.getValue(), this.format, new Date(), { awareOfUnicodeTokens: true });
    const value = format(valueDt, DEFAULT_DATE_INPUT_FORMAT);

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
