const{test, expect} =require('@playwright/test')

test.only("login vaildate ", async ({page})=>{
 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  

    await page.getByPlaceholder("Username").fill("Admin")

    await page.getByPlaceholder("Password").fill("admin12345")

    await page.locator("//button[normalize-space()='Login']").click()

    const url = page.url()
    console.log(url)
    expect(url.includes("dashboard")).toBeTruthy();
    expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")


   await page.waitForTimeout(3000);


   await page.getByAltText("profile picture").first().click()

   await page.locator("//a[normalize-space()='Logout']").click()


   const url1 = page.url()
   console.log(url1);
   expect(url1.includes("login")).toBeTruthy();
   expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


   await page.waitForTimeout(3000);


})


test("Error Message ", async({page})=>{
   
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  

    await page.getByPlaceholder("Username").fill("Admin")

    await page.getByPlaceholder("Password").fill("admin1234")

    await page.locator("//button[normalize-space()='Login']").click()

    //p[@class='oxd-text oxd-text--p oxd-alert-content-text']

    const errormessage = await page.locator("//p[contains(@class, 'alert-content-text')]").textContent()
    console.log("Error Message is:-", errormessage)
    expect(errormessage.includes("credentials")).toBeTruthy()
    expect(errormessage == "Invalid credentials").toBeTruthy()
    expect(errormessage).toContain("credentials")

    await page.waitForTimeout(3000)

})