const{test, expect} =require('@playwright/test')

test('SoftAssertions', async({page})=>{


    await page.goto("https://demoblaze.com/")


   /*Hard Assertions:-
    await expect(page).toHaveTitle('STORE');

    await expect(page).toHaveURL('https://demoblaze.com/');

    await expect(page.locator('.navbar-brand')).toBeVisible(); */


    //Soft Assertions:-
    await expect.soft(page).toHaveTitle('STORE11')

    await expect(page).toHaveURL('https://demoblaze.com/');

    await expect(await page.locator('.navbar-brand')).toBeVisible();


    page.close();



})