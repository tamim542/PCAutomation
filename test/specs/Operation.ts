import Operation from '../pageobjects/Locators/Locators.js';
describe(('Operation automation'), () => {
    const operation = new Operation();
    it(('operation, Page automation'), async () => {
       
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


        await operation.operationClick.click();

        /* -----------------------------------------------------------------
     
            -------------  user  ----------------
 
       ----------------------------------------------------------------- */

     (await operation.userClick).click();
     await operation.createNewOperation.click();

     (await operation.firstNameOperation).setValue("Tamim");
     (await operation.lastNameOperation).setValue("Bhuiyan");
     (await operation.emailOperation).setValue("abc@yopmail.com");
     (await operation.phoneOperation).setValue("0198999");
     (await operation.passworOperation).setValue("123456789");
     (await operation.confirmPassordOperation).setValue("123456789");
     await browser.pause(2000);
     await operation.saveDataOperation.click();
     
     await browser.pause(4000);

      /* -----------------------------------------------------------------
     
            -------------  Click Opeation menu and Click User sub menu check User List Page with Pagination  ----------------
 
       ----------------------------------------------------------------- */

        (await operation.userBackClick).click();

        (await operation.showPage).selectByIndex(1);
        await browser.pause(2000);
        (await operation.gaterSignClick).click();
        await browser.pause(2000);
        (await operation.upButton).click();
        await browser.pause(4000);






    })
})