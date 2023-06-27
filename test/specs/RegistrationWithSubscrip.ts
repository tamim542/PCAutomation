import LocatorSubsReg from "../pageobjects/Locators/Locators.js";

describe(('registration with subscription'), () => {

    const subsReg = new LocatorSubsReg();
    it(('registration'), async () => {

        await browser.url("https://pc-staging.com/"); //  https://prolific-cloud.pc-staging.com/
        await browser.maximizeWindow();
        await browser.takeScreenshot();
        await subsReg.pricingPlan.click();
        await subsReg.ententerpriseYearlyer.click();

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        // await browser.closeWindow()
        await browser.switchToWindow(handles[1])
 
        await subsReg.name.setValue("Tauhid Bhuiyan");
        await subsReg.email.setValue("subsReg@yopmail.com");
        await subsReg.website.setValue("Testing");
        await subsReg.phoneNo.setValue("029292");
        await subsReg.password.setValue("123456789");
        await subsReg.confirmPassword.setValue("123456789");
        await browser.takeScreenshot();
        await subsReg.saveButtonReg.click();
        await browser.pause(3000);
        await browser.takeScreenshot();


    })
})