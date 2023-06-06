import Configuration from '../pageobjects/Locators/Locators.js';

describe(('all configuration check'), () => {
    const configuration = new Configuration();

    it(('configuration automate'), async () => {
        await browser.url("https://prolific1.pc-staging.com/signin");

        await browser.maximizeWindow();


        const emailSign = $('//input[@type="email" ]');
        const passSign = $("//input[@id='field-4']");

        //await emailSign.setValue('prolificcloud@yopmail.com');
        await emailSign.setValue('tamim@yopmail.com');
        await passSign.setValue('123456789');

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

        //--------------------------- [AT0022] configuration page -----------------------------------

        await configuration.configurationClick.click();

        /* -----------------------------------------------------------------
   
        ------------- chat config ----------------

        ----------------------------------------------------------------- */
        (await configuration.chatConfig).click();

        // const selectBox = await $('#selectbox');
        const value = await configuration.selectTawakTO.getValue();


        await configuration.selectTawakTO.selectByAttribute('value', 'manychat');

        (await configuration.whatsUpLink).setValue("https://whatsup.com");
        (await configuration.activeWhatsupClick).click();
        (await configuration.chatConfigSaveClick).click();



        /* -----------------------------------------------------------------
       
            ------------- google analytics ----------------
    
        ----------------------------------------------------------------- */

        await configuration.googleAnalyticsClick.click();

        await configuration.googleAnalytics4MeasurementID.setValue("123");
        await configuration.googleTagManagerCode.setValue("5668799");
        await configuration.googleAnalytics4Active.click();
        await configuration.googleTagManagerActive.click();
        await configuration.googleAnalyticsSave.click();
        await browser.pause(2000);

        /* -----------------------------------------------------------------
        
           ------------- Mail Config ----------------
    
          ----------------------------------------------------------------- */

        //await configuration.configurationClick.click();

        // await browser.switchToFrame(configuration.iframeSwitch);
        await configuration.mailConfigClick.click();
        await configuration.mailConfigName.setValue("Rahin Khan");
        await configuration.sMTPServer.setValue("abc");
        await configuration.sMTPPort.setValue("255.172.16.0");

        //const valueAUTO = await configuration.selectConnectionSecurity.getValue();

        await configuration.selectConnectionSecurity.selectByIndex(1);

        //await configuration.selectConnectionSecurity.selectByAttribute('valueAUTO', 'AUTO');


        (await configuration.emailAddress).setValue("tamim@yopmail.com");
        (await configuration.passwordSet).setValue("123456789");


        (await configuration.mailCOnfigSave).click();
        await browser.pause(5000);

        /* -----------------------------------------------------------------
      
         ------------- Google Search console  ----------------
  
        ----------------------------------------------------------------- */
        await configuration.googleSearchConsoleClick.click();

        await configuration.contentField.setValue("Hi I am there.");
        (await configuration.gooogleSearchActive).click();
        (await configuration.googleSearchSave).click();



        /* -----------------------------------------------------------------
        
           ------------- Google adSense  ----------------
    
          ----------------------------------------------------------------- */

        await configuration.googleAdSenseClick.click();

        await configuration.googleAdSenseclientCode.setValue("120");
        await configuration.googleAdSenseActive.click();
        await configuration.googleAdSenseSAve.click();


        /* -----------------------------------------------------------------
        
           ------------- Pinterest Verification  ----------------
    
          ----------------------------------------------------------------- */
         await configuration.pinterestVerificationClick.click();

         (await configuration.pinterestVerificationContent).setValue("abcdef");
         (await configuration.pinterestVerificationActive).click();
         (await configuration.pinterestVerificationSave).click();


         /* -----------------------------------------------------------------
    
       -------------  Integration ----------------

      ----------------------------------------------------------------- */
      (await configuration.integrationClick).click();
      await browser.pause(5000);
      (await configuration.integrationInstall).click();

      (await configuration.integrationStoreUID).setValue("abcdef12");
      (await configuration.integrationApiKey).setValue("abcdef34");
      (await configuration.integrationSecretKey).setValue("abcdef67");
      (await configuration.integrationSave).click();
       await browser.pause(5000);

       




    })





})