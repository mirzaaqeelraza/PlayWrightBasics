const{test, expect} = require('@playwright/test')

test('Keyboard Actions', async({page})=>{

    
    await page.goto("https://gotranscript.com/text-compare")
    
    const text  = await page.getByPlaceholder("Paste one version of the text here.");
    await text.fill("Mirza Aqeel Raza")  

    //CTRL + A
    await page.keyboard.press('Control+A');

    //CTRL + C
    await page.keyboard.press('Control+C');

    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //CTRL + V
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);

    await page.close();


})