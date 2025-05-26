exports.HomePage = class HomePage {

    constructor(page){
       this.page = page;
       this.productlist = '//div[@id="tbodyid"]/div/div/div/h4/a';
       this.addProductbtn = "//a[normalize-space()='Add to cart']";
      // this.cart = ""

    }



   async addProductToCart(productName){





        const productlist = await this.page.$$(await this.productlist);
        for(const product of productlist )
        {
            //console.log(await product.textContent());
            if(productName  === await product.textContent())
                await product.click();
                break;
        }

        await this.page.locator(await this.addProductbtn).click();
    
    }


    }





