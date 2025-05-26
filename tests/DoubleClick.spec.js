const{test, expect} = require('@playwright/test')

test('Double Click', async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/#");


    const doubleclick = await page.locator('//button[normalize-space()="Copy Text"]')

    //Double Click
    await doubleclick.dblclick();

    const text = await page.locator('//input[@id="field2"]')

   await expect(text).toHaveValue("Hello World!");
   await page.waitForTimeout(5000);

    await page.close();

})