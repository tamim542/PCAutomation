import Sites from '../pageobjects/Locators/Locators.js';

describe('signin Page load', () => {
    const site = new Sites();
    it('signin button click', async () => {

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

        /* -----------------------------------------------------------------
    
           -------------  Sites  ----------------

      ----------------------------------------------------------------- */

        (await site.SitesClick).click();


        /* -----------------------------------------------------------------
    
           -------------  Page  ----------------

      ----------------------------------------------------------------- */
        (await site.pageClick).click();
        (await site.createNew).click();
        (await site.addSection).click();
        await browser.pause(4000);
        (await site.singleSection).click();
        (await site.icon).click();
        await browser.pause(4000);


        // browser.switchToFrame($(".demo-frame"))
        //identify source element

        //identify target element
        //const src = $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/*[1]");
        
        
        const dragable = $('//div[@data-rbd-drag-handle-draggable-id="paragraph"]');
        const dropable = $("//p[contains(text(),'Column')]");
       // const trg = $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[2]/*[1]");

        await dragable.dragAndDrop(await dropable);
        //await src.dragAndDrop({ x: 100, y: 200 });
        (await site.Heading).setValue("abc");
        await browser.pause(4000);
        const getHeading = $('//div[@class="page-component-wrapper css-1ru702c"]');
        console.log("==============++++++++++++=================", getHeading.getText());
       
        //site.dragAbleTODropAble();
       



    })


})