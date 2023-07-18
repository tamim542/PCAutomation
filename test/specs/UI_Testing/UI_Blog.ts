import UI_Blog from '../../pageobjects/Locators/UI_Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Blog automation'), () => {
    const uiBlog = new UI_Blog();
    const utilities = new Utilities();


    it(('Blog, Page automation'), async () => {
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

        await uiBlog.UI_createNewAuthor.click();

        await expect(uiBlog.UI_nameAuthorField).toExist();
        await expect(uiBlog.UI_emailAuthorField).toExist();
        await expect(uiBlog.UI_facebookLinkAuthor).toExist();
        await expect(uiBlog.UI_instagramAuthor).toExist();
        await expect(uiBlog.UI_twitterAuthor).toExist();
        await expect(uiBlog.UI_youtubeAuthor).toExist();

        const authorImageText = await uiBlog.UI_authorImageAuthor.getText();
        console.log('Author Image Lebel Text::===', authorImageText);
        await expect(uiBlog.UI_authorImageAuthor).toHaveText("Author Image");

        const authorDetailsText = await uiBlog.UI_authorDetailsAuthor.getText();
        console.log('Author Details Lebel Text::===', authorDetailsText);
        await expect(uiBlog.UI_authorDetailsAuthor).toHaveText("Author Details");

        const saveAuthorText = await uiBlog.UI_saveAuthor.getText();
        console.log('Save Lebel Text::===', saveAuthorText);
        await expect(uiBlog.UI_saveAuthor).toHaveText("Save");


        /* -----------------------------------------------------------------
            
                  -------------  Tag  ----------------
           
         ----------------------------------------------------------------- */

         await uiBlog.UI_tagClick.click();

        const createNewTextTag = await uiBlog.UI_createNewTag.getText();
        console.log('Create New Text::===', createNewTextTag);
        await expect(uiBlog.UI_createNewTag).toHaveText("Create new");

        await expect(uiBlog.UI_searchTag).toExist();

        const tagNAmeTextTag = await uiBlog.UI_tagNameTag.getText();
        console.log('Tag Name Text::===', tagNAmeTextTag);
        await expect(uiBlog.UI_tagNameTag).toHaveText("TAG NAME");

        const tagTypeTextTag = await uiBlog.UI_tagTypeTag.getText();
        console.log('Tag Type Text::===', tagTypeTextTag);
        await expect(uiBlog.UI_tagTypeTag).toHaveText("TAG TYPE");

        await expect(uiBlog.UI_paginationTag).toExist();

        await uiBlog.UI_createNewTag.click();

        const nameTextTag = await uiBlog.UI_nameTag.getText();
        console.log('Name Text::===', nameTextTag);
        await expect(uiBlog.UI_nameTag).toHaveText("Name");

      
        const selectTagType = await uiBlog.UI_selectTagType.getText();
        console.log('Select a tag type  Text::===', selectTagType);
        await expect(uiBlog.UI_selectTagType).toHaveText("Select a tag type :");

        const blogTypeTagText = await uiBlog.UI_blogTypeTag.getText();
        console.log('Blog Type Text::===', blogTypeTagText);
        await expect(uiBlog.UI_blogTypeTag).toHaveText("Blog Type");

        const productTypeTag = await uiBlog.UI_productTypeTag.getText();
        console.log('Product Type  Text::===', productTypeTag);
        await expect(uiBlog.UI_productTypeTag).toHaveText("Product Type");

      


        


        



    })





})