const{test, expect} = require('@playwright/test')

test("radio button", async({page})=>{


   await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

   /*const maleRadio = await page.locator('#gender-male');
   await maleRadio.click();
   await expect(maleRadio).toBeChecked();  */


   await page.check('#gender-male')


   await page.waitForTimeout(5000)

   await page.close()

  

})