const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1400, height: 1000 },
  });
  const urls = [
    'https://www.testmuai.com/selenium-playground/simple-form-demo/',
    'https://www.testmuai.com/selenium-playground/drag-drop-range-sliders-demo/',
    'https://www.testmuai.com/selenium-playground/input-form-submit/',
  ];
  for (const url of urls) {
    console.log('\n=== URL:', url, '===');
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    console.log('title:', await page.title());
    console.log('url after goto:', page.url());
    const bodyText = await page.locator('body').innerText();
    console.log('body text sample:', bodyText.slice(0, 1200));
    const html = await page.content();
    console.log('html snippet:', html.slice(0, 2200));
  }
  await browser.close();
})();
