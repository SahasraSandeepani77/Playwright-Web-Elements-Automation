const { test, expect } = require('@playwright/test')

//import {test,expect} from '@playwright/test'

test('Locator', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  // Click on login button - property
  //await page.locator('id=log2').click()
  //await page.click('id=log2');

  //Provide username - CSS

  //await page.locator("input[placeholder='Username']").fill("Admin")
  //await page.locator("input[placeholder='Username']").type("Admin")
  await page.fill("input[placeholder='Username']", 'Admin')

  //Provide Password - CSS
  await page.fill("input[placeholder='Password']", 'admin123')

  // Click on login button - xpath

  await page.locator("//button[normalize-space()='Login']").click()
  //await page.click("//button[normalize-space()='Login']");

  // verify logout link precense
  await page.click('.oxd-userdropdown-name');

  const logoutlink = await page.locator("(//a[normalize-space()='Logout'])[1]")

  await expect(logoutlink).toBeVisible();

  const Links = await page.$$('a');

  for (const link of Links) {
    const linktext = await link.textContent();
    console.log(linktext);
  }






  await page.close()

  //https://www.saucedemo.com/










})





