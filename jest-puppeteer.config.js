// jest-puppeteer.config.js
module.exports = {
  server: {
    command: 'npm run start',
    port: 3003
  },
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false'
  },
  browserContext: 'default'
};
