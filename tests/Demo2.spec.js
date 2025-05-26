const{test, expect} = require('@playwright/test')

test("youtube Page ", async({page})=>{

   await page.goto("https://www.google.com/")

   const url = await page.url()
   console.log(url)
   // expect("https://www.google.com/".includes("https://www.google.com/")).toBeTruthy()
   expect(url.includes("https://www.google.com/")).toBeTruthy();

   const title = await page.title()
   console.log(title)
   expect(page).toHaveTitle("Google")

   await page.waitForTimeout(3000)

})