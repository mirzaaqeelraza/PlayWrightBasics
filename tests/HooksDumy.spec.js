const{test, expect} =require('@playwright/test')

//let page;
test.beforeEach(async ({page})=>{

   //page =  await browser.newPage();
   console.log("Before Each Test")
})


test.afterAll(async( )=>{
    console.log("After Each Test")

})

test('Test 1', ()=>{
    console.log("This is Test1.....")
})

test('Test 2', ()=>{
    console.log("This is Test 2.....")
})

test('Test 3', ()=>{
    console.log("This is Test 3.....")
})