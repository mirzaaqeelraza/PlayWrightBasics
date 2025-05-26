//const{ test, expect} = require('@playwright/test')


import {test, expect} from '@playwright/test';
const{test, expect} = require('../pages/LoginPage')
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

  test('POM Test', async({page})=>{

    //LoginTest

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginuser('mirza2', '1234')
    await page.waitForTimeout(3000);
 



    //HomeTest
    const Home = new HomePage(page);
    await Home.addProductToCart("Samsung galaxy s6");
    await page.waitForTimeout(5000);
   



    //CartTest
    const Cart = new CartPage(page);
    await  Cart.cartlinkclick("Samsung galaxy s6");
    await page.waitForTimeout(5000);




  })