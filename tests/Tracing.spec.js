const{test, expect} =require('@playwright/test')

test('Trace Test', async({page})=>{

    await page.goto('https://demoblaze.com/index.html');
    await page.locator('#login2').click();
    await  page.locator('#loginusername').fill("mirza2");
    await page.locator('#loginpassword').fill('1234');
    await page.locator('//button[normalize-space()="Log in"]').click();

    const logout = await page.locator('#logout2')
    await expect(logout).toBeVisible();

    await page.waitForTimeout(4000);


})

