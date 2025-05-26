const{test, expect} = require('@playwright/test')

test.only('Page Screenshot', async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
   await page.screenshot({path : 'HomePage.png'})
   //await page.screenshot({path :'tests/Screenshots/' + Date.now()+ 'HomePage.png'})
})

test('Full Page Screenshot', async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
   await page.screenshot({path :'tests/Screenshots/' + Date.now()+ 'HomePage.png', fullPage :true})

})

test('Element ', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/');
   // await page.screenshot({path : 'HomePage.png'})
   await page.locator(' ').screenshot({path :'tests/Screenshots/' + Date.now()+ 'MacBook.png'})

})