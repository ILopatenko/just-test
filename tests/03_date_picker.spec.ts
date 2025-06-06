import { DataPicker } from '../pom/DataPicker';
import { MainHelper } from '../helper/MainHelper';
import { test as it, expect } from 'playwright/test';

it.describe('Date Picker Page', () => {
   it('Navigate to the Data Picker Page using dataPicker', async ({ page }) => {
      //Create a new instanse of DatePicker class
      const dataPicker = new DataPicker(page);
      const helper = new MainHelper();

      //Open a Test Page
      //await dataPicker.goToWebPage('jquery-date-picker-demo');
      await dataPicker.loadTestPage();

      //Verify that loaded page is what we wanted to open (check by Header)
      await dataPicker.verifyHeaderH1(dataPicker.headerText);

      /* //Choose From and To dates
      const dateObject = helper.genRandomDateInThePast();
      console.log(dateObject);
      await dataPicker.openFromCalendar();

      const currentYear = await dataPicker.getCurrentYearInCalendar();
      const yearsToDecrease = currentYear - dateObject.year;
      console.log({ yearsToDecrease });

      await dataPicker.openFromCalendarAndDecreaseYear(yearsToDecrease);
      await dataPicker.selectMonth(helper.data.sets.months.short[dateObject.month - 1]);
      await dataPicker.selectDay(dateObject.day);

      const setDataFrom = await dataPicker.getChoosenDateInFromCalendar();

      console.log({ setDataFrom });
      const setDataSplitArray = setDataFrom.split('/');
      console.log({ setDataSplitArray });

      expect(+setDataSplitArray[0] === dateObject.month).toBeTruthy();
      expect(+setDataSplitArray[1] === dateObject.day).toBeTruthy();
      expect(+setDataSplitArray[2] === dateObject.year).toBeTruthy();

      await dataPicker.openToCalendarAndIncreaseYear(7);
      await dataPicker.selectMonth('Jul');
      await dataPicker.selectDay(7);
 */

      const testData = dataPicker.getRandomDatesForPage();
      console.log(testData);

      dataPicker.openFromCalendar();

      const currentYear = await dataPicker.getCurrentYearInCalendar();
      const decreaseYearValue = currentYear - testData.pastYear;
      const increaseYearValue = testData.futureYear - currentYear;
      console.log({ currentYear, decreaseYearValue, increaseYearValue });

      await dataPicker.fromCalendarDecreaseYear(decreaseYearValue);
      await dataPicker.openMonthSelection();
      await dataPicker.selectMonth(testData.pastMonthShort);
      await dataPicker.selectDay(testData.pastDayIndex + 1);

      const selectedFrom = await dataPicker.getChoosenDateInFromCalendar();
      expect(selectedFrom).toBe(testData.pastDateInputFormat);
      console.log({ selectedFrom });

      //await dataPicker.toCalendarIncreaseYear(increaseYearValue);

      dataPicker.openToCalendar();
      await dataPicker.toCalendarIncreaseYear(increaseYearValue);
      await dataPicker.openMonthSelection();
      await dataPicker.selectMonth(testData.futureMonthShort);
      await dataPicker.selectDay(testData.futureDayIndex + 1);
      const selectedTo = await dataPicker.getChoosenDateInToCalendar();
      console.log({ selectedTo });
      expect(selectedTo).toBe(testData.futureDateInputFormat);

      await page.waitForTimeout(1000);

      //await page.pause();
   });
});
