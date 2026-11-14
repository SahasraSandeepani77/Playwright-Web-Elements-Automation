const { test, expect } = require('@playwright/test')

test('Home page', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  const pageTitle = await page.title();
  console.log('Page title is :', pageTitle);

  await expect(page).toHaveTitle('Automation Exercise');

  const pageURL = page.url();
  console.log('Page URL is:', pageURL);

  await expect(page).toHaveURL('https://automationexercise.com/');


  await page.close();






})
