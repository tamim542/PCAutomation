import Sites from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Sites automation'), () => {
  const site = new Sites();
  const utilities = new Utilities();


  before("Open App", async () => {
    // await browser.url('https://abc-5021.pc-staging.com/admin');
     await browser.url(utilities.URL) //'https://abc-5021.pc-staging.com/admin'
     await browser.maximizeWindow();
 })



/* -----------------------------------------------------------------
 
        -------------  Page  ----------------

 ----------------------------------------------------------------- */



  it(('Sites, Page automation'), async () => {
    //await browser.url('https://prolific-cloud.pc-staging.com/');
    // await browser.url('https://prolific1.pc-staging.com/signin');
    // await browser.url(utilities.URL); //'https://abc-5021.pc-staging.com/admin'
    // await browser.maximizeWindow();

    await utilities.Signin();


    await site.SitesClick.click();


    await browser.takeScreenshot();
    
    await site.pageClick.click();
    await site.deletePage.click();
    await site.confirmDeletePage.click();
    await site.createNew.click();
    await site.pageName.setValue("Tamporary");
    await site.addSection.click();
    await site.singleSection.click();
    await site.eyeIcon.click();
    await site.eyeIcon.click();



    await browser.pause(5000);
    await browser.takeScreenshot();

    await site.useTemplatePage.click();
    await browser.pause(4000);
    await site.paginationFour.click();
    await browser.pause(4000);
    await site.importPage.click();
    await browser.pause(2000);
    await site.pageSave.click();
    await browser.pause(4000);
    await site.pagePublish.click();
    await browser.pause(4000);
    
  })

    /* -----------------------------------------------------------------
    
           -------------  Menu Set  ----------------

      ----------------------------------------------------------------- */
   it(('Sites, Menu Set automation'), async () => {
    await site.menuSetClick.click();
   
    await site.createNewMenuSet.click();
    await browser.pause(2000);
    await site.pageMenuSet.click();
    await browser.pause(3000);
    await site.customLinkClickMenuSet.click();
    await site.labelClickMenuSet.setValue("four");
    const linkMenuset="https://www.google.com/"; // https://prolific1.pc-staging.com/admin/menuset/create
    await site.linkClickMenuSet.setValue(linkMenuset);
    await browser.pause(2000);
    await site.nameMenuSet.setValue("Testing2");
    await site.addMenuMenuSet.click();
    await browser.pause(2000);
    await site.saveMenuMenuSet.click();
    await browser.pause(4000);
    

   })

    /* -----------------------------------------------------------------
 
        -------------  Header Set  ----------------

   ----------------------------------------------------------------- */

   it(('Sites, Header Set automation'), async () => {
    await site.headerSetClick.click();
    await site.deleteHeaderPage.click();
    await site.confirmDeleteHeaderPage.click();
    await site.createNewHeaderSet.click();
    await site.setHeaderName.setValue("Abc Header");
    await site.addSection.click();
    await site.singleSection.click();
    
    await site.headerSave.click();
    
    await browser.pause(4000);
    await site.headerPublish.click();
    await browser.pause(4000);

   })


    /* -----------------------------------------------------------------
        
               -------------  Footer Set  ----------------
    
    ----------------------------------------------------------------- */


    it(('Sites, Footer Set automation'), async () => {
    await site.footerClick.click();
    await site.deleteFooterPage.click();
    await site.confirmDeleteFooterPage.click();
    await browser.pause(3000);
    await site.createNewFooterClick.click();
    await site.pageNameFooter.setValue("Footer");

    await site.addSection.click();
    await site.singleSection.click();
    //await site.icon.click();
    await site.footerSave.click();
    await browser.pause(4000);
    await site.footePublish.click();
    await browser.pause(4000);
    await browser.takeScreenshot();

    })
    

    /* -----------------------------------------------------------------
   
          -------------  Media Library  ----------------

  ----------------------------------------------------------------- */

  it(('Sites, Media Library automation'), async () => {
    await site.mediaLibraryClick.click();
    //await site.leavePageConfirm.click();

    const filePath = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\youtube.jpg'
    const remoteFilePath = await browser.uploadFile(filePath)


    await browser.execute(() => {

      document.getElementById("file").style.display = "block";
    })


    await site.imgAdd.setValue(remoteFilePath); // //input[@id='file-upload']

    await site.nameMediaLibrary.setValue("You67tube");
    await site.allTextMediaLibrary.setValue("Ab67c");
    await site.captionMediaLibrary.setValue("I89con");
    await site.textareaMediaLibrary.setValue("Img Uploa78d Successfully");
    await site.saveMediaLibrary.click();
    await browser.takeScreenshot();
    await browser.pause(5000);


  })
})