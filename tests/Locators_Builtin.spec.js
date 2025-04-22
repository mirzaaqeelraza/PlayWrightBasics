const{test, expect} = require('@playwright/test')

test('Built-in-Locators', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
   page.getAttribute()

   page.getByAltText()

   page.getByLabel()

   page.getByPlaceholder()


   page.getByRole()

   page.getByTestId()

   page.getByText()

   page.getByTitle()




})