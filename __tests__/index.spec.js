// const faker = require('faker');
// const person = {
//   name: faker.name.firstName() + ' ' + faker.name.lastName(),
//   email: faker.internet.email(),
//   phone: faker.phone.phoneNumber(),
//   message: faker.random.words()
// };

async function prop(element, property) {
  return await (await element.getProperty(property)).jsonValue();
}

beforeAll(async () => {
  page = await browser.newPage();
  await page.goto('http://localhost:3003/');
  await page.waitForSelector('.tabulator');
});

describe('React-Tabulator', () => {
  test('should render 2 tabulator tables', async () => {
    const tables = await page.$$('.tabulator');
    expect(tables).toHaveLength(2);
  });

  test('should render data', async () => {
    const ele = await page.$$('.tabulator-cell');
    const firstCellText = await prop(ele[0], 'innerText');
    expect(firstCellText).toContain('Oli Bob');
  });
});
