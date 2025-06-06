import { Page, expect } from '@playwright/test';

export class HomePage {
   page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   async goToWebPage(path: string) {
      await this.page.goto('selenium-playground/' + path);
   }

   //GET ELEMENT BY LOCATOR

   async getElementByLocator(locator: string) {
      return this.page.locator(locator);
   }

   //VERIFY

   async verifyHeaderH1(text: string) {
      const header = this.page.locator('h1');
      expect(header).toBeVisible();
      expect(header).toContainText(text);
   }

   async clickButtonManyTimes(locator: string, quantity: number) {
      const button = this.page.locator(locator);
      for (let i = 0; i < quantity; i++) {
         button.click();
         await this.page.waitForTimeout(300);
      }
   }

   months = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
   };
}
