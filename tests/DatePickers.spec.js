const { test, expect } = require('@playwright/test');

test('Date pickers', async ({ page }) => {

    // Navigate to the target webpage
    await page.goto("https://testautomationpractice.blogspot.com/");


    // Directly fills the datepicker input field with the specified date in 'DD/MM/YYYY' format
    //await page.fill('#datepicker', '29/05/2025');

    // Locate the date input field
    const datefield = await page.locator('#datepicker');

    // Scroll to the datepicker element to make it visible
    await datefield.scrollIntoViewIfNeeded();

    // Ensure the datepicker is visible
    await expect(datefield).toBeVisible();

    // Desired date to select from the calendar
    const year = "2025";
    const month = "May";
    const date = "29";

    // Click the datepicker field to open the calendar widget
    await datefield.click();

    // Navigate through the calendar months until the desired month and year are found
    while (true) {
        // Get currently displayed month and year
        const currentmonth = await page.locator('//span[@class="ui-datepicker-month"]').textContent();
        const currentyear = await page.locator('//span[@class="ui-datepicker-year"]').textContent();

        // If current month and year match the desired ones, break the loop
        if (currentyear.trim() === year && currentmonth.trim() === month) {
            break;
        }

        // Click the "Next" button to go to the next month
        await page.locator('//a[@title="Next"]').click();
    }

    // Get all date elements for the current month
    const dates = await page.$$('//a[@class="ui-state-default"]');

    // Loop through the date elements to find the desired date
    for (const dt of dates) {
        if ((await dt.textContent()).trim() === date) {
            // Click the matching date
            await dt.click();
            break;
        }
    }

    // Wait for a few seconds to observe the result before closing
    await page.waitForTimeout(5000);
});