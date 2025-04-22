const {test, expect} =require('@playwright/test');

//import {test, expect} from '@playwright/test'



test('Locators', async ({page})=>{

    await  page.goto("https://demoblaze.com/");

    //Click on login button   --> Property
    await page.locator('id=login2').click();
     // await page.click('id=login2');



   //Prvide UserName   --> CSS
   await page.locator('#loginusername').fill("mirza1")
   //await page.fill('#loginusername', 'mirza1');
   //await page.type('#loginusername', 'mirza1')


   //Provide Password   --> Css
   page.fill('input[id="loginpassword"]', 'mirza@123')


   //Click on Login Button  ---> xpath 
  await  page.click("//button[normalize-space()='Log in']")


  //Verify logout link presence  ---> Xpath 
  const logoutlink= await page.locator("//a[@id='logout2']")

  await expect(logoutlink).toBeVisible();

  await page.close();


})


