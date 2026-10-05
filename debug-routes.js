const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const urls = [
    'https://www.testmuai.com/selenium-playground/input-form-submit/',
    'https://www.testmuai.com/selenium-playground/input-form-demo/',
    'https://www.testmuai.com/selenium-playground/input-form-submit-demo/',
    'https://www.testmuai.com/selenium-playground/input-form/',
    'https://www.testmuai.com/selenium-playground/input-form-demo',
    'https://www.testmuai.com/selenium-playground/input-form-submit-demo',
    'https://www.testmuai.com/selenium-playground/form-submit/',
  ];
  for (const url of urls) {
    try {
      const resp = await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 15000,
      });
      const title = await page.title();
      console.log(url, '=>', resp && resp.status(), title, page.url());
    } catch (e) {
      console.log(url, '=> ERROR', e.message.split('\n')[0]);
    }
  }
  await browser.close();
})();
