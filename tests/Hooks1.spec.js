const{test, expect} =require('@playwright/test')

let page;
test.beforeEach(async ({browser})=>{

   page =  await browser.newPage();

   await page.goto('https://demoblaze.com/index.html');

     //login
    await page.locator('#login2').click();
    await  page.locator('#loginusername').fill("mirza2");
    await page.locator('#loginpassword').fill('1234');
    await page.locator('//button[normalize-space()="Log in"]').click();

})


test.afterEach(async( )=>{

    //logout
    const logout = await page.locator('#logout2')
    await logout.click()

    await page.waitForTimeout(4000);

})



test('Home Page Test', async( )=>{
    
    //Home Page
    const logoutlink = await page.locator('#logout2')
    await expect(logoutlink).toBeVisible();
    
    await page.waitForTimeout(4000);

})

test('Add Product to cart Test', async( )=>{

    //Home Page
    const logoutlink = await page.locator('#logout2')
    await expect(logoutlink).toBeVisible();

    await page.waitForTimeout(4000);
})
