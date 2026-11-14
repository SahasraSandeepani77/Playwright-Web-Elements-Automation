
const { test, expect } = require('@playwright/test')



test('Buil_inlocators', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  // page.getByAltText() to locate an element, usually image, by its text alternative.

  const logo = await page.getByAltText('company-branding')
  await expect(logo).toBeVisible();

  //page.getByPlaceholder() to locate an input by placeholder.

  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').fill('admin123')

  //page.getByRole() to locate by explicit and implicit accessibility attributes.

  await page.getByRole('button', { type: "submit" }).click()

  //page.getByText() to locate by text content.

  //const name = await page.locator('//p[normalize-space()="Buzz Latest Posts"]').textContent()

  //await expect(await page.getByText(name)).toBeVisible()

  await expect(await page.getByText('Buzz Latest Posts')).toBeVisible()


  //page.getByLabel() to locate a form control by associated label's text  // ERROR is Comming

  //await page.locator('//a[@class="oxd-main-menu-item active"]//span[1]').click()

  //await page.getByLabel('Username').fill('sahasra');














})





