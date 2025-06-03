import { test as it } from 'playwright/test';

it.describe('form page test suite', async () => {
   console.log('form page');

   it.beforeEach(async () => {
      console.log('prepatre test data. before each test');
   });

   it.afterEach(async () => {
      console.log('clean cache. After each test');
   });

   it('test #1', async () => {
      console.log('this is test #1');
   });
   it('test #2', async () => {
      console.log('this is test #2');
   });

   it('test #3', async () => {
      console.log('this is test #3');
   });
});

it.beforeAll(async () => {
   console.log('before all');
});

it.afterAll(async () => {
   console.log('after all');
});
