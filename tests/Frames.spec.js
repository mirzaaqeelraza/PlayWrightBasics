const{test, expect} = require('@playwright/test');

test('handle frames', async({page})=>{


    await page.goto("https://ui.vision/demo/webtest/frames/");

   //Total frames
   const allframes = await page.frames()
   console.log('Number of frames:', allframes.length)


   //aproach 1: using name or url
   //const frame1 = await page.frame('name');   // if the name is present
   //const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})        // if the locator is present
   //await frame1.fill("input[name='mytext1']", 'Mirza');

   //aproach 2: using frame locator
  const frame3 = await page.frameLocator('//frame[@src="frame_1.html"]').locator('input[name="mytext1"]');
  await frame3.fill("Hello");

   await page.waitForTimeout(5000)
   await page.close()








})