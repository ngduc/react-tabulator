## [0.11.7] - 2020-04-08

### Changed
- BREAKING: removed date-fns dependency. DateEditor now uses taylorhakes/fecha code: Date format string changed to 'MM/DD/YYYY'.

- merged PRs #141 #168
- upgraded tabulator to 4.6.1
- use TODO.md - https://marketplace.visualstudio.com/items?itemName=coddx.coddx-alpha
- package.json - resolve packages to avoid security risks.
- fixed: setColumns when columns prop changed #158

## [0.10.3] - 2019-10-16

### Changed
- merged PR #130: clone props.data
- upgraded tooling modules

## [0.10.2] - 2019-10-05

### Changed
- upgraded tabulator to 4.4.3
- fixed: critical bug: componentDidUpdate keeps re-rendering table (issue [#82](https://github.com/ngduc/react-tabulator/issues/82))

## [0.9.6] - 2019-09-06

### Added
- example for Infinite Scrolling with Ajax Requests

### Changed
- upgraded tabulator to 4.4.1
- upgraded dependencies
- merged PR #75 - thanks @maco222
- merged PR #88 - generate type files - thanks @mstlaurent-paradigm

## [0.9.1] - 2019-03-15

### Added
- reactFormatter to support JSX for Tabulator's formatter (see: ReactTabulatorExample.tsx)

### Changed
- upgraded tabulator to 4.2.3
- pinned some 3rd-party modules to fix security warnings

## [0.8.4] - 2019-03-07

### Changed
- upgraded tabulator to 4.2.2
- fix: added rowFormatter, placeholder as props

## [0.8.3] - 2019-02-17

### Changed
- upgraded tabulator to 4.2.1

## [0.7.11] - 2018-11-26

### Changed
- upgraded tabulator to 4.1.3
- pin event-stream to 3.3.4 to fix [security issue](https://github.com/dominictarr/event-stream/issues/116)

## [0.7.9] - 2018-11-20

### Added
- MultiValueFormatter
- MultiSelectEditor
### Changed
- BREAKING: moved "css" directory out of "lib" - usage: import "react-tabulator/styles.css"
- BREAKING: separated required styles.css and tabulator theme css (import them separately)
- upgraded tabulator to 4.1.2
- fix: upgraded default styles.css to 4.1.2

## [0.6.6] - 2018-11-05

### Added
- tabulator-tables 4.1.1 integration
- DateEditor
- example: autocomplete editor with header filter
- Utils
### Changed
- updated dev dependencies

## [0.5.10] - 2018-10-14

### Added
- `__tests__/ui` - UI for tests.
- `src/css` - css files for themes.
- `use-react-15` branch for React 15.x and `src/React15Tabulator.tsx`
### Changed
- use getDerivedStateFromProps so we can set grid data from state. (updated Examples)
- switch to jest-puppeteer because enzyme couldn't render tabulator data. (got empty grid)

## [0.4.5] - 2018-10-11

### Added
- ConfigUtils.tsx to handle props and options.
- all Tabulator options can be set as React Tabulator props.
- example of editable table.
- "yarn test" using Jest, Enzyme.
- .travis.yml

## [0.3.4] - 2018-10-10

### Added
- first working version.