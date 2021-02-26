## Development

NodeJS 8.15+

Tested with the following development environments:
- MacOS.
- Windows 10, Cygwin.

### Upgrade Tabulator

To upgrade tabulator:
- package.json: increase tabulator version
- run ```$ yarn``` to update
- run ```$ yarn test``` make sure all tests pass
- copy all css files from ```node_modules/tabulator-tables/dist/css/``` to ```src/css/```
- run ```$ yarn build```
- update CHANGELOG
- commit & push & npm publish
- github: create a release (tag)

### Unit tests

Sometimes when running unit tests locally, it fails to launch the puppeteer server (see: jest-puppeteer.config.js), you may want to kill node processes and run the tests again. Unit tests run fine in CI environment.