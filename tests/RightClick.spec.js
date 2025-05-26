const{test,expect} =require("@playwright/test")

test('Right Click', async({page})=>{


    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    

    const right = page.locator('//span[@class="context-menu-one btn btn-neutral"]')
   
    //Right Click
    await right.click({button : 'right'})


    // Normal Click
    //await right.click();


    await page.waitForTimeout(5000);
    await page.close();


})