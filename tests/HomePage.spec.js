   const{test, expect} = require('@playwright/test')

   test('Home Page', async ({page})=>{

     await  page.goto('https://demoblaze.com/')

     const PageTitle = page.title();
     console.log('Page title is :', PageTitle)

     await expect(page).toHaveTitle('STORE');


     page.close();

   })