const{test, expect} = require('@playwright/test')

test('Test1', async({page})=>{

    await page.goto('https://www.redbus.in/')
    await expect(page).toHaveTitle("Bus Ticket Booking Online at Cheapest Price with Top Bus Operators- redBus")

})

test('Test2', async({page})=>{
 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM")

})

test('Test3', async({page})=>{

    await page.goto("https://demoblaze.com/cart.html");
    await expect(page).toHaveTitle("STORE")

})

test('Test4', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle("Automation Testing Practice")

})

test('Test5', async({page})=>{

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

}) 

test('Test6', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/ ");
    await expect(page).toHaveTitle("Frames - Web Automation Test")

})