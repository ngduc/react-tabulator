# FAQ

**How to force render a table?**
- ReactTabulator automatically rerenders when data, columns or options changed.
- In case you want to force render it, you can set the component "key" to something else like:

```
const [tableKey, setTableKey] = React.useState(`${Math.random()}`)

on change: setTableKey(`${Math.random()}`)

<ReactTabulator key={tableKey} ref={tableRef} columns={columns} data={data}
```

**How to set Tabulator's options?**
- ReactTabulator "options" prop will be passed directly to Tabulator's options when initializing the table.

**How to call Tabulator's functions?**
- Use "ref.table" to access to all tabulator functions. [Example](https://github.com/ngduc/react-tabulator/blob/master/src/ReactTabulatorExample.tsx#L83).

# Live Examples

*React-tabulator version may not be the latest in these examples.*

- Example - Live Demo: [Codesandbox](https://codesandbox.io/s/0mwpy612xw?module=/src/components/Home.js)
- Example - Source code: [/src/ReactTabulatorExample.tsx](/src/ReactTabulatorExample.tsx)

Themes:
- Try out different Themes: [Link](https://codesandbox.io/s/react-tabulator-themes-w5zhq?file=/src/components/Home.js)

Columns:
- Dynamically set columns - [Link](https://codesandbox.io/s/react-tabulator-examples-6ldg3?file=/src/components/Home.js)

Rows:
- Row selection - [Link](https://codesandbox.io/s/react-tabulator-row-selection-v9d4x?file=/src/components/Home.js)

Data:
- Dropdown to filter table data - [Link](https://codesandbox.io/s/react-tabulator-examples-vs7vq?file=/src/components/Home.js)
- Performance - render a lot of data with faker - [Link](https://codesandbox.io/s/react-tabulator-performance-demo-forked-3rqp2)

Edit:
- Edit & get edited data - [Link](https://codesandbox.io/s/react-tabulator-examples-forked-ym0fs?file=/src/components/Home.js)

Support React v15.x (legacy, stopped support from 2021-01)
- With React 15.x - [Link](https://codesandbox.io/s/react-tabulator-with-react-15-tppef?file=/src/components/Home.js)

# Show cases

*If you are using ReactTabulator in your project, please feel free to open a PR or contact me to add it here:*

https://github.com/moshtaghi/nydax
<img src="https://github.com/moshtaghi/nydax/raw/master/images/NYDAX5.png">

<hr />

https://github.com/preftech/dash-tabulator
<img src="https://aws1.discourse-cdn.com/business7/uploads/plot/original/2X/8/8cbc9b8a2038d66272b5af189b7506738d11e7b5.gif">

<hr />

https://github.com/chatatechnologies/react-autoql
<img src="https://github.com/chatatechnologies/react-autoql/raw/master/public/dashboard.png">

<hr />

https://github.com/dotadraft/dotadraft_ui
<img src="https://raw.githubusercontent.com/dotadraft/dotadraft_ui/master/images/screenshot.png">

<hr />

Stock Portfolio

<img src="https://i.ibb.co/zJCCVG7/image.png">

<hr />

## Other Projects

- https://github.com/Back2bikes/attendance