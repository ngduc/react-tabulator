## Development

### Upgrade Tabulator

To upgrade tabulator:
- package.json: increase tabulator version
- run ```$ yarn``` to update
- run ```$ yarn test``` make sure all tests pass
- copy all css files from ```node_modules/tabulator-tables/dist/css/``` to ```src/css/```
- update CHANGELOG
- commit & push & npm publish