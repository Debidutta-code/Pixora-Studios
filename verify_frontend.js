const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  console.log('Navigating to Home...');
  await page.goto('http://localhost:3000');

  // Wait for some content to load
  await page.waitForSelector('h1', { timeout: 10000 });

  await page.screenshot({ path: 'home_top.png' });

  // Scroll down
  await page.evaluate(async () => {
    window.scrollTo(0, document.body.scrollHeight / 2);
  });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'home_middle.png' });

  console.log('Navigating to Services...');
  await page.goto('http://localhost:3000/services');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'services.png' });

  console.log('Navigating to Contact...');
  await page.goto('http://localhost:3000/contact');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'contact.png' });

  await browser.close();
})();
