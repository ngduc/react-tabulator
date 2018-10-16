# react-tabulator

[![Build Status](https://travis-ci.org/ngduc/react-tabulator.svg?branch=master)](https://travis-ci.org/ngduc/react-tabulator)

React Tabulator is based on [tabulator](https://github.com/olifolkerd/tabulator) - an advanced table library with many useful features.

- Live Demo: [Codesandbox](https://codesandbox.io/s/oxmj02v696)

[![Screenshot](screenshot.png)](https://codesandbox.io/s/oxmj02v696)

### 🌟 Features

Tabulator's features plus:
- React 16.5.x
  - For React 15.x - use [this branch](https://github.com/ngduc/react-tabulator/tree/use-react-15)
- Typescript 3.x
- Tslint
- Jest-puppeteer for testing

### 📦 Usage

```JS
$ npm install react-tabulator

import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator';

<ReactTabulator data={data} />
```

- Code Example: [/src/ReactTabulatorExample.tsx](/src/ReactTabulatorExample.tsx)

```
For React 15.x, install it using this branch:

$ npm install git://github.com/ngduc/react-tabulator.git#use-react-15 --save
```

### 🔧 Commands

Require: `NodeJS v8.12.0 +` and `yarn` (optional)

```
$ npm run dev      Launch DEV mode
$ npm run build    Make a build

$ yarn test        Run tests using jest-puppeteer (with headless Chrome)
```

### 📖 Documentation

[Change Log](/CHANGELOG.md)

### 🙌 Thanks

All contributions are welcome!

[Tabulator](https://github.com/olifolkerd/tabulator)