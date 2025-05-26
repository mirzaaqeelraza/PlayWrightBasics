const{test, expect}=require('@playwright/test')

test('Drag and Drop', async({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')


    const Madrid = await page.locator('#box7')
    
    const Norway = await page.locator('//div[@id="box101"]')

    //Drag and Drop
    await Madrid.dragTo(Norway);


    await page.waitForTimeout(5000);

    await page.close();

})