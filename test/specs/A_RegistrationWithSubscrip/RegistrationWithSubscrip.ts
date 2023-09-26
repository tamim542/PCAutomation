import LocatorSubsReg from "../../pageobjects/Locators/Locators.js";

describe(('registration with subscription'), () => {

    const subsReg = new LocatorSubsReg();
    it(('registration'), async () => {

        await browser.url("https://pc-staging.com/"); //  https://prolific-cloud.pc-staging.com/    https://testing1.pc-staging.com/admin
        await browser.maximizeWindow();
        await browser.takeScreenshot();
        await subsReg.pricingPlan.click();
        await subsReg.ententerpriseYearlyer.click();

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        // await browser.closeWindow()
        await browser.switchToWindow(handles[1])
 
        await subsReg.name.setValue("Tauhid Bhuiyan");
        await subsReg.email.setValue("subsReg1@yopmail.com");
        await subsReg.website.setValue("Testing1");
        await subsReg.phoneNo.setValue("0292921");
        await subsReg.password.setValue("1234567891");
        await subsReg.confirmPassword.setValue("1234567891");
        await browser.takeScreenshot();
        await subsReg.saveButtonReg.click();
        await browser.pause(4000);
        await browser.takeScreenshot();


    })
})