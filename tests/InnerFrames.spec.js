const{test, expect} = require('@playwright/test')

test('Inner Frames', async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    await frame3.locator('input[name="mytext3"]').fill("Mirza")

     //const childFrame = await frame3.childFrames();
     //await childFrame[0].locator("//div[@id='i6']//div[@class='AB7Lab Id5V1']").check()

     const childFrames = await frame3.childFrames();
     const innerFrame = childFrames[0];
     await innerFrame.waitForSelector('//div[@id="i6"]//div[@class="AB7Lab Id5V1"]');
     await innerFrame.locator('//div[@id="i6"]//div[@class="AB7Lab Id5V1"]').click();
    
    
     await page.waitForTimeout(5000);
    await page.close();   

})