# react-tabulator

[![Build Status](https://travis-ci.org/ngduc/react-tabulator.svg?branch=master)](https://travis-ci.org/ngduc/react-tabulator)

React Tabulator is based on [tabulator](https://github.com/olifolkerd/tabulator) - an advanced table library with many useful features.

- Live Demo: [Codesandbox](https://codesandbox.io/s/0mwpy612xw?module=/src/components/Home.js)

[<img src="docs/react-tabulator-demo.gif" height="280" />](https://codesandbox.io/s/0mwpy612xw?module=/src/components/Home.js)

### 🌟 Features

Tabulator's features:
```
  Filters      Sorting      Formatting    Grouping      Ajax      Editing    Virtualization
  Pagination   Themes       A11y          I18n          Layouts   Frozen Cols/Rows
  Key Binding  Responsive   Persisting    History       Calc      Validation
  Clipboard    Tree Layout  Nested Tables
```

#### Plus more features:
- React 16.5.x
  - For React 15.x - import `React15Tabulator`
- Typescript 3.x
- Tslint
- Jest-puppeteer for testing
- React Cell Editors: DateEditor, MultiSelectEditor, etc.
- React Cell Formatters: MultiValueFormatter, etc.
- React Filters (TBD)

### 📦 Usage

```
$ npm install react-tabulator

import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'; // for React 15.x, use import { React15Tabulator }

    <ReactTabulator columns={columns} data={data} options={} />

"options" will be passed directly to Tabulator's options.
```

- Code Example: [/src/ReactTabulatorExample.tsx](/src/ReactTabulatorExample.tsx)
- Code Example (React 15.x): [Codesandbox](https://codesandbox.io/s/0mwpy612xw?module=/src/components/Home.js)

### 🔧 Commands

Require: `NodeJS v8.12.0 +` and `yarn` (optional)

```
$ npm run dev      Launch DEV mode (with hot reload)
$ npm run build    Make a build

$ npm run test     Run tests using jest-puppeteer (with headless Chrome)
```

Development - see [docs/development.md](docs/development.md)

### 📖 Documentation

- [Change Log](/CHANGELOG.md)
- [Todo / Roadmap](/TODO.md)

### 🙌 Thanks

All contributions are welcome!

- Main library [olifolkerd/tabulator](https://github.com/olifolkerd/tabulator) (Thanks olifolkerd for this great library!)

While you're here, also check out
- [ui-form-field](https://github.com/ngduc/ui-form-field) - an easy way to build Forms with React.
- [VSCode - TODO.md Kanban Board](https://marketplace.visualstudio.com/items?itemName=coddx.coddx-alpha)