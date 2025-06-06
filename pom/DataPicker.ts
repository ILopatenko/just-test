import { HomePage } from './HomePage';
import { MainHelper } from '../helper/MainHelper';

export class DataPicker extends HomePage {
   constructor(page: any) {
      super(page);
   }

   helper = new MainHelper();

   get pageEndPoint() {
      return 'jquery-date-picker-demo';
   }

   get headerText() {
      return 'JQuery Date Picker Demo';
   }

   get fromCalendarLocator() {
      return 'input#from';
   }

   get yearInCalendarFromLocator() {
      return 'span.ui-datepicker-year';
   }

   get toCalendarLocator() {
      return 'input#to';
   }

   get previousMonthButtonLocator() {
      return 'a[data-handler="prev"]';
   }

   get nextMonthButtonLocator() {
      return 'a[data-handler="next"]';
   }

   get monthSelectionLocator() {
      return 'select.ui-datepicker-month';
   }

   async loadTestPage() {
      await this.goToWebPage(this.pageEndPoint);
   }

   async openFromCalendar() {
      await this.clickButtonManyTimes(this.fromCalendarLocator, 1);
   }

   async openToCalendar() {
      await this.clickButtonManyTimes(this.toCalendarLocator, 1);
   }

   async getCurrentYearInCalendar() {
      this.openFromCalendar();
      return await this.page.locator(this.yearInCalendarFromLocator).textContent();
   }

   async getChoosenDateInFromCalendar() {
      return await this.page.locator(this.fromCalendarLocator).inputValue();
   }

   async getChoosenDateInToCalendar() {
      return await this.page.locator(this.toCalendarLocator).inputValue();
   }

   async openMonthSelection() {
      await this.clickButtonManyTimes(this.monthSelectionLocator, 1);
   }

   async clickPreviousMonthsFewTimes(quantity: number) {
      await this.clickButtonManyTimes(this.previousMonthButtonLocator, quantity);
   }

   async clickNextMonthsFewTimes(quantity: number) {
      await this.clickButtonManyTimes(this.nextMonthButtonLocator, quantity);
   }

   async selectMonth(month: string) {
      await this.openMonthSelection();
      await this.page.locator(this.monthSelectionLocator).selectOption(month);
   }

   async selectDay(day: number) {
      //await this.page.locator(`a[class="ui-state-default"]:has-text("${day.toString()}")`).click();
      await this.page.getByRole('link', { name: `${day.toString()}`, exact: true }).click();
   }

   async changeYearInCalendar(calendarLocator: string, changeDirection: string, quantity: number) {
      //await this.clickButtonManyTimes(calendarLocator, 1);
      await this.page.waitForTimeout(100);
      const month = changeDirection === 'increase' ? 'Dec' : 'Jan';
      const action = async () => {
         changeDirection === 'increase'
            ? this.clickNextMonthsFewTimes(1)
            : this.clickPreviousMonthsFewTimes(1);
      };
      for (let i = 0; i < quantity; i++) {
         await this.selectMonth(month);
         await this.page.waitForTimeout(100);
         await action();
         await this.page.waitForTimeout(100);
      }
   }

   async fromCalendarIncreaseYear(years: number) {
      await this.changeYearInCalendar(this.fromCalendarLocator, 'increase', years);
   }

   async fromCalendarDecreaseYear(years: number) {
      await this.changeYearInCalendar(this.fromCalendarLocator, 'decrease', years);
   }

   async toCalendarIncreaseYear(years: number) {
      await this.changeYearInCalendar(this.toCalendarLocator, 'increase', years);
   }

   async openToCalendarDecreaseYear(years: number) {
      await this.changeYearInCalendar(this.toCalendarLocator, 'decrease', years);
   }

   getRandomDatesForPage(minYear = 1995, maxYear = 2034) {
      const pastYear = this.helper.genRandomNumberBetween(minYear, 2024);
      const futureYear = this.helper.genRandomNumberBetween(2026, maxYear);

      const pastMonthIndex = this.helper.genRandomNumberBetween(0, 11);
      const pastMonthShort = this.helper.data.sets.months.short[pastMonthIndex];

      const futureMonthIndex = this.helper.genRandomNumberBetween(0, 11);
      const futureMonthShort = this.helper.data.sets.months.short[futureMonthIndex];

      const pastDayIndex = this.helper.genRandomNumberBetween(
         1,
         this.helper.data.sets.daysInMonth[pastMonthIndex]
      );

      const futureDayIndex = this.helper.genRandomNumberBetween(
         1,
         this.helper.data.sets.daysInMonth[futureMonthIndex]
      );

      const pastDateInputFormat = `${this.helper.makeDateFormatNumber(
         pastMonthIndex + 1
      )}/${this.helper.makeDateFormatNumber(pastDayIndex + 1)}/${pastYear}`;

      const futureDateInputFormat = `${this.helper.makeDateFormatNumber(
         futureMonthIndex + 1
      )}/${this.helper.makeDateFormatNumber(futureDayIndex + 1)}/${futureYear}`;

      return {
         pastYear,
         futureYear,
         pastMonthIndex,
         pastMonthShort,
         futureMonthIndex,
         futureMonthShort,
         pastDayIndex,
         futureDayIndex,
         pastDateInputFormat,
         futureDateInputFormat,
      };
   }
}
