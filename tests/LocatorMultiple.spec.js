
const { test, expect } = require('@playwright/test')

//import {test,expect} from '@playwright/test'

test('Locators', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  const Links = await page.$$('a');

  for (const link of Links) {
    const linktext = await link.textContent();
    console.log(linktext);
  }

})