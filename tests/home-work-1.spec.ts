import { expect, test as it } from 'playwright/test';
import path from 'path';

it.describe('form page test suite', () => {
   it('fill all the text fileds for this form', async ({page}) => {
      await page.goto('https://testpages.eviltester.com/styled/basic-html-form-test.html');
      await page.locator('input[name="username"][type="text"]').pressSequentially('ThisIsMyUsername', {delay:50})
      await page.locator('input[name="password"][type="password"]').pressSequentially('ThisIsMyPassword', {delay:50})
      
      await page.locator('textarea[name="comments"]').clear()
      //await page.locator('textarea[name="comments"]').press('Control+A')
      //await page.locator('textarea[name="comments"]').press('Delete')
      await page.locator('textarea[name="comments"]').pressSequentially('This is my comment', {delay:50})
      
      
      const fileChooserPromise = page.waitForEvent('filechooser');
      await page.locator('input[name="filename"][type="file"]').click()
      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles(path.join('/home/slon/Storage/4ter/stickers_pack/sand/01062025/sorted/feeling_actions_reactions', 'da.jpg'));
      
      //CHECKBOX #1
      const checkbox1 = page.locator('input[name="checkboxes[]"][type="checkbox"][value="cb1"]')
      expect(checkbox1).toBeVisible()
      expect(checkbox1).toBeEditable()
      expect(checkbox1).not.toBeChecked()
      await checkbox1.check()
      expect(checkbox1).toBeChecked()
      //expect(page.locator('input[name="checkboxes[]"][type="checkbox"][value="cb1"]')).toBeChecked()
      //await page.locator('input[name="checkboxes[]"][type="checkbox"][value="cb1"]').check()

      //CHECKBOX #3
      const checkbox3 = page.locator('input[name="checkboxes[]"][type="checkbox"][value="cb3"]')
      expect(checkbox3).toBeVisible()
      expect(checkbox3).toBeEditable()
      expect(checkbox1).toBeChecked()
      await checkbox3.uncheck()
      expect(checkbox3).not.toBeChecked()
      
      

      //RADIO #1
      const radio1 = page.locator('input[name="radioval"][type="radio"][value="rd1"]')
      expect(radio1).toBeVisible()
      expect(radio1).toBeEditable()
      expect(radio1).not.toBeChecked()
      await radio1.setChecked(true)
      expect(radio1).toBeChecked()


      //RADIO #2
      const radio2 = page.locator('input[name="radioval"][type="radio"][value="rd2"]')
      expect(radio2).toBeVisible()
      expect(radio2).toBeEditable()
      await radio2.setChecked(false)
      expect(radio2).not.toBeChecked()

      //MULTIPLE OPTIONS
      const multipleOptions = page.locator('select[multiple="multiple"][name="multipleselect[]"]')
      await multipleOptions.selectOption(['Selection Item 1', 'Selection Item 3']);



      //DROPDOWN
      const dropdown = page.locator('select[name="dropdown"]')
      await dropdown.selectOption({label: 'Drop Down Item 5'})

      //SUBMIT
      const submitButton = page.locator('input[name="submitbutton"][type="submit"][value="submit"]')
      await submitButton.click()


      //CONFIRMATION PAGE
      await expect(page.getByRole('heading', { name: 'Processed Form Details' })).toBeVisible()




      await page.pause()
   });
});
