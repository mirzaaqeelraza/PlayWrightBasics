const{test, expect} = require('@playwright/test')

test.beforeAll('', async()=>{
     console.log('This is beforeAll Hook.....')
})

test.afterAll('', async()=>{
    console.log('This is afterAll Hook.....')
})

test.beforeEach('', async()=>{
    console.log('This is beforEach Hook.....')
})

test.afterEach('', async()=>{
    console.log('This is afterEach Hook.....')
})



test.describe.only('Group 1', ()=>{

    test('test 1', async({page})=>{
        console.log("This is test 1.....")
  });
  
    test('test 2 ', ({page})=>{
      console.log("This is test 2.....")
  })

})

test.describe.skip('Group 2', ()=>{

    
test('test 3', ({page})=>{
    console.log("This is test 3....")
})

test('test 4', ({page})=>{
    console.log("This is test 4......")
})
    
})




