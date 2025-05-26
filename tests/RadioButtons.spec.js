const { test, expect } = require('@playwright/test')

test("radio button", async ({ page }) => {

    // Navigate to the nopCommerce registration page
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

    // Locate the "Male" gender radio button
    const maleRadio = await page.locator('#gender-male');

    // Click on the male radio button
    await maleRadio.click();

    // Verify it is checked
    await expect(maleRadio).toBeChecked(); 

    // Log the checked status
    const isChecked = await maleRadio.isChecked();
    console.log('Male is checked:', isChecked);

    // Alternative way to check the radio button using `page.check()` (idempotent)
    await page.check('#gender-male');

    // Again, assert it's checked using the locator
    await expect(await page.locator('#gender-male')).toBeChecked();
    console.log('Male Radio buttons is checked');


    // Another way: using `isChecked()` method for boolean assertion
    await expect(await page.locator('#gender-male').isChecked()).toBeTruthy();

    // Verify the "Female" radio button is *not* checked
    await expect(await page.locator('#gender-female').isChecked()).toBeFalsy();
   
    // Wait for 5 seconds (useful for observation, not for production code)
    await page.waitForTimeout(5000);

    // Close the browser page
    await page.close();
})
