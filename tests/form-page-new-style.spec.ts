import { chromium, expect, test as it } from 'playwright/test';

it.describe('form page test suite', () => {
   it('fill all the text fileds for this form', async ({page}) => {
      await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
      await page.locator('input#name').fill('IURII LOPATENKO')
      await page.locator('[id="inputEmail4"][name="email"][type="email"]').pressSequentially('yalopatenko@gmail.com', {delay:100})
      await page.locator('[id="inputPassword4"][name="password"][type="password"]').pressSequentially('Thi$_i$', {delay:100})
      await page.locator('[id="company"][name="company"][type="text"][placeholder="Company"]').pressSequentially('THE COMPANY LLC', {delay:100})
      await page.locator('[id="websitename"][name="website"][type="text"][placeholder="Website"]').pressSequentially('www.trata.com', {delay:100})
      await page.selectOption('select[name="country"]', {label: 'United States'})
      await page.locator('[id="inputCity"][name="city"][type="text"][placeholder="City"]').pressSequentially('Los Angeles', {delay:100})
      await page.locator('[id="inputAddress1"][name="address_line1"][type="text"][placeholder="Address 1"]').pressSequentially('1254 Washington street 5698', {delay:100})
      await page.getByPlaceholder('Address 2').fill('tratat tatat')
      await page.locator('[id="inputState"][placeholder="State"]').pressSequentially('California', {delay:100})
      await page.getByRole('textbox', {name: "Zip Code"}).fill('90210')
      await page.getByRole('button', {name: "Submit"}).click()
      expect(page.locator('h2:has-text("Input form validations")')).toBeVisible()
      expect(page.locator('p:has-text("Thanks for contacting us, we will get back to you shortly.")')).toBeVisible()
      await page.pause()
   });
});
