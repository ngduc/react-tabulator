import * as React from 'react';
import { render } from 'react-dom';
import { parse, format } from 'date-fns';

const DEFAULT_DATE_INPUT_FORMAT = 'yyyy-MM-dd';

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
  render(
    <Editor cell={cell} onRendered={onRendered} success={success} cancel={cancel} editorParams={editorParams} />,
    container
  );
  return container;
}

// Create Date Editor
// const dateEditor = function(cell, onRendered, success, cancel) {
//   // cell - the cell component for the editable cell
//   // onRendered - function to call when the editor has been rendered
//   // success - function to call to pass the successfuly updated value to Tabulator
//   // cancel - function to call to abort the edit and return to a normal cell

//   // create and style input
//   const cellValue = moment(cell.getValue(), 'DD/MM/YYYY').format('YYYY-MM-DD'),
//     input = document.createElement('input');

//   input.setAttribute('type', 'date');

//   input.style.padding = '4px';
//   input.style.width = '100%';
//   input.style.boxSizing = 'border-box';

//   input.value = cellValue;

//   onRendered(function() {
//     input.focus();
//     input.style.height = '100%';
//   });

//   function onChange() {
//     if (input.value !== cellValue) {
//       success(moment(input.value, 'YYYY-MM-DD').format('DD/MM/YYYY'));
//     } else {
//       cancel();
//     }
//   }

//   // submit new value on blur or change
//   input.addEventListener('change', onChange);
//   input.addEventListener('blur', onChange);

//   // submit new value on enter
//   input.addEventListener('keydown', function(e) {
//     if (e.keyCode === 13) {
//       onChange();
//     }

//     if (e.keyCode === 27) {
//       cancel();
//     }
//   });

//   return input;
// };
