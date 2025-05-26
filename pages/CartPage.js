exports.CartPage = 

class CartPage {

    constructor(page){
        this.page = page;
        this.cartlink = "//a[normalize-space()='Cart']";
        this.productTable = '//tbody[@id="tbodyid"]/tr/td[2]';
        
    }


    async cartlinkclick(productNameis){
        await this.page.locator(this.cartlink).click();

        await this.page.waitForSelector(this.productTable);

       const tablelist = await this.page.$$(await this.productTable):

    /*   
       for (const data of tablelist) {
       const text = await data.textContent();
           console.log(text); // ✅ this prints the table data
      }


       for (const data of tablelist) {
                 const text = await data.textContent();
                 console.log(text?.trim()); // ✅ this prints the table data
               
                 if (productNameis === text?.trim()) {
                   return true; // ✅ you found the match
                   break; // `return` exits the function, no need for break
                 }
               }

         for(const data of tablelist){
               console.log(await data.textContent());

               if(productNameis === await data.textContent()){
               return true;
               break;
        }  */
        
    }
             
}
               


         
    

