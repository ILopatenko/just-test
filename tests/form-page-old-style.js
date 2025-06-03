import { chromium, test as it } from 'playwright/test';

it.describe('form page test suite', () => {
   it('fill all the text fileds for this form', async () => {
      const browser = await chromium.launch({headless: false});
      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
   });
});
