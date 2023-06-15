import Sites from '../pageobjects/Locators/Locators.js'; 
describe(('Sites automation'),()=>{
    const site = new Sites();
    it(('Sites, Page automation'),async()=>{
          //await browser.url('https://prolific-cloud.pc-staging.com/');
       // await browser.url('https://prolific1.pc-staging.com/signin');
       await browser.url('https://abc-5021.pc-staging.com/admin');
       await browser.maximizeWindow();
     

       const emailSign = $("//input[@id='field-3']");
       const passSign = $("//input[@id='field-4']");

       //await emailSign.setValue('prolificcloud@yopmail.com');
       await emailSign.setValue('abcd1@yopmail.com');
       await passSign.setValue('abc12345');
       //await emailSign.setValue('tamim@yopmail.com');
       //await passSign.setValue('123456789');

       const firstNumber = await $("//span[@id='securityNumberOne']");
       const twoNumber = $("//span[@id='securityNumberTwo']");

       const captchaCode = $("//input[@id='field-5']");

       let numOne = await firstNumber.getText();
       let numTwo = await twoNumber.getText();
       console.log("numOne===================================================================================" + numOne + ' ' + numTwo);

       let oneInt = parseInt(numOne);
       let twoInt = parseInt(numTwo);

       console.log("num one and two============================================================================" + oneInt + ' ' + twoInt);

       let sum = oneInt + twoInt;
       console.log("sum================================================================" + sum);
       await captchaCode.setValue(sum);

       await $("//button[contains(text(),'Log in')]").click();
       

       await site.SitesClick.click();

       /* -----------------------------------------------------------------
    
           -------------  Page  ----------------

      ----------------------------------------------------------------- */

       await site.pageClick.click();
       await site.createNew.click();
       await site.addSection.click();
       await site.singleSection.click();
       await site.icon.click();
   

    //   await site.dragAble.dragAndDrop(site.dropAble);

    //   // drag and drop relative from current position
    //   await site.dragAble.dragAndDrop({ x: 100, y: 200 })

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