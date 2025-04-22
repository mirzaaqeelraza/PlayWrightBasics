const { test, expect } = require('@playwright/test')


test('Assertions', async ({ page }) => {

    //await expect(locator).toHaveCount()      Open url
    await page.goto("https://demo.nopcommerce.com/register")


    //await expect(locator).toHaveCount()    Page has URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");


    //await expect(locator).toHaveCount()       Page has Title
    await expect(page).toHaveTitle("nopCommerce demo store. Register")


    //await expect(locator).toHaveCount()      Element is visible
    //await expect(page.locator('.header-logo')).toBeVisible();

    const logo = page.getByAltText('nopCommerce demo store')
    await expect(logo).toBeVisible();


    //await expect(locator).toHaveCount()       Control is enabled

    const search = await page.locator('#small-searchterms')
    await expect(search).toBeEnabled();


    // await expect(locator).toHaveCount()    Radio/Checkbox is checked

    const MaleRadio = await page.locator('#gender-male');
    await MaleRadio.click();  //select radio buttotn
    await expect(MaleRadio).toBeChecked();


    // await expect(locator).toHaveCount()     Element has attribute

    const searchbutton = await page.locator('#register-button');
    await expect(searchbutton).toHaveAttribute('type', 'submit');


    // await expect(locator).toHaveCount()    Element matches text

    const register = await page.locator('.page-title h1');
    expect(register).toHaveText("Register");  // full text


    // await expect(locator).toHaveCount()    Element contains text

    const register1 = await page.locator('.page-title h1');
    expect(register1).toContainText("Reg")  //Partial text


    //await expect(locator).toHaveCount()         Input has a value

    const firstName = await page.locator('#FirstName');
    await firstName.fill("Mirza Aqeel Raza");
    await expect(firstName).toHaveValue("Mirza Aqeel Raza")



    // await expect(locator).toHaveCount()      List of elements has given length

    const currency = await page.locator('#customerCurrency option')
    await expect(currency).toHaveCount(2)



   await page.close();




})