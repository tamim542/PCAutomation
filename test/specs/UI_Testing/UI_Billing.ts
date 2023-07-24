import UI_Billing from '../../pageobjects/Locators/UI_Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Operation UI Automation'), () => {
    const uiBilling = new UI_Billing();
    const utilities = new Utilities();

    before("Open App", async () => {
        await browser.url('https://abc-5021.pc-staging.com/admin');
        await browser.maximizeWindow();
    })

    //-------------------------------------------------Website Setting UI Testing--------------------------------------------

    it(('Billing, Page automation'), async () => {

        await utilities.Signin();



        const billingText = await uiBilling.UI_billing.getText();
        console.log('Billing Lebel Text::===', billingText);
        await expect(uiBilling.UI_billing).toHaveText("Billing");

        await uiBilling.UI_billing.click();




    })

    /* -----------------------------------------------------------------
 
       -------------  Card  ----------------
 
  ----------------------------------------------------------------- */

    it(('Card Of Billing'), async () => {

        const cardText = await uiBilling.UI_cardBilling.getText();
        console.log('Card Text::===', cardText);
        await expect(uiBilling.UI_cardBilling).toHaveText("Card");

        await uiBilling.UI_cardBilling.click();

        const cardHolderText = await uiBilling.UI_cardHolderCard.getText();
        console.log('Card Holder Text::===', cardHolderText);
        await expect(uiBilling.UI_cardHolderCard).toHaveText("Card");



    })







    })




