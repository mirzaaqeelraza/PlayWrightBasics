const{test, expect}= require('@playwright/test')

/*
//only
test.only('Test1', async({page})=>{
     console.log('This is my test1.......')
})

//Skip
test.skip('Test2', async({page})=>{
    console.log('This is my test2.......')
})  */

test('Test3', async({page, browserName})=>{
    console.log('This is my test3.......')

    if(browserName === 'firefox')
        test.skip()
})

//fixme
test('test4', async({page})=>{
      test.fixme();
      console.log("This is fixme test....")
})

//fail
test('test5', async({page})=>{
    test.fail(); //exp
      console.log("This is test 5....")
      expect(1).toBe(1);  //act
})

test('test6', async({page, browserName})=>{
      console.log('this is test 4')
       if(browserName === 'firefox')
           test.fail()
})

//slow
test('test7', async({page})=>{
      //test.slow();
      test.setTimeout(5000);
      await page.goto("https://demoblaze.com/index.html")
      console.log("This is test 7....")
})



