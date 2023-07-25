import UI_Configuration from '../../pageobjects/Locators/UI_Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Operation UI Automation'), () => {
    const uiConfiguration = new UI_Configuration();
    const utilities = new Utilities();

    before("Open App", async () => {
        await browser.url('https://abc-5021.pc-staging.com/admin');
        await browser.maximizeWindow();
    })

    //-------------------------------------------------Configuration UI Testing--------------------------------------------

    it(('Configuration, Page automation'), async () => {

        await utilities.Signin();



        const configurationText = await uiConfiguration.UI_configuration.getText();
        console.log('Configuration Lebel Text::===', configurationText);
        await expect(uiConfiguration.UI_configuration).toHaveText("Configuration");

        await uiConfiguration.UI_configuration.click();




    })

    /* -----------------------------------------------------------------
 
       -------------  Chat Config  ----------------
 
     ----------------------------------------------------------------- */

    it(('Chat Config Of Configuration'), async () => {

        
        
        const chatConfigText = await uiConfiguration.UI_chatConfigConfiguration.getText();
        console.log('Chat Config Lebel Text::===', chatConfigText);
        await expect(uiConfiguration.UI_chatConfigConfiguration).toHaveText("Chat Config");

        await uiConfiguration.UI_chatConfigConfiguration.click();


        const chatConfigInsideText = await uiConfiguration.UI_chatConfigInsideConfiguration.getText();
        console.log('Chat Config Lebel Text::===', chatConfigInsideText);
        await expect(uiConfiguration.UI_chatConfigInsideConfiguration).toHaveText("Chat Config");

       
        await expect(uiConfiguration.UI_dropdownChatConfig).toExist();

        const twaktoText = await uiConfiguration.UI_twaktoChatConfig.getText();
        console.log('Twakto Config Lebel Text::===', twaktoText);
        await expect(uiConfiguration.UI_twaktoChatConfig).toHaveText("TWAKTO Config");

        const propertyIdText = await uiConfiguration.UI_propertyIdChatConfig.getText();
        console.log('Property Id Lebel Text::===', propertyIdText);
        await expect(uiConfiguration.UI_propertyIdChatConfig).toHaveText("Property ID");

        const chatIdText = await uiConfiguration.UI_chatIdChatConfig.getText();
        console.log('Chat Id Lebel Text::===', chatIdText);
        await expect(uiConfiguration.UI_chatIdChatConfig).toHaveText("Chat ID");

        await expect(uiConfiguration.UI_saveChatConfig).toBeClickable();


    })


    /* -----------------------------------------------------------------
 
       -------------  Google Analytics  ----------------
 
     ----------------------------------------------------------------- */

    it(('Google Analytics UI Of Configuration'), async () => {

        
        
        const chatConfigText = await uiConfiguration.UI_chatConfigConfiguration.getText();
        console.log('Chat Config Lebel Text::===', chatConfigText);
        await expect(uiConfiguration.UI_chatConfigConfiguration).toHaveText("Chat Config");

        await uiConfiguration.UI_chatConfigConfiguration.click();




    })







})




