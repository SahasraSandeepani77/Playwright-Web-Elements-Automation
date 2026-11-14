const { test, expect } = require('@playwright/test')

test('AssertionsTest', async ({ page }) => {

  await page.goto('https://demoqa.com/text-box')

  // Page has URL

  await expect(page).toHaveURL('https://demoqa.com/text-box')

  // Page has Title 

  await expect(page).toHaveTitle('DEMOQA')

  // Element is Visibale

  const Element = await page.locator("img[src='/images/Toolsqa.jpg']")
  await expect(Element).toBeVisible()

  // Element Enable
  const EnableElemet = await page.locator('#userName')
  await expect(EnableElemet).toBeEnabled()

  // Radio/Checkbox is checked

  //  const radioButton = await page.locator("label[for='gender-radio-1']").click()
  //  await expect(radioButton).toBeChecked()

  // Attribute has value

  //const attributevalue = await page.locator('#submit')
  //await expect(attributevalue).toHaveAttribute('id', 'type')

  await expect(await page.locator(".text-center ")).toHaveText('Text Boxs')













})





