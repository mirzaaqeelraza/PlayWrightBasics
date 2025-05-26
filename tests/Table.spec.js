const{test, expect} = require('@playwright/test')

test('Handling Table', async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = page.locator('#productTable');

    // Scroll to the table to make it visible
    await table.scrollIntoViewIfNeeded();

    // Wait for the table to be visible
    await expect(table).toBeVisible();
    
    
    //1. Total number of rows and columns:-
         //Number of Columns
    const column = await table.locator('thead tr th')
    console.log("Number of Columns:", await column.count() )  
    expect(await column.count()).toBe(4)

        //Number of Rows
     const rows = table.locator('tbody tr ')
     console.log("Number of rows:", await rows.count())  
     expect(await rows.count()).toBe(5);

  
 /*
    //2. Select checkbox for product 4
    const matchedRow = rows.filter({
                            has: page.locator('td'),
                            hasText: 'Smartwatch'
    }) 
    await matchedRow.locator('input').check()  
 
   
    //3. Select multiple products by re-usable function
    await selectMultipleProduct(rows, page, 'Laptop')
    await selectMultipleProduct(rows, page, 'Tablet')
    await selectMultipleProduct(rows, page, 'Wireless Earbuds')

    

    //4. print all product details using loop
       for(let i=0; i< await rows.count(); i++)
       {
            const row = rows.nth(i);
            const tds = row.locator('td')

              for(let j=0; j< await tds.count()-1; j++)
              {
                   console.log(await tds.nth(j).textContent())
              }
       }  
               */
    
       
    //5. Read Data from all the pages in the table
      const pages = await page.locator('#pagination li a')
      console.log("Number of Pages", await pages.count())

      for(let p=0; p < await pages.count(); p++)
       {
           if(p>0)
           {
                await pages.nth(p).click()
           }

           for(let i=0; i< await rows.count(); i++)
            {
                 const row = rows.nth(i);
                 const tds = row.locator('td')
     
                   for(let j=0; j< await tds.count()-1; j++)
                   {
                        console.log(await tds.nth(j).textContent())
                   }
            } 
       }
        

    await page.waitForTimeout(5000)

    await page.close

         
})
  

/*async function selectMultipleProduct(rows, page, name)
   {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check()

}      */


