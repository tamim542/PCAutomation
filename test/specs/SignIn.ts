import SignInWebsite from '../pageobjects/Locators/Locators.js';

describe('signin Page load', () => {
    const singninWebsite = new SignInWebsite();
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
        await browser.pause(5000);


        const websetting = $("//span[contains(text(),'Website Settings')]");
        websetting.click();

        const theme = $("//span[contains(text(),'Theme')]");
        theme.click();

        const logoUpload = $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/button[1]");
        await logoUpload.click();


       
      


         const filePath = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\youtube.jpg'
         const remoteFilePath = await browser.uploadFile(filePath)
        
        

        
        // const Div = $('//label[@class="chakra-form__label css-4sassp"]');
         const clickToUpload = $('//input[@id="fileUpload"]');
       
         await browser.execute(()=>{
         
          document.getElementById("fileUpload").style.display="block";
         })
       
        await clickToUpload.waitForDisplayed();
        await clickToUpload.setValue(remoteFilePath); // //input[@id='file-upload']
        const saveClickToUpload = $("//body/div[4]/div[4]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/form[1]/div[5]/button[1]");
        await saveClickToUpload.click();

        //----------------- fav icon upload ------------------------
        await singninWebsite.favIcon.click();
        
       
       
        await browser.execute(()=>{
        
         document.getElementById("fileUpload").style.display="block";
        })
      
       await clickToUpload.waitForDisplayed();
       await clickToUpload.setValue(remoteFilePath); 
       (await singninWebsite.savefavIcon).click();
       await singninWebsite.siteFontSelect.click();
       await singninWebsite.siteFontSelectName.click();

       await browser.pause(4000);
       await singninWebsite.saveAllData.click();

        await browser.pause(4000);

    })


})