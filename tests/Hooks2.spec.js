const{test, expect} =require('@playwright/test')

let page;
test.beforeAll(async ({browser})=>{

   page =  await browser.newPage();

   await page.goto('https://demoblaze.com/index.html');

     //login
    await page.locator('#login2').click();
    await  page.locator('#loginusername').fill("mirza2");
    await page.locator('#loginpassword').fill('1234');
    await page.locator('//button[normalize-space()="Log in"]').click();

})


test.afterAll(async( )=>{

    //logout
    const logout = await page.locator('#logout2')
    await logout.click()



})



test('Home Page Test', async( )=>{
    
    //Home Page
    const logoutlink = await page.locator('#logout2')
    await expect(logoutlink).toBeVisible();
    
   

})

test('Add Product to cart Test', async( )=>{

    //Home Page
    const logoutlink = await page.locator('#logout2')
    await expect(logoutlink).toBeVisible();

   
})
