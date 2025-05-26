const{test, expect} =require('@playwright/test')


/*test.use({
    viewport : {
        width : 1000,
        height : 500
    }
})  */

test("Maximize window", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


    const height = await page.viewportSize().height
    console.log("Height is:-", height)

    const width = await page.viewportSize().width
    console.log("Width is:-", width)



    await page.waitForTimeout(3000);


})