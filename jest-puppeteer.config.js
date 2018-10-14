const execSync = require('child_process').execSync;

// detect if UI is up & running?
let isServerUp = false;
try {
  isServerUp =
    execSync('curl http://localhost:3003')
      .toString()
      .indexOf('Failed to connect') < 0;
} catch (e) {}

// if UI is not up => start UI
const server = !isServerUp
  ? {
      command: 'npm run start-test-ui',
      port: 3003
    }
  : {};

module.exports = {
  server,
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false'
  },
  browserContext: 'default'
};
