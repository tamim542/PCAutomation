import UI_WebsiteSetting from '../../pageobjects/Locators/UI_Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Operation UI Automation'), () => {
    const uiwebSetting = new UI_WebsiteSetting();
    const utilities = new Utilities();

    before("Open App", async () => {
        await browser.url('https://abc-5021.pc-staging.com/admin');
        await browser.maximizeWindow();
    })

     //-------------------------------------------------Website Setting UI Testing--------------------------------------------

    it(('Website Setting, Page automation'), async () => {
        
        await utilities.Signin();

       

        const websettingText = await uiwebSetting.UI_websiteSetting.getText();
        console.log('Website Setting Lebel Text::===', websettingText);
        await expect(uiwebSetting.UI_websiteSetting).toHaveText("Website Settings");

        await uiwebSetting.UI_websiteSetting.click();

       


    })    

        /* -----------------------------------------------------------------
     
           -------------  Theme  ----------------
    
      ----------------------------------------------------------------- */

    it(('Theme Of Website Setting'), async()=>{

        const themeText = await uiwebSetting.UI_themeWebsiteSetting.getText();
        console.log('Theme Lebel test= Text::===', themeText);
        await expect(uiwebSetting.UI_themeWebsiteSetting).toHaveText("Theme");

        await uiwebSetting.UI_themeWebsiteSetting.click();


        const themeSettingText = await uiwebSetting.UI_themeSettingTheme.getText();
        console.log('Theme Setting Lebel Text::===', themeSettingText);
        await expect(uiwebSetting.UI_themeSettingTheme).toHaveText("Theme Settings");

        const logoText = await uiwebSetting.UI_logoTheme.getText();
        console.log(' Logo Text::===', logoText);
        await expect(uiwebSetting.UI_logoTheme).toHaveText("Logo");

        const favIconText = await uiwebSetting.UI_favIconTheme.getText();
        console.log(' Fav Icon Text::===', favIconText);
        await expect(uiwebSetting.UI_favIconTheme).toHaveText("Fav Icon");

        const websiteColorText = await uiwebSetting.UI_webSiteColorTheme.getText();
        console.log(' Website Color Text::===', websiteColorText);
        await expect(uiwebSetting.UI_webSiteColorTheme).toHaveText("Website Colors");

        const primaryColorText = await uiwebSetting.UI_primaryColorTheme.getText();
        console.log(' Primary Color Text::===', primaryColorText);
        await expect(uiwebSetting.UI_primaryColorTheme).toHaveText("Primary Color");

        const secondaryColorText = await uiwebSetting.UI_secondaryColorTheme.getText();
        console.log(' Secondary Color Text::===', secondaryColorText);
        await expect(uiwebSetting.UI_secondaryColorTheme).toHaveText("Secondary Color");

        const accentColorText = await uiwebSetting.UI_accentColorTheme.getText();
        console.log(' Accent Color Text::===', accentColorText);
        await expect(uiwebSetting.UI_accentColorTheme).toHaveText("Accent Color");

        const siteFontText = await uiwebSetting.UI_siteFontTheme.getText();
        console.log(' Site Font Text::===', siteFontText);
        await expect(uiwebSetting.UI_siteFontTheme).toHaveText("Site Font");

        const showSigninPageText = await uiwebSetting.UI_showSigninPageTheme.getText();
        console.log('Show Signin Page Text::===', showSigninPageText);
        await expect(uiwebSetting.UI_showSigninPageTheme).toHaveText("Show Signin Page");

        await expect(uiwebSetting.UI_saveTheme).toBeClickable();

      


    })

   


    })