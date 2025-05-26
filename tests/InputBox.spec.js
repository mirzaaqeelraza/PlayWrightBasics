const { test, expect } = require('@playwright/test')

// Define a test case named "InputField"
test("InputField", async ({ page }) => {

    // Navigate to the registration page of nopCommerce demo site
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

    // Verify the First Name field is visible, empty, editable, and enabled
     await expect(firstName).toBeVisible();
     await expect(firstName).toBeEmpty();
     await expect(firstName).toBeEditable();
     await expect(firstName).toBeEnabled();

    // Fill in the First Name field with the given value
    await FirstName.fill("Mirza Aqeel")

    // Fill in the Last Name field directly using the page.fill() method
    await page.fill('#LastName', "Raza")

    // Optional: Add an assertion to verify the values entered
     await expect(firstName).toHaveValue('Mirza Aqeel');
     await expect(page.locator('#LastName')).toHaveValue('Raza');


    // Pause the execution for 5 seconds (not generally recommended in production code)
    await page.waitForTimeout(5000)

    // Close the browser page
    await page.close()  

})
