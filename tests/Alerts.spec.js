const{test, epect, expect} = require('@playwright/test')

test.skip('Alerts with oK', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');
 
    //Enabling alert handling [dialog window handle]
    page.on('dialog', async dialog =>{

       expect(dialog.type()).toContain('alert')
       expect(dialog.message()).toContain('I am an alert box!')
       await dialog.accept();
    })

    await page.click("//button[@id='alertBtn']");
    await page.waitForTimeout(8000);
     


})       

test.skip('Confirmation dialog -> Alert with Ok and cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    page.on('dialog', async dialog =>{
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    await dialog.accept();
    //await dialog.dismiss();

        })
    await page.locator('#confirmBtn').click()
    const text = await page.locator('#demo').textContent();
    console.log('text displayed is ',text)
    expect(await page.locator('#demo')).toHaveText('You pressed OK!')
     
    await page.waitForTimeout(5000)
    await page.close();

  

})



test('Prompt Dialog', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
   
   page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:')
    expect(dialog.defaultValue()).toContain('Harry Potter')
  
    await dialog.accept('Mirza');

})

   await page.locator('#promptBtn').click();
  const text = await page.locator('#demo').textContent();
  console.log("Text Contains", text)

  await expect(page.locator('#demo')).toHaveText("Hello Mirza! How are you today?")


  await page.waitForTimeout(5000);
  await page.close();

})