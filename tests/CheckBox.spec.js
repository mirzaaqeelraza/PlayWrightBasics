const{test, expect} = require('@playwright/test')

test('Check Box', async ({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/");

     //Single Checkbox
      await expect(await page.locator('//input[@id="sunday" and @type="checkbox"]')).click();
      
    await expect(await page.locator('//input[@id="sunday" and @type="checkbox"]').isChecked()).toBeTruthy();
      
    await expect(await page.locator('//input[@id="sunday" and @type="checkbox"]')).toBeChecked();
      
     await expect(await page.click('//input[@id="sunday" and @type="checkbox"]'));
      

     // Multiple Checkboxes
        const checkboxLocators = [
                             '//input[@id="sunday" and @type="checkbox"]',
                              '//input[@id="tuesday" and @type="checkbox"]',
                              '//input[@id="friday" and @type="checkbox"]'
                               
        ];

        for(const locator of checkboxLocators)
        {
             await page.locator(locator).check();

        }

      await page.waitForTimeout(3000);

})