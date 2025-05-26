const{test, expect} = require('@playwright/test')


test('Mouse Hover', async({page})=>{


  await page.goto("https://testautomationpractice.blogspot.com/")

  const pointme = await  page.locator('.dropbtn')
  
  const mobiles = await page.locator("//a[normalize-space()='Mobiles']")


  //Mouse Hover
  await pointme.hover();

  await mobiles.hover();

  // Click on 'Mobiles'
  await mobiles.click()

  await page.waitForTimeout(6000);



})