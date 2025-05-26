const{test, expect} =require('@playwright/test')

/*
test.beforeAll(async ( )=>{
   console.log("Before All Test")
})


test.afterAll(async( )=>{
    console.log("After All Test")
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
    */

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


test('Test 1', ( )=>{
     console.log("This is Test 1")
})

test('Test 2', ( )=>{
    console.log("This is Test 2")
})


