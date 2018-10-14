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
  test('should render all tabulator tables', async () => {
    const tables = await page.$$('.tabulator');
    expect(tables).toHaveLength(2);
  });

  test('1st table - should render columns & data', async () => {
    const cols = await page.$$('.tabulator:nth-of-type(1) .tabulator-col');
    expect(cols).toHaveLength(2);
    expect(await prop(cols[0], 'innerText')).toContain('ID');
    expect(await prop(cols[1], 'innerText')).toContain('Name');

    const rows = await page.$$('.tabulator:nth-of-type(1) .tabulator-row');
    expect(rows).toHaveLength(2);
    expect(await prop(rows[0], 'innerText')).toContain('John');
    expect(await prop(rows[1], 'innerText')).toContain('Jane');
  });

  test('2nd table - should render columns & data', async () => {
    const cols = await page.$$('.tabulator:nth-of-type(2) .tabulator-col');
    expect(cols).toHaveLength(6);

    const rows = await page.$$('.tabulator:nth-of-type(2) .tabulator-row');
    expect(rows).toHaveLength(7);
  });
});
