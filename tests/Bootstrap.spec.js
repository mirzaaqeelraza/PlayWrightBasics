const{test, expect} = require('@playwright/test')

test('Bootstrap Dropdown', async ({page})=>{


   await  page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2")


   await page.locator('.multiselect').click()

   //Assertions
    // 1. check number of options in a dropdown

          //page.locator('ul li a label input')
    const options = await page.locator('ul li a label input')
    console.log("number of options", await options.count())

    // 2. check number of options in a dropdown using JS array

    // 3.Print all options from the dropdownlist


    // 4. check presence of value in the dropdown

    // 5. Select option from the dropdown
          const options1 = await  page.$$('ul li label')
          for(const option of options1)
            {
              const value = await option.textContent()
              //console.log("value is", value)
            if(value.includes("Python") || value.includes("Java"))
           {
               await option.click();
                break;
           }


          }


         // 6. DeSelect option from the dropdown

         const options3 = await  page.$$('ul li label')
         for(const option of options3)
           {
             const value = await option.textContent()
             //console.log("value is", value)
           if(value.includes("Python") || value.includes("Java"))
          {
              await option.click();
               break;
          }


         }


   
    


    await page.waitForTimeout(5000);

})










//https://www.jquery-az.com/boots/demo.php?ex=63.0_2')