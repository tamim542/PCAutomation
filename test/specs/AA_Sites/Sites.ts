import Sites from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';
describe(('Sites automation'), () => {
  const site = new Sites();
  const utilities = new Utilities();


  it(('Sites, Page automation'), async () => {
    //await browser.url('https://prolific-cloud.pc-staging.com/');
    // await browser.url('https://prolific1.pc-staging.com/signin');
    await browser.url('https://abc-5021.pc-staging.com/admin');
    await browser.maximizeWindow();

    await utilities.Signin();



    await site.SitesClick.click();
    await browser.takeScreenshot();
    /* -----------------------------------------------------------------
 
        -------------  Page  ----------------

   ----------------------------------------------------------------- */

    await site.pageClick.click();
    await site.createNew.click();
    await site.addSection.click();
    await site.singleSection.click();
    await site.icon.click();


   


  //   let drag = await $("(//div[@class='css-exiz1d'])[1]");//    (//div[@class='css-kw6oal'])[1]
  //   let drop = await $("(//p[contains(.,'Column')])[1]");



  //   console.log("drag===" + await drag.getText()); 

  //   console.log("drop===" + await drop.getText());
  //   //await drag.click();
  //   await browser.pause(5000);

  //  await browser.execute(function(){
  //   var elements = document.getElementsByClassName('css-exiz1d');
  //   for(var i = 0, length = elements.length; i < length; i++) {
  //      if( elements[i].textContent == ''){
  //         elements[i].style.display = 'none';
  //      } 
  //   }
  // })


  //   // drag and drop to other element

  //   await drag.dragAndDrop(drop);

    await browser.pause(5000);
    await browser.takeScreenshot();

    await site.useTemplatePage.click();
    await browser.pause(4000);
    (await site.paginationFour).click();
    await browser.pause(4000);
    (await site.importPage).click();

    await browser.pause(4000);

    //  browser.addCommand("jsClick", function(this: ElementResult) {
    //   this.then((site.preview) => {
    //     browser.execute("arguments[0].click();", site.preview.value);
    //   });
    // });


    //  (await site.preview).click();
    //  (await site.importPage).click();





    /* -----------------------------------------------------------------
    
           -------------  Menu Set  ----------------

      ----------------------------------------------------------------- */

    //   await site.SitesClick.click();
    await site.menuSetClick.click();
    await site.leavePageConfirm.click();
    await site.createNewMenuSet.click();
    await site.nameMenuSet.setValue("Testing2");
    await site.pageMenuSet.click();
    await site.customLinkClickMenuSet.click();
    await site.labelClickMenuSet.setValue("two");
    const linkMenuset="https://prolific1.pc-staging.com/admin/menuset/create";
    await site.linkClickMenuSet.setValue(linkMenuset);
    await site.addMenuMenuSet.click();
    



    /* -----------------------------------------------------------------
 
        -------------  Header Set  ----------------

   ----------------------------------------------------------------- */


    await site.headerSetClick.click();
    await site.leavePageConfirm.click();
    await site.createNewHeaderSet.click();
    await site.setHeaderName.setValue("Abc Header");
    await site.addSection.click();
    await site.singleSection.click();
    await site.icon.click();
    
    await site.headerSave.click();
    await browser.pause(3000);
    /* -----------------------------------------------------------------
        
               -------------  Footer Set  ----------------
    
    ----------------------------------------------------------------- */

    await site.footerClick.click();
    await site.leavePageConfirm.click();
    await browser.pause(5000);
    await site.createNewFooterClick.click();
    await site.pageNameFooter.setValue("Footer")

    await site.addSection.click();
    await site.singleSection.click();
    await site.icon.click();
    await browser.takeScreenshot();

    /* -----------------------------------------------------------------
   
          -------------  Media Library  ----------------

  ----------------------------------------------------------------- */

    await site.mediaLibraryClick.click();
    await site.leavePageConfirm.click();

    const filePath = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\youtube.jpg'
    const remoteFilePath = await browser.uploadFile(filePath)


    await browser.execute(() => {

      document.getElementById("file").style.display = "block";
    })


    await site.imgAdd.setValue(remoteFilePath); // //input[@id='file-upload']

    await site.nameMediaLibrary.setValue("Youtube");
    await site.allTextMediaLibrary.setValue("Abc");
    await site.captionMediaLibrary.setValue("Icon");
    await site.textareaMediaLibrary.setValue("Img Upload Successfully");
    await site.saveMediaLibrary.click();
    await browser.takeScreenshot();
    await browser.pause(5000);


  })
})