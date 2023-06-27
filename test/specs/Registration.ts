describe('registration field fill up', () => {

    it('registration field input', async () => {
        await browser.url('https://pc-staging.com/');
        await browser.pause(3000);

        const getStartedreg = $('//*[@id="__next"]/header/div/div/div/div[3]/div/a');
        await getStartedreg.click();

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        // await browser.closeWindow()
        await browser.switchToWindow(handles[1])

        const nameInputBox = $("#field-4");
        const emailField = $("//input[@id='field-5']");
        const webSiteField = $("//input[@id='field-6']");
        const phnField = $("//body/div[3]/div[4]/div[1]/section[1]/div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/input[1]");
        const passField = $("//input[@id='field-8']");
        const confirmPassField=$("//input[@id='field-9']");
        const svaeButton=$("//button[contains(text(),'Save')]");


        await nameInputBox.setValue('Textinput');
        await emailField.setValue('abcd1@yopmail.com');
        await webSiteField.setValue('ABC');
        await phnField.setValue('019898');
        await passField.setValue('abc12345');
        await confirmPassField.setValue('abc12345');
        await svaeButton.click();
        await browser.takeScreenshot();
        await browser.pause(5000);

        // sign in 



    });

   

});