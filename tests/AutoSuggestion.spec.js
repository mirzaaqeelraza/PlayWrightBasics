const {test, expect} = require('@playwright/test')

test('Auto Suggestion Dropdown', async ({page})=>{

    await  page.goto("https://www.redbus.in/");
   

    await  page.locator('#src').fill("Delhi")
    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")


    const fromcity = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")
    
   // 1. check number of options in a dropdown
  // 2. check number of options in a dropdown using JS array
  //  3. Print all options from the dropdownlist
   // 4. check presence of value in the dropdown
  //  5. Select option from the dropdown
  //  6. DeSelect option from the dropdown


    console.log("No of options", await fromcity.length)
    for(const options of fromcity)
    {
        const value = await options.textContent()
        //console.log(value);

       if(value.includes("Majnu Ka Tilla"))
       {
                  await options.click();
                  break;
       }  
    }


    await page.waitForTimeout(5000);


})