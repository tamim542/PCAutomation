import Billing from '../pageobjects/Locators/Locators.js';

describe(('Billing Page automaed'), () => {
  const billing = new Billing();

  it(('card subscription pricing'), async () => {
    //await browser.url('https://prolific-cloud.pc-staging.com/');
    await browser.url('https://prolific1.pc-staging.com/signin');
    //await browser.url('https://abc-5021.pc-staging.com/admin');
    await browser.maximizeWindow();


    const emailSign = $("//input[@id='field-3']");
    const passSign = $("//input[@id='field-4']");

    //await emailSign.setValue('prolificcloud@yopmail.com');
    //await emailSign.setValue('abcd1@yopmail.com');
    //await passSign.setValue('abc12345');
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
    await browser.pause(5000);

    (await billing.billingClick).click();


    /* -----------------------------------------------------------------
 
    -------------  Card ----------------

   ----------------------------------------------------------------- */

    (await billing.cardClick).click();
    (await billing.createNewCard).click();
    (await billing.cardHolderName).setValue("Tamim Bhuiyan");
    (await billing.cardEmail).setValue("tamim@yopmail.com");
    await browser.pause(4000);

    ////=================================================
    //iframe handle======================================

    const cardNumberIframe = "//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/iframe[1]"; // <iframe id="login-box"...

    //await browser.url(LOGIN_URL);

    const frame = await browser.$(cardNumberIframe);

    await browser.switchToFrame(frame); // OK! Firefox and Chrome
    //await browser.switchToFrame(frame.elementId); // Fail! Firefox and Chrome
    await browser.switchToFrame(null); // OK! Firefox and Chrome
    await browser.switchToFrame(0); // OK! Firefox and Chrome




    await billing.cardNumber.setValue("4242 4242 4242 4242");
    (await billing.cardMonthYear).setValue("1123");
    await browser.pause(4000);
    (await billing.cardMonthYear).setValue("1112");
    
    //const cvcinf=$('//*[@id="root"]/form/div/div[2]/span[2]/span[2]/span/span/input');
    const cvcinf=$('//input[@name="cvc"]');
    (await cvcinf).clearValue();
    await cvcinf.setValue("123");
    await browser.pause(4000);
    await browser.switchToParentFrame();
    //await browser.switchToFrame(null);
    await billing.cardSaveButton.click();


    /* -----------------------------------------------------------------
    
           -------------  subscription  ----------------

      ----------------------------------------------------------------- */
  //     await billing.billingClick.click();
  //  await billing.subscriptionClick.click();
   //await billing.subscriptionActive.click();
   //await billing.subcriptionCancel.click();







    /* -----------------------------------------------------------------
    
           -------------  pricing  ----------------

      ----------------------------------------------------------------- */

      await billing.pricingClick.click();
      await billing.upgradeMonthly.click();

      // await (await billing.pricingName).setValue("tamim khan");
      // (await billing.pricingEmail).setValue("tamim@yopmail.com");
      // (await billing.pricingPromoCode).setValue("123");
      // await billing.pricingverify.click();

       //const pricingCardNumberIframe = '//iframe[@title="Secure card payment input frame"]'; // <iframe id="login-box"...
      //  await browser.switchToFrame($('//iframe[@title="Secure card payment input frame"]'));
     
      //  const Pricingframe = await browser.$(pricingCardNumberIframe);
  
      //  await browser.switchToFrame(Pricingframe); 
      // await browser.switchToFrame(null); // OK! Firefox and Chrome
      // await browser.switchToFrame(0); // OK! Firefox and Chrome

      //await (await billing.pricingCardNumber).setValue("4242 4242 4242 4242");


  


      await browser.pause(4000);




  })
})