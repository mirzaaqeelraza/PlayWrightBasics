const{test, expect} = require('@playwright/test')

test('LocateMultipleWebElements', async({page})=>{

await page.goto('https://demoblaze.com/');

     const links = await page.$$('a');

     for(const link of links)
     {
        const LinkText = await link.textContent();
        console.log(LinkText);
     }




})