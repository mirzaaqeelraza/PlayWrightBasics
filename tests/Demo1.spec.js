const{test, expect} = require('@playwright/test')

test("Practice" , async ({page})=>{

    expect(10).toBe(10)

})

test("practice 2", async({page})=>{

    expect("Mirza").toBe("Mirza")

})

test("Practice3" , async ({page})=>{

    expect(10.2).toBe(10.2)

})

test("practice 4", async({page})=>{

    expect("Aqeel").toContain("ee")
    
})

test("practice 5", async({page})=>{

     expect(true).toBeTruthy();
    
})

test("practice 6", async({page})=>{

     expect("Mirza Aqeel Raza".includes("Aqeel")).toBeTruthy()
    
})
