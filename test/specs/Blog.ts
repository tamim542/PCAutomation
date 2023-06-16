import Blog from '../pageobjects/Locators/Locators.js';
describe(('Sites automation'), () => {
    const blog = new Blog();
    it(('Sites, Page automation'), async () => {
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


        await blog.blogClick.click();

        /* -----------------------------------------------------------------
     
            -------------  Author  ----------------
 
       ----------------------------------------------------------------- */

        await blog.authorClick.click();
        await blog.createNewAuthor.click();
        await blog.nameAuthor.setValue("Tamim");
        await blog.emailAuthor.setValue("tamim542.prolific@gmail.com");
        await blog.facebookLinkAuthor.setValue("https://faceook.com");
        await blog.instagramAuthor.setValue("https://intagram.com");
        await blog.twitterAuthor.setValue("https://twitter.com");
        await blog.youtubeAuthor.setValue("https://youtube.com");
        await blog.linkedinAuthor.setValue("https://linkedin.com");
        await blog.uploadAuthor.click();

        const filePath = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\youtube.jpg'
        const remoteFilePath = await browser.uploadFile(filePath)




        // const Div = $('//label[@class="chakra-form__label css-4sassp"]');
        const UploadAuthor = $('//input[@id="fileUpload"]');

        await browser.execute(() => {

            document.getElementById("fileUpload").style.display = "block";
        })

        //await UploadAuthor.waitForDisplayed();
        await UploadAuthor.setValue(remoteFilePath); // //input[@id='file-upload']
        // const saveClickToUpload = $("//body/div[4]/div[4]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/form[1]/div[5]/button[1]");
        await blog.saveUploadAuthor.click();
        await browser.pause(3000);


        await blog.authorDetailsAuthor.setValue("I am an employee of Prolific Cloud");
        await blog.saveAuthor.click();
        await browser.pause(5000);
        /* -----------------------------------------------------------------
    
           -------------  Tag  ----------------

      ----------------------------------------------------------------- */

        await blog.tagClick.click();
        await blog.createNewTag.click();
        await blog.nameTag.setValue("Tamim Bhuiyan");
        await blog.productTypeTag.click();
        await blog.saveTag.click();

        await browser.pause(5000);


        /* -----------------------------------------------------------------
       
      -------------  Post  ----------------
      
      ----------------------------------------------------------------- */

        await blog.postClick.click();
        await blog.createNewPost.click();
        await blog.namePost.setValue("Tamim");
        await blog.slugPost.setValue("mcasm");
        await blog.uploadPost.click();

       
        const filePath1 = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\youtube.jpg'
        const remoteFilePath1 = await browser.uploadFile(filePath1)
     
     
      await browser.execute(()=>{
      
       document.getElementById("fileUpload").style.display="block";
      })
    
    
     await blog.imgUploadPost.setValue(remoteFilePath1);


    })
})