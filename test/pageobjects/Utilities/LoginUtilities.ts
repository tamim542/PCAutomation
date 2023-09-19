class Utilities{

    public URL:string = "https://abc-5021.pc-staging.com/admin"; 
    
    public async Signin(){

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


    }



    public async imgUpload(abc){
        // const filePath = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\youtube.jpg'
        // const remoteFilePath = await browser.uploadFile(filePath)
        //console.log("=============",fileUpload);
        // await browser.execute(() => {
        //    // console.log("=============",fileUpload);
        //     document.getElementById(abc).style.display = "block";
        // })
    }
}
export default Utilities;