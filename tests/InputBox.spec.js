const { test, expect } = require('@playwright/test')

test("InputField", async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")


    const FirstName = await page.locator('#FirstName')


    await expect(FirstName).toBeVisible()
    await expect(FirstName).toBeEmpty();
    await expect(FirstName).toBeEditable();
    await expect(FirstName).toBeEnabled();

    await FirstName.fill("Mirza Aqeel");



    await page.fill('#LastName', "Raza");


    await page.waitForTimeout(5000); ///Pausung the code

    await page.close();

})