import { expect, test as it } from 'playwright/test';

it.describe('', () => {});

it('Navigate to the Data Picker Page', async ({ page }) => {});

it('test', async ({ page }) => {});

import { test as it } from 'playwright/test';

it.describe('Main Test suite', () => {
   it.describe('Test Suite #1', () => {});
   it.describe('Test Suite #2', () => {});
   it.describe('Test Suite #3', () => {});
   it.describe('Test Suite #4', () => {});
});

it('test', () => {});

await this.page.waitForTimeout(100);

await page.waitForTimeout(100);

///OLD JS
it.describe('qwe', () => {});
it('qwe', () => {});

//HEADER CHECK
const header = page.getByRole('heading', { name: 'Practice Form' });
expect(header).toBeVisible();

//INPUT FIELD CHECKS
const firstName = page.getByPlaceholder('First Name');
expect(firstName).toBeVisible();
expect(firstName).toBeEditable();
expect(firstName).toBeEmpty();
await firstName.pressSequentially('John', { delay: 50 });
expect(firstName).not.toBeEmpty();
expect(firstName).toHaveValue('John');

//Get a link by text content and click on it
await this.page.getByRole('link', { name: `${day.toString()}`, exact: true }).click();

//Get selectrion element and select an option
await this.page.locator(this.monthSelectionLocator).selectOption(month);
await page.selectOption('select[name="country"]', { label: 'United States' });

//MULTIPLE OPTIONS
const multipleOptions = page.locator('select[multiple="multiple"][name="multipleselect[]"]');
await multipleOptions.selectOption(['Selection Item 1', 'Selection Item 3']);

//Pick an elemnt from list
const state = page.locator('div#state');
await state.click();
await page.waitForTimeout(500);
const choose = page.getByText('Uttar Pradesh');
await choose.click();

//Get a current value from input field
await this.page.locator(this.toCalendarLocator).inputValue();

//Typing (Writing)
await page.locator('LOCATOR').clear();
await page.locator('LOCATOR').fill('THISS IS MY TEXT');
await page.locator('LOCATOR').pressSequentially('THIS IS MY TEXT', { delay: 100 });
await page.getByPlaceholder('PLACEHOLDER TEXT').fill('THIS IS MY TEXT');

//FILES
const fileChooserPromise = page.waitForEvent('filechooser');
await page.locator('input[name="filename"][type="file"]').click();
const fileChooser = await fileChooserPromise;
await fileChooser.setFiles(
   path.join(
      '/home/slon/Storage/4ter/stickers_pack/sand/01062025/sorted/feeling_actions_reactions',
      'da.jpg'
   )
);

//CHECKBOXES
const checkbox1 = page.locator('input[name="checkboxes[]"][type="checkbox"][value="cb1"]');
expect(checkbox1).toBeVisible();
expect(checkbox1).toBeEditable();
expect(checkbox1).not.toBeChecked();
await checkbox1.check();
expect(checkbox1).toBeChecked();

await firstTodo.getByRole('checkbox').uncheck();

//RADIO
const radio2 = page.locator('input[name="radioval"][type="radio"][value="rd2"]');
expect(radio2).toBeVisible();
expect(radio2).toBeEditable();
await radio2.setChecked(false);
expect(radio2).not.toBeChecked();
await radio2.setChecked(true);
expect(radio2).toBeChecked();

//SUBMIT
await page.getByRole('button', { name: 'Submit' }).click();

//Nth ELEMENT
const secondTodo = page.getByTestId('todo-item').nth(1);

//ENTER TEXT AND CLICK ENTER
await secondTodo.getByRole('textbox', { name: 'Edit' }).fill('buy some sausages');
await secondTodo.getByRole('textbox', { name: 'Edit' }).press('Enter');

await todoItems.nth(1).dblclick();
await expect(todoItem).toHaveCount(2);
await expect(todoCount).toContainText('1');
await expect(todoItems).toHaveText(TODO_ITEMS);
