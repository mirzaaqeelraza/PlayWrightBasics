const{test, expect} = require('@playwright/test')

test('Handling Dropdowns', async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/');

   await page.waitForSelector('#country');
   await page.locator('#country').scrollIntoViewIfNeeded();

   //Multiple ways to select option from the dropdown
   /*await page.locator('#country').selectOption({label:'India'});  //visible text
     await page.locator('#country').selectOption('India');  //visible text
     await page.locator('#country').selectOption({value :'india'});  
     await page.locator('#country').selectOption({index : 2 })
     await page.selectOption("#country", 'India');  */
    
   // Print all the options from the dropdownlist  
   /* const alloptions = await page.$$('//select[@id="country"]/option')
     for(const option of alloptions)
     {
         console.log(await option.textContent());
     }   */

  //Assertion::----

   // 1. Check number of options in a dropdown --> Approch 1 
     /* const options = await page.locator('//select[@id="country"]/option')
     console.log("Number of options in dropdown list", await options.count())
     await expect(options).toHaveCount(10);   */
     
    // 2. Check number of options in a dropdown --> Approch 2 
    /* const options1 = await page.$$('//select[@id="country"]/option')
    console.log("Number of options:",  options1.length)
    await expect(options1.length).toBe(10);   */

    //3. check presence of value in the drop down -Approch 1
     /*const content = await page.locator('#country').textContent()
     await expect(content.includes('India')).toBeTruthy(); */
      
    //check presence of value in the drop down -Approch 2 - using looping
    /*const options2 = await page.$$('//select[@id="country"]/option')
    let status = false;
    for(const option of options2)
      {
         console.log(await option.textContent())
         let values = await option.textContent();
         if(values.includes('India'))
         {
             status = true;
             break;
       }
         
    }
    await expect(status).toBeTruthy(); */


    //4. Select option from the dropdown using looping
    const options3 = await page.$$('#country option')
    for(const option of options3)
    {
        //console.log(await option.textContent());
        let text = await option.textContent();
        if(text.includes('India'))
        {
          const valueAttr = await option.getAttribute('value');
          await page.selectOption('#country', valueAttr)
          break;  
        }

    }  

    await page.waitForTimeout(5000);

    await page.close()

})