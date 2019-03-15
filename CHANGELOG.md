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