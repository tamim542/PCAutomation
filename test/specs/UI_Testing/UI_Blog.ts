import UI_Blog from '../../pageobjects/Locators/UI_Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';
describe(('Sites automation'), () => {
    const uiBlog = new UI_Blog();
    const utilities = new Utilities();


    it(('Sites, Page automation'), async () => {
        //await browser.url('https://prolific-cloud.pc-staging.com/');
        // await browser.url('https://prolific1.pc-staging.com/signin');
        await browser.url('https://abc-5021.pc-staging.com/admin');
        await browser.maximizeWindow();

        await utilities.Signin();

        //-------------------------------------------------Blog UI Testing--------------------------------------------

        const blogText = await uiBlog.UI_blogClick.getText();
        console.log('Blog Lebel Text::===', blogText);
        await expect(uiBlog.UI_blogClick).toHaveText("Blog");

        await uiBlog.UI_blogClick.click();

        /* -----------------------------------------------------------------
     
           -------------  Author  ----------------
    
      ----------------------------------------------------------------- */
        const authorText = await uiBlog.UI_authorClick.getText();
        console.log('Author Lebel Text::===', authorText);
        await expect(uiBlog.UI_authorClick).toHaveText("Author");

        await uiBlog.UI_authorClick.click();

        await expect(uiBlog.UI_searchAuthor).toExist();
      
        const createNewText = await uiBlog.UI_createNew.getText();
        console.log('Create New Lebel Text::===', createNewText);
        await expect(uiBlog.UI_createNew).toHaveText("Create new");
       
        await expect(uiBlog.UI_createNew).toBeClickable();


        const nameText = await uiBlog.UI_nameAuthor.getText();
        console.log('NAme Lebel Text::===', nameText);
        await expect(uiBlog.UI_nameAuthor).toHaveText("NAME");

        const emailText = await uiBlog.UI_emailAuthor.getText();
        console.log('Email Lebel Text::===', emailText);
        await expect(uiBlog.UI_emailAuthor).toHaveText("EMAIL");

        const addedOnText = await uiBlog.UI_addedOnAuthor.getText();
        console.log('Create New Lebel Text::===', addedOnText);
        await expect(uiBlog.UI_addedOnAuthor).toHaveText("ADDED ON");

        const socialLinkText = await uiBlog.UI_socialLinkAuthor.getText();
        console.log('Social Link Lebel Text::===', socialLinkText);
        await expect(uiBlog.UI_socialLinkAuthor).toHaveText("SOCIAL LINKS");

        const detailsText = await uiBlog.UI_detailsAuthor.getText();
        console.log('Details Lebel Text::===', detailsText);
        await expect(uiBlog.UI_detailsAuthor).toHaveText("DETAILS");

        const activeText = await uiBlog.UI_activeAuthor.getText();
        console.log('Active Lebel Text::===', activeText);
        await expect(uiBlog.UI_activeAuthor).toHaveText("ACTIVE");

        await uiBlog.UI_authorClick.click();

        // await expect(uiBlog.UI_nameAuthorField).toExist();
        // await expect(uiBlog.UI_emailAuthorField).toExist();
        // await expect(uiBlog.UI_facebookLinkAuthor).toExist();
        // await expect(uiBlog.UI_instagramAuthor).toExist();
        // await expect(uiBlog.UI_twitterAuthor).toExist();
        // await expect(uiBlog.UI_youtubeAuthor).toExist();

        // const saveAuthorText = await uiBlog.UI_saveAuthor.getText();
        // console.log('Save Lebel Text::===', saveAuthorText);
        // await expect(uiBlog.UI_saveAuthor).toHaveText("Save");


        /* -----------------------------------------------------------------
            
                  -------------  media library  ----------------
           
         ----------------------------------------------------------------- */

        // (await uiSite.UI_mediaLibraryClick).click();

        // const nameML = await uiSite.UI_nameML.getText();
        // console.log('Name Lebel Text::===', nameML);
        // await expect(uiSite.UI_nameML).toHaveText("Name");

        // const allTextML = await uiSite.UI_allText.getText();
        // console.log('All Text Lebel Text::===', allTextML);
        // await expect(uiSite.UI_allText).toHaveText("Alt Text");

        // const captionML = await uiSite.UI_captionML.getText();
        // console.log('Caption Lebel Text::===', captionML);
        // await expect(uiSite.UI_captionML).toHaveText("Caption");

        // const descriptionML = await uiSite.UI_descriptionML.getText();
        // console.log('Description Lebel Text::===', descriptionML);
        // await expect(uiSite.UI_descriptionML).toHaveText("Description");


        // await expect(uiSite.UI_AllTabML).toBeClickable();
        // const allTabML = await uiSite.UI_AllTabML.getText();
        // console.log('All Lebel Text::===', allTabML);
        // await expect(uiSite.UI_AllTabML).toHaveText("All");


        // await expect(uiSite.UI_imagML).toBeClickable();
        // const imgML = await uiSite.UI_imagML.getText();
        // console.log('Image Lebel Text::===', imgML);
        // await expect(uiSite.UI_imagML).toHaveText("Image");


        // await expect(uiSite.UI_VideosML).toBeClickable();
        // const videosML = await uiSite.UI_VideosML.getText();
        // console.log('Videos Lebel Text::===', videosML);
        // await expect(uiSite.UI_VideosML).toHaveText("Videos");


        // await expect(uiSite.UI_DocsML).toBeClickable();
        // const docsML = await uiSite.UI_DocsML.getText();
        // console.log('Docs Lebel Text::===', docsML);
        // await expect(uiSite.UI_DocsML).toHaveText("Docs");


        // await expect(uiSite.UI_miceML).toBeClickable();
        // const miscML = await uiSite.UI_miceML.getText();
        // console.log('Misc Lebel Text::===', miscML);
        // await expect(uiSite.UI_miceML).toHaveText("Misc");

        // await expect(uiSite.UI_editIcon).toBeClickable();
        // await expect(uiSite.UI_deleteIcon).toBeClickable();

        // await expect(uiSite.UI_paginationML).toExist();
        // await expect(uiSite.UI_paginationML).toBeClickable();




    })
})