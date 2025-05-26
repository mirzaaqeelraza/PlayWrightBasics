const { test, expect } = require('@playwright/test')


test('Assertions', async ({ page }) => {

    // Open url
    await page.goto("https://demo.nopcommerce.com/register")

    
    //await expect(page).toHaveURL()    Page has URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    const currentUrl = await page.url();
    console.log('Current URL', currentUrl)


    //await expect(page).toHaveTitle()       Page has Title
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    const currentTitle = await page.title();
    console.log('Current URL', currentTitle)

    //await expect(locator).visible()      Element is visible
    //await expect(page.locator('.header-logo')).toBeVisible();

    /*
    const logo = page.getByAltText('nopCommerce demo store')
    await expect(logo).toBeVisible();

   
    //await expect(locator).tobeEnabled       Control is enabled/ Element is disabled
    const search = await page.locator('#small-searchterms')
    await expect(search).toBeEnabled();


    // await expect(locator).toBeChecked   Radio/Checkbox is checked
    const MaleRadio = await page.locator('#gender-male');
    await MaleRadio.click();  //select radio buttotn
    await expect(MaleRadio).toBeChecked();

   */
    // await expect(locator).toHaveAttribute()     Element has attribute
    const searchbutton = await page.locator('#register-button');
    await expect(searchbutton).toHaveAttribute('type', 'submit');


    // await expect(locator).toHaveText()    Element matches text
    const register = await page.locator('.page-title h1');
    expect(register).toHaveText("Register");  // full text


    // await expect(locator).toConatinText()    Element contains text
    const register1 = await page.locator('.page-title h1');
    expect(register1).toContainText("Reg")  //Partial text


    //await expect(locator).toHaveValue(value)         Input has a value
    const firstName = await page.locator('#FirstName');
    await firstName.fill("Mirza Aqeel Raza");
    await expect(firstName).toHaveValue("Mirza Aqeel Raza")


    // await expect(locator).toHaveCount()      List of elements has given length
    const currency = await page.locator('#customerCurrency option')
    await expect(currency).toHaveCount(2)

   await page.waitForTimeout(5000);
   await page.close();




})