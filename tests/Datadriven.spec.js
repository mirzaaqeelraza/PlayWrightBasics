const{test, expect} = require("@playwright/test")

test("Data driven Test" , async({page})=>{


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


   await page.locator('//input[@placeholder="Username"]').fill("Admin");
   await page.locator('//input[@placeholder="Password"]').fill("admin123")
   await page.locator('//button[normalize-space()="Login"]').click()

})