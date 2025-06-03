import { expect, test as it } from 'playwright/test';
import path from 'path';

it.describe('Home Work #2 - Practice form', () => {
   it('fill all the text fileds for this form', async ({ page }) => {
      await page.goto('https://demoqa.com/automation-practice-form#google_vignette');

      //HEADER
      //TO BE VISIBLE #1 - page.locator
      const header = page.locator('h1.text-center');
      expect(header).toBeVisible();

      //TO BE VISIBLE #2 - getByRole + check
      expect(page.getByRole('heading', { name: 'Practice Form' })).toBeVisible();

      //TO BE VISIBLE #3 - getByRole then check
      const header2 = page.getByRole('heading', { name: 'Practice Form' });
      expect(header2).toBeVisible();

      //FIRST NAME
      const firstName = page.getByPlaceholder('First Name');
      expect(firstName).toBeVisible();
      expect(firstName).toBeEditable();
      expect(firstName).toBeEmpty();
      await firstName.pressSequentially('John', { delay: 50 });
      expect(firstName).not.toBeEmpty();
      expect(firstName).toHaveValue('John');
      //expect(firstName).toHaveText('John Doe') - does not work
      //expect(firstName).toContainText('John Doe') - does not work

      //LAST NAME
      const lastName = page.getByPlaceholder('Last Name');
      expect(lastName).toBeVisible();
      expect(lastName).toBeEditable();
      expect(lastName).toBeEmpty();
      expect(lastName).not.toBeEmpty();
      expect(lastName).toHaveValue('Doe');

      //EMAIL
      const email = page.getByPlaceholder('name@example.com');
      expect(email).toBeVisible();
      expect(email).toBeEditable();
      expect(email).toBeEmpty();
      await email.pressSequentially('test@gmail.com', { delay: 50 });
      expect(email).not.toBeEmpty();
      expect(email).toHaveValue('test@gmail.com');

      //GENDER
      //const gender = page.getByLabel('Male')
      //expect(gender).not.toBeChecked()
      //await gender.check()
      //expect(gender).toBeChecked()

      //await page.locator('input[name="gender"][type="radio"][id="gender-radio-1"][value="Male"]').setChecked(true)
      //await page.locator('input[name="gender"][type="radio"][id="gender-radio-1"][value="Male"]').check()

      //MALE
      const male = page.locator('label[for="gender-radio-1"]');

      expect(male).toBeVisible();
      expect(male).toBeEditable();
      expect(male).not.toBeChecked();
      await male.setChecked(true);
      expect(male).toBeChecked();

      //FEMALE
      const female = page.locator('label[for="gender-radio-2"]');
      expect(female).toBeVisible();
      expect(female).toBeEditable();
      expect(female).not.toBeChecked();
      await female.setChecked(true);
      expect(female).toBeChecked();
      expect(male).not.toBeChecked();

      //OTHER
      const other = page.locator('label[for="gender-radio-3"]');
      expect(other).toBeVisible();
      expect(other).toBeEditable();
      expect(other).not.toBeChecked();
      await other.setChecked(true);
      expect(other).toBeChecked();
      expect(male).not.toBeChecked();
      expect(female).not.toBeChecked();
      await lastName.pressSequentially('Doe', { delay: 50 });
      await male.setChecked(true);
      expect(male).toBeChecked();
      expect(other).not.toBeChecked();
      expect(female).not.toBeChecked();

      //MOBILE NUMBER
      const phoneNumber = page.getByPlaceholder('Mobile Number');
      expect(phoneNumber).toBeVisible();
      expect(phoneNumber).toBeEditable();
      expect(phoneNumber).toBeEmpty();
      await phoneNumber.pressSequentially('3369548631', { delay: 50 });
      expect(phoneNumber).not.toBeEmpty();
      expect(phoneNumber).toHaveValue('3369548631');

      //DOB
      const dob = page.locator('input[type="text"][id="dateOfBirthInput"]');
      await dob.click();

      //MONTH
      const month = page.locator('select.react-datepicker__month-select');
      await month.selectOption(['May']);

      //YEAR
      const year = page.locator('select.react-datepicker__year-select');
      await year.selectOption(['1996']);

      //DAY
      const day = page.locator('div[class="react-datepicker__day react-datepicker__day--017"]');
      await day.click();

      //SUBJECTS
      const subjects = page.locator('input#subjectsInput');
      expect(subjects).toBeVisible();
      expect(subjects).toBeEditable();
      expect(subjects).toBeEmpty();
      await subjects.pressSequentially('JS, Python, Java', { delay: 50 });
      expect(subjects).not.toBeEmpty();
      expect(subjects).toHaveValue('JS, Python, Java');

      //HOBBIES
      //SPORTS
      const sports = page.locator('label[for="hobbies-checkbox-1"]');
      const reading = page.locator('label[for="hobbies-checkbox-2"]');
      const music = page.locator('label[for="hobbies-checkbox-3"]');

      expect(sports).toBeVisible();
      expect(reading).toBeVisible();
      expect(music).toBeVisible();

      expect(sports).not.toBeChecked();
      expect(reading).not.toBeChecked();
      expect(music).not.toBeChecked();

      expect(sports).toBeEditable();
      expect(reading).toBeEditable();
      expect(music).toBeEditable();

      await sports.setChecked(true);
      expect(sports).toBeChecked();
      expect(reading).not.toBeChecked();
      expect(music).not.toBeChecked();
      await page.waitForTimeout(500);

      await sports.setChecked(false);
      expect(sports).not.toBeChecked();
      expect(reading).not.toBeChecked();
      expect(music).not.toBeChecked();
      await page.waitForTimeout(500);

      await reading.setChecked(true);
      expect(reading).toBeChecked();
      expect(sports).not.toBeChecked();
      expect(music).not.toBeChecked();
      await page.waitForTimeout(500);

      await reading.setChecked(false);
      expect(sports).not.toBeChecked();
      expect(reading).not.toBeChecked();
      expect(music).not.toBeChecked();
      await page.waitForTimeout(500);

      await music.setChecked(true);
      expect(music).toBeChecked();
      expect(sports).not.toBeChecked();
      expect(reading).not.toBeChecked();
      await page.waitForTimeout(500);

      await music.setChecked(false);
      expect(sports).not.toBeChecked();
      expect(reading).not.toBeChecked();
      expect(music).not.toBeChecked();
      await page.waitForTimeout(500);

      await sports.setChecked(true);
      await page.waitForTimeout(500);
      await reading.setChecked(true);
      await page.waitForTimeout(500);
      expect(sports).toBeChecked();
      expect(reading).toBeChecked();
      expect(music).not.toBeChecked();
      await page.waitForTimeout(500);
      await music.setChecked(true);
      await page.waitForTimeout(500);
      expect(music).toBeChecked();

      //PICTURE
      const fileChooserPromise = page.waitForEvent('filechooser');
      const picture = page.getByText('Select picture');
      await picture.click();
      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles(
         path.join(
            '/home/slon/Storage/4ter/stickers_pack/sand/01062025/sorted/feeling_actions_reactions',
            'da.jpg'
         )
      );

      //CURRENT ADDRESS
      const currentAddress = page.getByPlaceholder('Current Address');
      expect(currentAddress).toBeVisible();
      expect(currentAddress).toBeEditable();
      expect(currentAddress).toBeEmpty();
      await currentAddress.pressSequentially('5555 Carlton way', { delay: 50 });
      expect(currentAddress).not.toBeEmpty();
      expect(currentAddress).toHaveValue('5555 Carlton way');

      //STATE PICKER
      const state = page.locator('div#state');
      await state.click();
      await page.waitForTimeout(500);
      const choose = page.getByText('Uttar Pradesh');
      await choose.click();

      //CITY PICKER
      //const city = page.locator('input#react-select-4-input')
      //await city.click()
      //await page.waitForTimeout(500)

      const cityPicker = page.getByText('Select City');
      await cityPicker.click();
      const city = page.locator('div#react-select-4-option-0');
      await city.click();

      //SUBMIT
      const submitButton = page.getByRole('button', { name: /submit/i });
      await submitButton.click();

      //CONFIRMATION PAGE
      const confirmationTitle = page.getByText('Thanks for submitting the form');
      expect(confirmationTitle).toBeVisible();

      await page.pause();
   });
});
