const{test, expect, chromium} =require('@playwright/test')

// Test: Manually opens two pages under the same context and verifies both URLs.
test('Handle Pages/Windows', async ({})=>{

   const browser = await chromium.launch();
   const context = await browser.newContext();

    // Create two pages under the same context (like two tabs in the same browser session)
   const Page1 =  await context.newPage();
   const Page2 = await context.newPage();
  

   //browser ---> Context ---> Pages (page1, page2)

   //Number of active pages in the context
   const allPages = await context.pages();
   console.log("Number of pages:", allPages.length)


   await Page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await expect(Page1).toHaveTitle("OrangeHRM")

   await Page2.goto("https://www.orangehrm.com/", { waitUntil: 'load' });
   await expect(Page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software")
})



// Test: Handles a new tab/window opened by clicking a link and verifies its title.
test.only('Handle Multiple Pages/Windows', async ({})=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
 
    const Page =  await context.newPage();
    await Page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(Page).toHaveTitle("OrangeHRM")


    const pagePromise = context.waitForEvent('page')
    await Page.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()
    
    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software")

    await Page.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

    await browser.close();

 
     })
 

