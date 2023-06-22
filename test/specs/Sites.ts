import Sites from '../pageobjects/Locators/Locators.js'; 
import Utilities from '../pageobjects/Utilities/Utilities.js';
describe(('Sites automation'),()=>{
    const site = new Sites();
    const utilities = new Utilities();
    it(('Sites, Page automation'),async()=>{
          //await browser.url('https://prolific-cloud.pc-staging.com/');
       // await browser.url('https://prolific1.pc-staging.com/signin');
       await browser.url('https://abc-5021.pc-staging.com/admin');
       await browser.maximizeWindow();
     
       await utilities.Signin();
      
       

       await site.SitesClick.click();

       /* -----------------------------------------------------------------
    
           -------------  Page  ----------------

      ----------------------------------------------------------------- */

       await site.pageClick.click();
       await site.createNew.click();
       await site.addSection.click();
       await site.singleSection.click();
       await site.icon.click();
       await site.useTemplatePage.click();
       await browser.pause(4000);
       (await site.importPage).click();
      


    

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
       await site.linkClickMenuSet.setValue("https://prolific1.pc-staging.com/admin/menuset/create");
       await site.addMenuMenuSet.click();

       /* -----------------------------------------------------------------
    
           -------------  Header Set  ----------------

      ----------------------------------------------------------------- */

      await site.headerSetClick.click();
      await site.leavePageConfirm.click();
      await site.createNewHeaderSet.click();

      await site.addSection.click();
      await site.singleSection.click();
      await site.icon.click();

/* -----------------------------------------------------------------
    
           -------------  Footer Set  ----------------

----------------------------------------------------------------- */

     await site.footerClick.click();
     await site.leavePageConfirm.click();
     await site.createNewFooter.click();

     await site.addSection.click();
     await site.singleSection.click();
     await site.icon.click();


     /* -----------------------------------------------------------------
    
           -------------  Media Library  ----------------

   ----------------------------------------------------------------- */

      await site.mediaLibraryClick.click();
      await site.leavePageConfirm.click();

      const filePath = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\youtube.jpg'
      const remoteFilePath = await browser.uploadFile(filePath)
     
     
      await browser.execute(()=>{
      
       document.getElementById("file").style.display="block";
      })
    
    
     await site.imgAdd.setValue(remoteFilePath); // //input[@id='file-upload']

     await site.nameMediaLibrary.setValue("Youtube");
     await site.allTextMediaLibrary.setValue("Abc");
     await site.captionMediaLibrary.setValue("Icon");
     await site.textareaMediaLibrary.setValue("Img Upload Successfully");
     await site.saveMediaLibrary.click();
     
      await browser.pause(5000);


    })
})