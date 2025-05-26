const{test, expect} = require('@playwright/test')

test('Hidden Drop', async({page})=>{


page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


   await page.locator('//input[@placeholder="Username"]').fill("Admin");
   await page.locator('//input[@placeholder="Password"]').fill("admin123")
   await page.locator('//button[normalize-space()="Login"]').click()

   await page.locator('//span[normalize-space()="PIM"]').click();

   await page.locator('(//div[@class="oxd-select-text--after"])[3]').click();

   await page.waitForTimeout(5000);


   const options =await  page.$$('//div[@role="listbox"]//span')

   // 1. check number of options in a dropdown
  // 2. check number of options in a dropdown using JS array
  //  3. Print all options from the dropdownlist
   // 4. check presence of value in the dropdown
  //  5. Select option from the dropdown
  //  6. DeSelect option from the dropdown

   for(const option of options)
   {
         const values = await option.textContent();
        // console.log(values)
        
        if(values.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
   }

   await page.waitForTimeout(5000);

   await page.close()


})