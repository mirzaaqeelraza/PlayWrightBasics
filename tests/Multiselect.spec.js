const{test, expect}= require('@playwright/test')

test('MultiselectDropDown', async ({page})=>{

   await  page.goto("https://testautomationpractice.blogspot.com/");

   
   await page.waitForSelector('#colors');
   await page.locator('#colors').scrollIntoViewIfNeeded();
   
   //await page.selectOption('#colors', ['Red', 'Green', 'White'])
   //await page.locator('#colors').selectOption(['Red', 'Green', 'White']);


   //Assertions
    // 1. Print all the options from a dropdownlist
      /*   const options = await page.$$('#colors option')
         for(const option of options)
         {
   
              console.log(await option.textContent())
         }
    // 2. check number of options in a dropdown
        const options1 = await page.locator('//select[@id="colors"]/option')
       console.log("number of options in a dropdownlist", await options1.count())
       await expect(options1).toHaveCount(7)
       
    // 3. check number of options in a dropdown using JS array
        const options3 = await page.$$('#colors option')
        console.log("number of options in a dropdownlist", await options3.length)
        await expect(options3.length).toBe(7)
        */

    // 4. check presence of value in the dropdown
    const options4 = await page.$$('#colors option')
    let status = false;
    for(const option of options4)
    {
          let text = await option.textContent()
          if(text.includes("Red"))
          {
            status = true;
            break;
          }
    }
    await expect(status).toBeTruthy();

    //Select multiple options from the multi select dropdown
    
    const options5 = await page.$$('#colors option')
    ;
    for(const option of options5)
    {
          let text = await option.textContent()
          if(text.includes(['Red', 'Green', 'White']))
          {
         const valueAttr = await option.getAttribute('value');
          await page.selectOption('#colors', valueAttr)
          break; 
          }
    }


    

   await page.waitForTimeout(5000);






})