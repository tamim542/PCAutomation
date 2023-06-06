//const Home = require('../pageobjects/Locators/Home');

import LocatorHome from "../pageobjects/Locators/Locators.js";
//const home = new LocatorHome();
describe('Check Business site Home Page All Component and Button Functionality', () => {

  const home = new LocatorHome();

  it('home page functionality check', async () => {

    await browser.url("https://pc-staging.com/"); //  https://prolific-cloud.pc-staging.com/
    await browser.maximizeWindow();
    await browser.pause(1000);

    await home.clickGetStarted.click();
    //await home.clickGetStarted.click();

    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])

    await browser.switchToWindow(handles[1])

    await home.crossButton.click();
    
    await browser.switchToWindow(handles[0])

    await browser.navigateTo('https://pc-staging.com/website');
    await browser.pause(1000);
    await browser.back();

    //arrowRightSignClick
    await home.arrowRightSignClick.click();

    //arrowLightSignClick
    await home.arrowLeftSignClick.click();


    /* -----------------------------------------------------------------
   
      ------------- Explore Cloud section ----------------

    ----------------------------------------------------------------- */
    const box = $("//body/div[@id='__next']/main[1]/section[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]");
    // scroll to specific element.
    await box.scrollIntoView();
    await browser.pause(3000);


    (await home.pageBuilder).click();
    (await home.preBuiltTemplate).click();
    (await home.customDomain).click();
    (await home.bloggingPlatform).click();
    (await home.advancedSEO).click();

    /* -----------------------------------------------------------------
    
     ------------- Forget worries About coding ----------------

     ----------------------------------------------------------------- */

    (await home.takeATourFor1year).click();

    const handles1 = await browser.getWindowHandles()
    await browser.switchToWindow(handles1[0])
    // await browser.closeWindow()
    await browser.switchToWindow(handles1[1])


    await browser.switchToWindow(handles1[0])

    await browser.pause(2000);

      /* -----------------------------------------------------------------
    
       ------------- Leave Your Footprint Everywhere ----------------

      ----------------------------------------------------------------- */

      await home.videoPlay.click();
      await browser.pause(2000);
      await home.crossSignClick.click();

      /* -----------------------------------------------------------------
    
       ------------- Frequently asked questions ----------------

      ----------------------------------------------------------------- */
     
      // const myButton = await $("//button[contains(text(),'Which is the quickest and easiest website builder?')]")
      // await myButton.click({ button: 2, x: 30, y: 40, skipRelease:true })
      // await browser.pause(2000);
      //await home.elementOne.click();
     // await browser.pause(5000);
      // await home.elementTwo.click();
      // await browser.pause(2000);
      // await home.elementThree.click();
      // await browser.pause(2000);
      // await home.elementFour.click();
      // await browser.pause(2000);
      // await home.elementFive.click();
      // await browser.pause(2000);
      // await home.elementSix.click();
      // await browser.pause(2000);


       /* -----------------------------------------------------------------
    
       ------------- Social icon hover effect check and click----------------

      ----------------------------------------------------------------- */

    await  home.twette.scrollIntoView()
    await home.twette.moveTo();
    await browser.pause(2000);

    await home.facebook.moveTo();
    await browser.pause(2000);
    await home.linkedIn.moveTo();
    await browser.pause(2000);
    await home.youtube.moveTo();
    await browser.pause(2000);

    await  home.twette.click();
    await browser.pause(2000);
    await home.facebook.click();
    await browser.pause(2000);
    await home.linkedIn.click();
    await browser.pause(2000);
    await home.youtube.click();
    await browser.pause(2000);

   

  })
})